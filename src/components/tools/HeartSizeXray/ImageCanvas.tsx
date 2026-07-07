import React, { useRef, useState, useCallback, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Lock, Unlock } from 'lucide-react';
import { MainPointKey, MainPoints, Point, Step, HeartSizeResult } from './types';
import { snapToPerpendicular, snapToLine, interpretVHS, interpretVLAS } from './calc';

interface ImageCanvasProps {
  imageSrc: string;
  step: Step;
  mainPoints: MainPoints;
  vertebrae: Point[];
  result: HeartSizeResult | null;
  canFinishVertebrae: boolean;
  locked: boolean;
  onToggleLock: () => void;
  onAddPoint: (p: Point) => void;
  onDrawShortAxis: (start: Point, end: Point) => void;
  onUpdateMainPoint: (key: MainPointKey, p: Point) => void;
  onUpdateVertebra: (index: number, p: Point) => void;
}

export interface ImageCanvasHandle {
  exportImage: () => void;
}

const MIN_ZOOM = 0.2;
const MAX_ZOOM = 12;
const TAP_THRESHOLD = 6;

const POINT_META: Record<MainPointKey, { label: string; color: string }> = {
  carina: { label: 'Carina', color: '#ef4444' },
  apex: { label: '심첨', color: '#ef4444' },
  saStart: { label: '단축 시작', color: '#2563eb' },
  saEnd: { label: '단축 끝', color: '#2563eb' },
  laBorder: { label: 'LA 후벽', color: '#8b5cf6' }
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

type DragTarget = { type: 'main'; key: MainPointKey } | { type: 'vertebra'; index: number };
type GestureMode = 'pan' | 'pinch' | 'draw-sa' | null;
interface PreviewLine { start: Point; end: Point; isPerpendicular: boolean; }
interface VertebraPreview { point: Point; isAligned: boolean; }

const ImageCanvas = forwardRef<ImageCanvasHandle, ImageCanvasProps>(({
  imageSrc, step, mainPoints, vertebrae, result, canFinishVertebrae, locked, onToggleLock,
  onAddPoint, onDrawShortAxis, onUpdateMainPoint, onUpdateVertebra
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);
  const [previewLine, setPreviewLine] = useState<PreviewLine | null>(null);
  const [vertebraPreview, setVertebraPreview] = useState<VertebraPreview | null>(null);

  const gestureRef = useRef<{
    mode: GestureMode;
    pointers: Map<number, Point>;
    pan0: Point;
    zoom0: number;
    pointerStart?: Point;
    drawStart?: Point;
    dist0?: number;
    mid0?: Point;
    moved: boolean;
  }>({ mode: null, pointers: new Map(), pan0: { x: 0, y: 0 }, zoom0: 1, moved: false });

  const draggingRef = useRef<DragTarget | null>(null);

  const fitToView = useCallback((size: { width: number; height: number }) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const scale = Math.min(rect.width / size.width, rect.height / size.height) * 0.95;
    setZoom(scale);
    setPan({
      x: (rect.width - size.width * scale) / 2,
      y: (rect.height - size.height * scale) / 2
    });
  }, []);

  useEffect(() => {
    setNaturalSize(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [imageSrc]);

  useEffect(() => {
    // 척추가 L/S를 충분히 덮어 계산 가능해지면 정렬 유도 표시를 꺼서 "계속 클릭해야 할 것 같은" 느낌을 없앤다
    if (step !== 'vertebrae' || canFinishVertebrae) setVertebraPreview(null);
  }, [step, canFinishVertebrae]);

  useEffect(() => {
    // 계산 결과가 나오면 원본 사진 전체가 보이도록 자동으로 화면에 맞춘다
    if (result && naturalSize) fitToView(naturalSize);
  }, [result, naturalSize, fitToView]);

  const handleImgLoad = () => {
    const img = imgRef.current;
    if (!img) return;
    const size = { width: img.naturalWidth, height: img.naturalHeight };
    setNaturalSize(size);
    fitToView(size);
  };

  // 휠 확대/축소: React onWheel은 passive로 등록되어 preventDefault가 무시되므로 네이티브 리스너 사용
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (locked) return;
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prevZoom => {
        const newZoom = clamp(prevZoom * factor, MIN_ZOOM, MAX_ZOOM);
        setPan(prevPan => {
          const imgX = (cx - prevPan.x) / prevZoom;
          const imgY = (cy - prevPan.y) / prevZoom;
          return { x: cx - imgX * newZoom, y: cy - imgY * newZoom };
        });
        return newZoom;
      });
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [locked]);

  const imgFromContainerPoint = (sx: number, sy: number): Point => ({
    x: (sx - pan.x) / zoom,
    y: (sy - pan.y) / zoom
  });

  const toImageCoords = (clientX: number, clientY: number): Point | null => {
    const container = containerRef.current;
    if (!container) return null;
    const rect = container.getBoundingClientRect();
    return imgFromContainerPoint(clientX - rect.left, clientY - rect.top);
  };

  // 흉추 경계를 지그재그로 찍으면 누적 거리가 실제보다 길어져 VHS/VLAS에 오차가 생긴다.
  // 이미 2개 이상의 척추 점이 있으면 첫 점→마지막 점 방향에 맞춰 새 점을 직선으로 스냅한다.
  const alignToVertebraLine = (raw: Point): VertebraPreview => {
    if (vertebrae.length < 2) return { point: raw, isAligned: false };
    const last = vertebrae[vertebrae.length - 1];
    const snap = snapToLine(last, raw, vertebrae[0], last, 5);
    return { point: snap.point, isAligned: snap.isAligned };
  };

  const startGestureFromPointers = () => {
    const g = gestureRef.current;
    const pts = Array.from(g.pointers.values());
    if (pts.length === 1) {
      g.pointerStart = pts[0];
      g.moved = false;
      g.pan0 = { ...pan };
      g.zoom0 = zoom;
      if (step === 'shortAxis') {
        g.mode = 'draw-sa';
        g.drawStart = imgFromContainerPoint(pts[0].x, pts[0].y);
        setPreviewLine({ start: g.drawStart, end: g.drawStart, isPerpendicular: false });
      } else {
        g.mode = 'pan';
      }
    } else if (pts.length === 2) {
      g.mode = 'pinch';
      g.pan0 = { ...pan };
      g.zoom0 = zoom;
      g.dist0 = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      g.mid0 = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
      g.moved = true;
      setPreviewLine(null);
    } else {
      g.mode = null;
    }
  };

  const handleContainerPointerDown = (e: React.PointerEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    gestureRef.current.pointers.set(e.pointerId, { x: e.clientX - rect.left, y: e.clientY - rect.top });
    startGestureFromPointers();
    container.setPointerCapture(e.pointerId);
  };

  const handleContainerPointerMove = (e: React.PointerEvent) => {
    const g = gestureRef.current;

    // 버튼을 누르지 않은 순수 호버(마우스)일 때: 흉추 정렬 미리보기만 갱신하고 종료
    if (!g.pointers.has(e.pointerId)) {
      if (step === 'vertebrae' && !canFinishVertebrae && e.pointerType === 'mouse') {
        const hoverImg = toImageCoords(e.clientX, e.clientY);
        if (hoverImg) setVertebraPreview(alignToVertebraLine(hoverImg));
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    g.pointers.set(e.pointerId, { x: sx, y: sy });

    if (g.mode === 'pan' && g.pointerStart) {
      const dx = sx - g.pointerStart.x;
      const dy = sy - g.pointerStart.y;
      if (Math.hypot(dx, dy) > TAP_THRESHOLD) g.moved = true;
      if (!locked) setPan({ x: g.pan0.x + dx, y: g.pan0.y + dy });
    } else if (g.mode === 'draw-sa' && g.drawStart) {
      const dx = g.pointerStart ? sx - g.pointerStart.x : 0;
      const dy = g.pointerStart ? sy - g.pointerStart.y : 0;
      if (Math.hypot(dx, dy) > TAP_THRESHOLD) g.moved = true;
      const rawEnd = imgFromContainerPoint(sx, sy);
      const snap = snapToPerpendicular(g.drawStart, rawEnd, mainPoints.carina, mainPoints.apex, 4);
      setPreviewLine({ start: g.drawStart, end: snap.end, isPerpendicular: snap.isPerpendicular });
    } else if (g.mode === 'pinch' && g.mid0 && g.dist0) {
      const pts = Array.from(g.pointers.values());
      if (pts.length < 2) return;
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const mid = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
      if (!locked) {
        const newZoom = clamp(g.zoom0 * (d / g.dist0), MIN_ZOOM, MAX_ZOOM);
        const imgAnchorX = (g.mid0.x - g.pan0.x) / g.zoom0;
        const imgAnchorY = (g.mid0.y - g.pan0.y) / g.zoom0;
        setZoom(newZoom);
        setPan({ x: mid.x - imgAnchorX * newZoom, y: mid.y - imgAnchorY * newZoom });
      }
    }
  };

  const handleContainerPointerUp = (e: React.PointerEvent) => {
    const g = gestureRef.current;
    const wasTap = g.mode === 'pan' && !g.moved && g.pointers.size === 1;
    const wasDraw = g.mode === 'draw-sa' && g.moved && g.pointers.size === 1;
    let tapPos = wasTap ? toImageCoords(e.clientX, e.clientY) : null;
    if (tapPos && step === 'vertebrae') {
      tapPos = alignToVertebraLine(tapPos).point;
    }
    const finalLine = wasDraw && previewLine ? { start: previewLine.start, end: previewLine.end } : null;

    g.pointers.delete(e.pointerId);
    if (containerRef.current?.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
    startGestureFromPointers();

    if (tapPos && step !== 'done') onAddPoint(tapPos);
    if (finalLine) onDrawShortAxis(finalLine.start, finalLine.end);
    setPreviewLine(null);
  };

  const toScreen = (p: Point): Point => ({ x: p.x * zoom + pan.x, y: p.y * zoom + pan.y });

  const startDragPoint = (e: React.PointerEvent, target: DragTarget) => {
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    draggingRef.current = target;
  };

  const moveDragPoint = (e: React.PointerEvent) => {
    e.stopPropagation();
    const target = draggingRef.current;
    if (!target) return;
    const p = toImageCoords(e.clientX, e.clientY);
    if (!p) return;
    if (target.type === 'main') onUpdateMainPoint(target.key, p);
    else onUpdateVertebra(target.index, p);
  };

  const endDragPoint = (e: React.PointerEvent) => {
    e.stopPropagation();
    draggingRef.current = null;
  };

  const zoomBy = (factor: number) => {
    const container = containerRef.current;
    if (!container || locked) return;
    const rect = container.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setZoom(prevZoom => {
      const newZoom = clamp(prevZoom * factor, MIN_ZOOM, MAX_ZOOM);
      setPan(prevPan => {
        const imgX = (cx - prevPan.x) / prevZoom;
        const imgY = (cy - prevPan.y) / prevZoom;
        return { x: cx - imgX * newZoom, y: cy - imgY * newZoom };
      });
      return newZoom;
    });
  };

  // html2canvas는 CSS transform(확대/이동)이 걸린 <img>를 제대로 캡처하지 못해 사진이 빠지는
  // 문제가 있었다. 그래서 저장은 별도의 <canvas> 2D 드로잉으로 직접 그린다. 저장 이미지는 화면에
  // 보이는 확대/이동 상태와 무관하게 항상 원본 사진 크기(naturalSize) 그대로 출력한다 — 점 좌표가
  // 이미 원본 이미지 좌표계이므로 별도 변환 없이 그대로 사용할 수 있다.
  const exportImage = useCallback(() => {
    const img = imgRef.current;
    if (!img || !naturalSize) return;

    const canvas = document.createElement('canvas');
    canvas.width = naturalSize.width;
    canvas.height = naturalSize.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0, naturalSize.width, naturalSize.height);

    // 선 굵기/폰트 크기를 원본 해상도에 비례시키는 배율 (기준: 가로 1000px)
    const k = naturalSize.width / 1000;

    const drawLine = (a: Point, b: Point, color: string, width: number, dash: number[] = []) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = width * k;
      ctx.setLineDash(dash.map(d => d * k));
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      ctx.restore();
    };

    if (mainPoints.carina && mainPoints.apex) drawLine(mainPoints.carina, mainPoints.apex, '#ef4444', 2.5);
    if (mainPoints.saStart && mainPoints.saEnd) drawLine(mainPoints.saStart, mainPoints.saEnd, '#2563eb', 2.5);
    if (mainPoints.carina && mainPoints.laBorder) drawLine(mainPoints.carina, mainPoints.laBorder, '#8b5cf6', 2.5, [4, 4]);

    if (vertebrae.length > 1) {
      ctx.save();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2 * k;
      ctx.setLineDash([5 * k, 3 * k]);
      ctx.beginPath();
      vertebrae.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
      ctx.restore();
    }

    const drawPoint = (p: Point, color: string, r: number, label: string, labelColor: string) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * k, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.lineWidth = 2 * k;
      ctx.strokeStyle = '#fff';
      ctx.stroke();
      if (label) {
        ctx.font = `700 ${11 * k}px sans-serif`;
        ctx.fillStyle = labelColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(label, p.x, p.y - 14 * k);
      }
      ctx.restore();
    };

    (Object.keys(mainPoints) as MainPointKey[]).forEach(key => {
      const p = mainPoints[key];
      if (!p) return;
      const meta = POINT_META[key];
      drawPoint(p, meta.color, 6, meta.label, meta.color);
    });

    vertebrae.forEach((p, i) => {
      drawPoint(p, '#f59e0b', 5, `T${4 + i}`, '#b45309');
    });

    if (result) {
      const vhsV = interpretVHS(result.species, result.vhs);
      const vlasV = result.vlas !== null ? interpretVLAS(result.species, result.vlas) : null;
      const rows: { label: string; value: string; verdict: string; color: string }[] = [
        { label: 'VHS', value: result.vhs.toFixed(1), verdict: vhsV.label, color: vhsV.color }
      ];
      if (result.vlas !== null && vlasV) {
        rows.push({ label: 'VLAS', value: result.vlas.toFixed(1), verdict: vlasV.label, color: vlasV.color });
      }

      const boxW = 150 * k;
      const rowH = 42 * k;
      const pad = 14 * k;
      const boxH = pad * 2 + rows.length * rowH;
      const margin = 12 * k;
      const bx = canvas.width - margin - boxW;
      const by = margin;

      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      roundRect(ctx, bx, by, boxW, boxH, 10 * k);
      ctx.fill();

      let ty = by + pad;
      rows.forEach(r => {
        ctx.textBaseline = 'top';
        ctx.font = `700 ${14 * k}px sans-serif`;
        ctx.fillStyle = '#1e293b';
        ctx.textAlign = 'left';
        ctx.fillText(r.label, bx + pad, ty);

        ctx.font = `800 ${16 * k}px sans-serif`;
        ctx.fillStyle = r.color;
        ctx.textAlign = 'right';
        ctx.fillText(r.value, bx + boxW - pad, ty);

        ty += 20 * k;
        ctx.font = `700 ${11 * k}px sans-serif`;
        ctx.fillStyle = r.color;
        ctx.textAlign = 'right';
        ctx.fillText(r.verdict, bx + boxW - pad, ty);

        ty += rowH - 20 * k;
      });
      ctx.restore();
    }

    const link = document.createElement('a');
    link.download = `VETAPP_분석방사선사진_${Date.now()}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.92);
    link.click();
  }, [naturalSize, mainPoints, vertebrae, result]);

  useImperativeHandle(ref, () => ({ exportImage }), [exportImage]);

  const vertebraScreenPts = vertebrae.map(toScreen);
  const previewScreen = previewLine ? { start: toScreen(previewLine.start), end: toScreen(previewLine.end) } : null;
  const vertebraPreviewScreen = vertebraPreview ? toScreen(vertebraPreview.point) : null;

  const vhsVerdict = result ? interpretVHS(result.species, result.vhs) : null;
  const vlasVerdict = result && result.vlas !== null ? interpretVLAS(result.species, result.vlas) : null;

  // 배지는 뷰포트 모서리가 아니라 실제 원본 사진의 오른쪽 상단 모서리를 따라간다
  const imageTopRight = naturalSize ? toScreen({ x: naturalSize.width, y: 0 }) : null;

  return (
    <div className="hsx-canvas-wrap">
      <div
        ref={containerRef}
        className="hsx-viewport"
        onPointerDown={handleContainerPointerDown}
        onPointerMove={handleContainerPointerMove}
        onPointerUp={handleContainerPointerUp}
        onPointerCancel={handleContainerPointerUp}
        onPointerLeave={() => setVertebraPreview(null)}
      >
        <div
          className="hsx-content"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
        >
          <img ref={imgRef} src={imageSrc} onLoad={handleImgLoad} draggable={false} alt="흉부 방사선" />
        </div>

        <svg className="hsx-overlay">
          {mainPoints.carina && mainPoints.apex && (
            <line
              x1={toScreen(mainPoints.carina).x} y1={toScreen(mainPoints.carina).y}
              x2={toScreen(mainPoints.apex).x} y2={toScreen(mainPoints.apex).y}
              stroke="#ef4444" strokeWidth={2.5}
            />
          )}
          {mainPoints.saStart && mainPoints.saEnd && (
            <line
              x1={toScreen(mainPoints.saStart).x} y1={toScreen(mainPoints.saStart).y}
              x2={toScreen(mainPoints.saEnd).x} y2={toScreen(mainPoints.saEnd).y}
              stroke="#2563eb" strokeWidth={2.5}
            />
          )}
          {mainPoints.carina && mainPoints.laBorder && (
            <line
              x1={toScreen(mainPoints.carina).x} y1={toScreen(mainPoints.carina).y}
              x2={toScreen(mainPoints.laBorder).x} y2={toScreen(mainPoints.laBorder).y}
              stroke="#8b5cf6" strokeWidth={2.5} strokeDasharray="4 4"
            />
          )}
          {vertebraScreenPts.length > 1 && (
            <polyline
              points={vertebraScreenPts.map(p => `${p.x},${p.y}`).join(' ')}
              fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 3"
            />
          )}

          {previewScreen && (
            <g>
              <line
                x1={previewScreen.start.x} y1={previewScreen.start.y}
                x2={previewScreen.end.x} y2={previewScreen.end.y}
                stroke={previewLine?.isPerpendicular ? '#22c55e' : '#2563eb'}
                strokeWidth={3}
                strokeDasharray={previewLine?.isPerpendicular ? undefined : '6 4'}
              />
              {previewLine?.isPerpendicular && (
                <text
                  x={(previewScreen.start.x + previewScreen.end.x) / 2}
                  y={(previewScreen.start.y + previewScreen.end.y) / 2 - 10}
                  textAnchor="middle" fontSize={13} fontWeight={800} fill="#16a34a"
                >
                  ✓ 수직
                </text>
              )}
            </g>
          )}

          {vertebraPreviewScreen && vertebraScreenPts.length > 0 && (
            <g>
              <line
                x1={vertebraScreenPts[vertebraScreenPts.length - 1].x}
                y1={vertebraScreenPts[vertebraScreenPts.length - 1].y}
                x2={vertebraPreviewScreen.x} y2={vertebraPreviewScreen.y}
                stroke={vertebraPreview?.isAligned ? '#22c55e' : '#94a3b8'}
                strokeWidth={2} strokeDasharray="4 3"
              />
              <circle cx={vertebraPreviewScreen.x} cy={vertebraPreviewScreen.y} r={5}
                fill={vertebraPreview?.isAligned ? '#22c55e' : '#94a3b8'} opacity={0.8} />
              {vertebraPreview?.isAligned && (
                <text
                  x={vertebraPreviewScreen.x} y={vertebraPreviewScreen.y - 12}
                  textAnchor="middle" fontSize={12} fontWeight={800} fill="#16a34a"
                >
                  ✓ 일직선
                </text>
              )}
            </g>
          )}

          {(Object.keys(mainPoints) as MainPointKey[]).map(key => {
            const p = mainPoints[key];
            if (!p) return null;
            const sp2 = toScreen(p);
            const meta = POINT_META[key];
            return (
              <g key={key} transform={`translate(${sp2.x},${sp2.y})`}>
                <circle
                  r={16} fill="transparent" style={{ cursor: 'grab', touchAction: 'none', pointerEvents: 'auto' }}
                  onPointerDown={e => startDragPoint(e, { type: 'main', key })}
                  onPointerMove={moveDragPoint}
                  onPointerUp={endDragPoint}
                  onPointerCancel={endDragPoint}
                />
                <circle r={6} fill={meta.color} stroke="#fff" strokeWidth={2} pointerEvents="none" />
                <text y={-14} textAnchor="middle" fontSize={11} fontWeight={700} fill={meta.color} pointerEvents="none">
                  {meta.label}
                </text>
              </g>
            );
          })}

          {vertebrae.map((p, i) => {
            const sp2 = toScreen(p);
            return (
              <g key={i} transform={`translate(${sp2.x},${sp2.y})`}>
                <circle
                  r={16} fill="transparent" style={{ cursor: 'grab', touchAction: 'none', pointerEvents: 'auto' }}
                  onPointerDown={e => startDragPoint(e, { type: 'vertebra', index: i })}
                  onPointerMove={moveDragPoint}
                  onPointerUp={endDragPoint}
                  onPointerCancel={endDragPoint}
                />
                <circle r={5} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} pointerEvents="none" />
                <text y={-12} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b45309" pointerEvents="none">
                  {`T${4 + i}`}
                </text>
              </g>
            );
          })}
        </svg>

        {result && vhsVerdict && imageTopRight && (
          <div
            className="hsx-result-badge"
            style={{ left: imageTopRight.x - 12, top: imageTopRight.y + 12, transform: 'translateX(-100%)' }}
          >
            <div className="hsx-badge-row">
              <span>VHS</span>
              <strong style={{ color: vhsVerdict.color }}>{result.vhs.toFixed(1)}</strong>
            </div>
            <div className="hsx-badge-verdict" style={{ color: vhsVerdict.color }}>{vhsVerdict.label}</div>
            {result.vlas !== null && vlasVerdict && (
              <>
                <div className="hsx-badge-row hsx-badge-row-2nd">
                  <span>VLAS</span>
                  <strong style={{ color: vlasVerdict.color }}>{result.vlas.toFixed(1)}</strong>
                </div>
                <div className="hsx-badge-verdict" style={{ color: vlasVerdict.color }}>{vlasVerdict.label}</div>
              </>
            )}
          </div>
        )}

        <div className="hsx-zoom-controls" onPointerDown={e => e.stopPropagation()}>
          <button
            type="button"
            className={`hsx-lock-btn ${locked ? 'active' : ''}`}
            onClick={onToggleLock}
            aria-label={locked ? '화면 고정 해제' : '화면 고정'}
          >
            {locked ? <Lock size={18} /> : <Unlock size={18} />}
          </button>
          <button type="button" onClick={() => zoomBy(1.2)} aria-label="확대" disabled={locked}><ZoomIn size={18} /></button>
          <button type="button" onClick={() => zoomBy(0.8)} aria-label="축소" disabled={locked}><ZoomOut size={18} /></button>
          <button
            type="button"
            onClick={() => naturalSize && !locked && fitToView(naturalSize)}
            aria-label="화면에 맞추기"
            disabled={locked}
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .hsx-canvas-wrap { width: 100%; }
        .hsx-viewport {
          position: relative;
          width: 100%;
          height: 65vh;
          max-height: 720px;
          background: #0f172a;
          border-radius: 12px;
          overflow: hidden;
          touch-action: none;
          user-select: none;
          box-shadow: var(--shadow-sm);
        }
        .hsx-content {
          position: absolute;
          top: 0; left: 0;
          transform-origin: 0 0;
          will-change: transform;
        }
        .hsx-content img {
          display: block;
          max-width: none;
          pointer-events: none;
        }
        .hsx-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .hsx-result-badge {
          position: absolute;
          background: rgba(255,255,255,0.95);
          border-radius: 10px;
          padding: 10px 14px;
          box-shadow: var(--shadow-md);
          min-width: 130px;
        }
        .hsx-badge-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #1e293b;
        }
        .hsx-badge-row-2nd { margin-top: 8px; }
        .hsx-badge-row strong { font-size: 1rem; }
        .hsx-badge-verdict { font-size: 0.72rem; font-weight: 700; text-align: right; margin-top: 1px; }

        .hsx-zoom-controls {
          position: absolute;
          right: 12px;
          bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .hsx-zoom-controls button {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: none;
          background: rgba(255,255,255,0.92);
          color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
        }
        .hsx-zoom-controls button:hover:not(:disabled) { background: #fff; }
        .hsx-zoom-controls button:disabled { opacity: 0.4; cursor: not-allowed; }
        .hsx-lock-btn.active { background: #3b82f6; color: #fff; }

        @media (max-width: 768px) {
          .hsx-viewport { height: 50vh; border-radius: 10px; }
        }
      `}</style>
    </div>
  );
});

ImageCanvas.displayName = 'ImageCanvas';

export default ImageCanvas;
