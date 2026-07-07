import { Point, Species } from './types';

export const dist = (a: Point, b: Point): number =>
  Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

export const cumulativeDistances = (vertebrae: Point[]): number[] => {
  const cumulative: number[] = [0];
  for (let i = 1; i < vertebrae.length; i++) {
    cumulative.push(cumulative[i - 1] + dist(vertebrae[i - 1], vertebrae[i]));
  }
  return cumulative;
};

/**
 * 누적 척추 경계 거리 테이블에서 target 거리가 몇 개의 척추(vertebrae) 단위에 해당하는지
 * 선형보간으로 계산한다. 테이블 범위를 벗어나면 null(더 많은 척추 클릭 필요).
 */
export const vertebraCount = (target: number, cumulative: number[]): number | null => {
  if (cumulative.length < 2) return null;
  if (target > cumulative[cumulative.length - 1]) return null;

  for (let i = 0; i < cumulative.length - 1; i++) {
    const segStart = cumulative[i];
    const segEnd = cumulative[i + 1];
    if (target >= segStart && target <= segEnd) {
      const segLen = segEnd - segStart;
      const fraction = segLen > 0 ? (target - segStart) / segLen : 0;
      return i + fraction;
    }
  }
  return null;
};

export const round1 = (n: number): number => Math.round(n * 10) / 10;

export const angleOf = (a: Point, b: Point): number => Math.atan2(b.y - a.y, b.x - a.x);

export const angleDiff = (a: number, b: number): number => {
  let d = Math.abs(a - b) % (2 * Math.PI);
  if (d > Math.PI) d = 2 * Math.PI - d;
  return d;
};

export interface PerpendicularSnap {
  end: Point;
  isPerpendicular: boolean;
  angleDiffDeg: number;
}

/**
 * 단축선(start→rawEnd)이 장축선(refStart→refEnd)과 수직에 가까우면 정확히 수직으로 스냅한다.
 * (VHS 측정 시 단축은 장축과 수직으로 교차해야 정확하기 때문)
 */
export const snapToPerpendicular = (
  start: Point,
  rawEnd: Point,
  refStart: Point | null,
  refEnd: Point | null,
  toleranceDeg = 4
): PerpendicularSnap => {
  const dist2 = Math.hypot(rawEnd.x - start.x, rawEnd.y - start.y);
  if (!refStart || !refEnd || dist2 === 0) {
    return { end: rawEnd, isPerpendicular: false, angleDiffDeg: 999 };
  }

  const refAngle = angleOf(refStart, refEnd);
  const perp1 = refAngle + Math.PI / 2;
  const perp2 = refAngle - Math.PI / 2;
  const dragAngle = angleOf(start, rawEnd);

  const d1 = angleDiff(dragAngle, perp1);
  const d2 = angleDiff(dragAngle, perp2);
  const useAngle = d1 <= d2 ? perp1 : perp2;
  const minDiffDeg = (Math.min(d1, d2) * 180) / Math.PI;

  if (minDiffDeg <= toleranceDeg) {
    return {
      end: {
        x: start.x + Math.cos(useAngle) * dist2,
        y: start.y + Math.sin(useAngle) * dist2
      },
      isPerpendicular: true,
      angleDiffDeg: minDiffDeg
    };
  }
  return { end: rawEnd, isPerpendicular: false, angleDiffDeg: minDiffDeg };
};

export interface LineSnap {
  point: Point;
  isAligned: boolean;
}

/**
 * 척추 경계 점들이 지그재그로 찍히면 누적 거리가 실제 척추 경로보다 길어져 VHS/VLAS에 오차가
 * 생긴다. 이미 놓인 두 점(refStart→refEnd)이 이루는 직선에 새 클릭이 가까우면 그 직선 위로 스냅한다.
 */
export const snapToLine = (
  prevPoint: Point,
  rawPoint: Point,
  refStart: Point,
  refEnd: Point,
  toleranceDeg = 5
): LineSnap => {
  const d = Math.hypot(rawPoint.x - prevPoint.x, rawPoint.y - prevPoint.y);
  if (d === 0) return { point: rawPoint, isAligned: false };

  const refAngle = angleOf(refStart, refEnd);
  const rawAngle = angleOf(prevPoint, rawPoint);
  const diffDeg = (angleDiff(rawAngle, refAngle) * 180) / Math.PI;

  if (diffDeg <= toleranceDeg) {
    return {
      point: {
        x: prevPoint.x + Math.cos(refAngle) * d,
        y: prevPoint.y + Math.sin(refAngle) * d
      },
      isAligned: true
    };
  }
  return { point: rawPoint, isAligned: false };
};

export interface RangeVerdict {
  label: string;
  color: string;
}

export const interpretVHS = (species: Species, vhs: number): RangeVerdict => {
  const cutoff = species === 'dog' ? 10.5 : 8.1;
  if (vhs <= cutoff) return { label: '정상', color: '#27ae60' };
  return { label: '심장비대', color: '#c0392b' };
};

export const interpretVLAS = (species: Species, vlas: number): RangeVerdict => {
  if (species === 'cat') {
    return { label: '참고용 (표준 기준 제한적)', color: '#64748b' };
  }
  if (vlas <= 2.3) return { label: '정상', color: '#27ae60' };
  if (vlas <= 3.0) return { label: '경도 확장 의심', color: '#d97706' };
  return { label: '좌심방 확장 의심', color: '#c0392b' };
};
