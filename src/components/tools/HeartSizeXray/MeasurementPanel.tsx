import React, { useRef, useState } from 'react';
import { RotateCcw, Undo2, Upload, Calculator, SkipForward, LockKeyhole } from 'lucide-react';
import { Step } from './types';

interface MeasurementPanelProps {
  imageSrc: string | null;
  step: Step;
  vertebraCountPlaced: number;
  canFinishVertebrae: boolean;
  hasResult: boolean;
  onUpload: (file: File) => void;
  onUndo: () => void;
  onReset: () => void;
  onSkipVLAS: () => void;
  onCalculate: () => void;
  onConfirmPosition: () => void;
}

const STEP_INFO: Record<Step, { title: string; desc: string }> = {
  adjust: {
    title: '① 화면 위치 조정',
    desc: '마우스 휠(또는 손가락 핀치)로 확대하고, 드래그로 원하는 위치로 이동하세요. 위치를 다 잡으셨으면 아래 버튼을 눌러 화면을 고정하고 측정을 시작하세요.'
  },
  carina: { title: '② Carina (기관 분기부)', desc: '기관분기부(Carina)의 아래쪽 가장자리 지점을 클릭하세요.' },
  apex: { title: '③ 심첨 (Apex)', desc: '심장의 가장 아래쪽 꼭짓점을 클릭하세요. (장축 L 완성)' },
  shortAxis: {
    title: '④ 단축 (Short Axis)',
    desc: '심장 최대 폭 지점에서 반대쪽까지 마우스/손가락으로 드래그하세요. 장축(L)과 수직에 가까워지면 선이 초록색으로 바뀌며 정확히 수직으로 스냅됩니다.'
  },
  laBorder: { title: '⑤ 좌심방 후벽 (VLAS)', desc: '후대정맥(Caudal vena cava)이 심장 그림자와 만나는 교차점을 클릭하여 Carina에서 교차점까지의 선을 완성하세요.' },
  vertebrae: {
    title: '⑥ 흉추 경계 클릭',
    desc: 'T4번 흉추의 앞쪽(머리쪽) 경계를 먼저 클릭하세요. 그다음부터는 뒤쪽(꼬리쪽)으로 이어지는 다음 척추(T5, T6…)의 앞쪽 경계를 순서대로 계속 클릭하세요. 두 번째 점부터는 기준선과 일직선에 가까우면 초록색으로 표시되며 자동으로 정렬됩니다.'
  },
  done: { title: '측정 완료', desc: '결과가 계산되었습니다. 점을 드래그해 수정하면 다시 계산할 수 있습니다.' }
};

const MeasurementPanel: React.FC<MeasurementPanelProps> = ({
  imageSrc, step, vertebraCountPlaced, canFinishVertebrae, hasResult,
  onUpload, onUndo, onReset, onSkipVLAS, onCalculate, onConfirmPosition
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  if (!imageSrc) {
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith('image/')) onUpload(file);
    };

    return (
      <div
        className={`tool-card-container hsx-upload ${isDragging ? 'dragging' : ''}`}
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="tool-card-title">방사선 사진 업로드</div>
        <div className="hsx-upload-dropzone" onClick={() => fileInputRef.current?.click()}>
          <Upload size={28} className="hsx-upload-icon" />
          <p className="hsx-upload-desc">
            흉부 외측상 방사선 사진(JPG/PNG)을 드래그하거나 클릭해서 업로드하세요.
          </p>
          <button type="button" className="btn-primary-action" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}>
            <Upload size={18} /> 이미지 선택
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) onUpload(file);
            e.target.value = '';
          }}
        />
        <style>{`
          .hsx-upload-dropzone {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
            padding: 28px 16px;
            border: 2px dashed #cbd5e1;
            border-radius: 12px;
            background: #f8fafc;
            cursor: pointer;
            transition: border-color 0.2s, background 0.2s;
          }
          .hsx-upload-dropzone:hover { border-color: #94a3b8; background: #f1f5f9; }
          .hsx-upload.dragging .hsx-upload-dropzone { border-color: #3498db; background: #eff6ff; }
          .hsx-upload-icon { color: #94a3b8; }
          .hsx-upload.dragging .hsx-upload-icon { color: #3498db; }
          .hsx-upload-desc { font-size: 0.9rem; color: var(--text-muted); margin: 0; line-height: 1.6; }
        `}</style>
      </div>
    );
  }

  const info = STEP_INFO[step];

  return (
    <div className="tool-card-container hsx-panel">
      <div className="tool-card-title">측정 단계</div>

      <div className="hsx-step-box">
        <div className="hsx-step-title">{info.title}</div>
        <div className="hsx-step-desc">{info.desc}</div>
        {step === 'vertebrae' && (
          <div className="hsx-vertebra-count">
            다음 클릭 지점: <strong>T{4 + vertebraCountPlaced}번 앞쪽 경계</strong>
            <br />
            클릭한 척추 경계: <strong>{vertebraCountPlaced}</strong>개
            {canFinishVertebrae
              ? <span className="ok"> — 충분히 커버됨, 계산 가능</span>
              : <span className="warn"> — 아직 부족, 계속 클릭하세요</span>}
          </div>
        )}
      </div>

      {step === 'adjust' && (
        <button type="button" className="btn-primary-action hsx-calc-btn" onClick={onConfirmPosition}>
          <LockKeyhole size={18} /> 위치 확정하고 측정 시작
        </button>
      )}

      <div className="hsx-actions">
        {step === 'laBorder' && (
          <button type="button" className="hsx-btn-outline" onClick={onSkipVLAS}>
            <SkipForward size={16} /> VLAS 생략하고 척추 측정으로
          </button>
        )}
        <button type="button" className="hsx-btn-outline" onClick={onUndo} disabled={step === 'adjust'}>
          <Undo2 size={16} /> 실행 취소
        </button>
        <button type="button" className="hsx-btn-outline" onClick={onReset}>
          <RotateCcw size={16} /> 처음부터 다시
        </button>
      </div>

      {step === 'vertebrae' && (
        <button
          type="button"
          className="btn-primary-action hsx-calc-btn"
          onClick={onCalculate}
          disabled={!canFinishVertebrae}
        >
          <Calculator size={18} /> {hasResult ? '다시 계산하기' : '계산하기'}
        </button>
      )}

      <style>{`
        .hsx-step-box {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 10px;
          padding: 14px 16px;
          margin-bottom: 14px;
        }
        .hsx-step-title { font-weight: 800; color: #1e40af; font-size: 0.95rem; margin-bottom: 4px; }
        .hsx-step-desc { font-size: 0.85rem; color: #334155; line-height: 1.5; }
        .hsx-vertebra-count { margin-top: 8px; font-size: 0.82rem; color: #475569; }
        .hsx-vertebra-count .ok { color: #27ae60; font-weight: 700; }
        .hsx-vertebra-count .warn { color: #d97706; font-weight: 700; }

        .hsx-actions { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
        .hsx-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: #fff;
          color: #475569;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }
        .hsx-btn-outline:hover:not(:disabled) { background: #f8fafc; border-color: #cbd5e1; }
        .hsx-btn-outline:disabled { opacity: 0.4; cursor: not-allowed; }

        .hsx-calc-btn { margin-top: 4px; }
      `}</style>
    </div>
  );
};

export default MeasurementPanel;
