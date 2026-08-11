import React from 'react';
import { BookMarked, ChevronDown } from 'lucide-react';

const PulmonaryHTNReference: React.FC = () => {
  return (
    <details className="ph-ref-accordion">
      <summary className="ph-ref-summary">
        <span className="ph-ref-summary-left">
          <BookMarked size={16} />
          폐성고혈압(PH) 평가 기준표 참고자료
        </span>
        <ChevronDown size={18} className="ph-ref-chevron" />
      </summary>

      <div className="ph-ref-body">
        <p className="ph-ref-desc">TR 최대속도 + 해부학적 변화 기반 폐성고혈압 가능성 평가 (ACVIM 기준)</p>

        <div className="ph-ref-section">
          <h4>표 1. TR 최대속도 &amp; 해부학적 변화 수에 따른 폐성고혈압 가능성</h4>
          <div className="ph-ref-scroll">
            <div className="ph-matrix">
              <div className="ph-corner">
                <span className="lbl-tr">변화 수</span>
                <span className="lbl-bl">TR 속도</span>
              </div>
              <div className="ph-col-head">0</div>
              <div className="ph-col-head">1</div>
              <div className="ph-col-head">2</div>
              <div className="ph-col-head">3</div>

              <div className="ph-row-head">3.0 이하</div>
              <div className="ph-cell low">Low</div>
              <div className="ph-cell low">Low</div>
              <div className="ph-cell mid">Intermediate</div>
              <div className="ph-cell high">High</div>

              <div className="ph-row-head">3.0 ~ 3.4</div>
              <div className="ph-cell mid">Intermediate</div>
              <div className="ph-cell mid">Intermediate</div>
              <div className="ph-cell high">High</div>
              <div className="ph-cell high">High</div>

              <div className="ph-row-head">3.4 초과</div>
              <div className="ph-cell mid">Intermediate</div>
              <div className="ph-cell high">High</div>
              <div className="ph-cell high">High</div>
              <div className="ph-cell high">High</div>
            </div>
          </div>
          <div className="ph-legend">
            <span><i className="ph-dot low" />Low</span>
            <span><i className="ph-dot mid" />Intermediate</span>
            <span><i className="ph-dot high" />High</span>
          </div>
        </div>

        <div className="ph-ref-section">
          <h4>표 2. 해부학적 위치별 폐성고혈압 시사 소견</h4>
          <div className="ph-ref-scroll">
            <div className="ph-grid2">
              <div className="ph-g2-head">해부학 위치 1</div>
              <div className="ph-g2-head">해부학 위치 2</div>
              <div className="ph-g2-head">해부학 위치 3</div>

              <div className="ph-g2-cell c1">심실중격 편평화<br />(특히 수축기)</div>
              <div className="ph-g2-cell c2">폐동맥 확장 (PA/Ao &gt; 1.0)</div>
              <div className="ph-g2-cell c3">우심방 확장</div>

              <div className="ph-g2-cell c1">좌심실 충만량 감소<br />또는 크기 감소</div>
              <div className="ph-g2-cell c2">PR 속도 &gt; 2.5m/s</div>
              <div className="ph-g2-cell c3">CVC 확장</div>

              <div className="ph-g2-cell c1">우심실 비대<br />(벽 비후, 심실 확장, 둘다)</div>
              <div className="ph-g2-cell c2">RPAD index &lt; 30%</div>
              <div className="ph-g2-cell empty" />

              <div className="ph-g2-cell c1">우심실 수축 기능장애</div>
              <div className="ph-g2-cell c2">RVOT(=PV 속도) AT &lt; 52~58ms<br />or AT:ET ratio &lt; 0.30</div>
              <div className="ph-g2-cell empty" />

              <div className="ph-g2-cell empty" />
              <div className="ph-g2-cell c2">PV 파형에 Systolic notching</div>
              <div className="ph-g2-cell empty" />
            </div>
          </div>
          <div className="ph-note">
            ※ 표 1의 "해부학적 변화 수"는 위 표 2의 세 위치(좌심 / 폐동맥·우심실 / 우심방·CVC) 각 카테고리에서 1개 이상의 소견이 확인될 때 1개로 카운트합니다.
          </div>
        </div>
      </div>

      <style>{`
        .ph-ref-accordion {
          margin-top: 12px;
          margin-bottom: 24px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #bbf7d0;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .ph-ref-summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #f0fdf4;
          font-weight: 700;
          font-size: 0.9rem;
          color: #15803d;
          user-select: none;
        }
        .ph-ref-summary::-webkit-details-marker { display: none; }
        .ph-ref-summary-left { display: flex; align-items: center; gap: 8px; }
        .ph-ref-chevron { transition: transform 0.2s ease; color: #16a34a; flex-shrink: 0; }
        .ph-ref-accordion[open] > .ph-ref-summary .ph-ref-chevron { transform: rotate(180deg); }

        .ph-ref-body { padding: 18px 16px; }
        .ph-ref-desc { font-size: 0.8rem; color: #64748b; margin: 0 0 16px; }

        .ph-ref-section { margin-bottom: 22px; }
        .ph-ref-section:last-child { margin-bottom: 0; }
        .ph-ref-section h4 {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0369a1;
          border-left: 3px solid #0369a1;
          padding-left: 8px;
          margin: 0 0 10px;
        }

        .ph-ref-scroll { overflow-x: auto; }

        .ph-matrix {
          display: grid;
          grid-template-columns: 70px repeat(4, 1fr);
          gap: 3px;
          font-size: 0.75rem;
          min-width: 380px;
        }
        .ph-corner { position: relative; background: #fff; overflow: hidden; min-height: 38px; }
        .ph-corner::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 80px; height: 1.2px;
          background: #cbd5e1;
          transform-origin: 0 0;
          transform: rotate(28deg);
        }
        .ph-corner .lbl-tr { position: absolute; right: 3px; top: 2px; font-size: 0.62rem; font-weight: 700; color: #334155; }
        .ph-corner .lbl-bl { position: absolute; left: 3px; bottom: 2px; font-size: 0.62rem; font-weight: 700; color: #334155; }

        .ph-col-head, .ph-row-head {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          border-radius: 4px;
          text-align: center;
          padding: 2px 4px;
        }
        .ph-col-head { background: #0f172a; color: #fff; min-height: 38px; }
        .ph-row-head { background: #475569; color: #fff; font-size: 0.68rem; }

        .ph-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          border-radius: 4px;
          min-height: 46px;
          text-align: center;
        }
        .ph-cell.low { background: #d1fae5; color: #065f46; }
        .ph-cell.mid { background: #fef3c7; color: #92400e; }
        .ph-cell.high { background: #fee2e2; color: #991b1b; }

        .ph-legend { display: flex; gap: 14px; justify-content: center; margin-top: 10px; font-size: 0.7rem; color: #475569; }
        .ph-legend span { display: inline-flex; align-items: center; gap: 5px; }
        .ph-dot { width: 9px; height: 9px; border-radius: 3px; display: inline-block; }
        .ph-dot.low { background: #bbf7d0; }
        .ph-dot.mid { background: #fef08a; }
        .ph-dot.high { background: #fecaca; }

        .ph-grid2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3px;
          font-size: 0.72rem;
          min-width: 480px;
        }
        .ph-g2-head {
          background: #0f172a;
          color: #fff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 4px;
          border-radius: 4px;
        }
        .ph-g2-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8px 6px;
          border-radius: 4px;
          min-height: 46px;
          line-height: 1.4;
        }
        .ph-g2-cell.c1, .ph-g2-cell.c3 { background: #f1f5f9; color: #1e293b; }
        .ph-g2-cell.c2 { background: #e2e8f0; color: #1e293b; }
        .ph-g2-cell.empty { background: transparent; }

        .ph-note { font-size: 0.68rem; color: #64748b; margin-top: 8px; line-height: 1.5; }

        @media (max-width: 640px) {
          .ph-ref-summary { font-size: 0.82rem; padding: 10px 12px; }
          .ph-ref-body { padding: 14px 12px; }
        }
      `}</style>
    </details>
  );
};

export default PulmonaryHTNReference;
