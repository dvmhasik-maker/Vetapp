import React from 'react';
import { CatObesityResult } from './types';

interface CatObesityGuidelineProps {
  result: CatObesityResult;
}

const CatObesityGuideline: React.FC<CatObesityGuidelineProps> = ({ result }) => {
  const { banner } = result;

  return (
    <div className="cat-guideline-wrap">
      <div className={`result-banner-cat theme-${banner.theme}`}>
        <div className="rb-header">
          <span className="rb-icon">{banner.icon}</span>
          <span className="rb-label">{banner.label}</span>
        </div>
        <ul className="rb-actions">
          {banner.actions.map((action, idx) => (
            <li key={idx}>{action}</li>
          ))}
        </ul>
        {banner.note && <div className="rb-note">{banner.note}</div>}
      </div>

      <div className="ref-label-cat">
        ※ FBMI(Feline Body Mass Index)는 참고용 스크리닝 지표이며, 최종 비만 진단 및 관리 방침은 신체충실지수(BCS) 등 다른 소견과 함께 수의사의 임상적 판단에 따릅니다.
      </div>

      <style>{`
        .cat-guideline-wrap { width: 100%; }

        .result-banner-cat {
          border-radius: 14px;
          padding: 20px;
          border-left: 6px solid;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .rb-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .rb-icon { font-size: 1.5rem; }
        .rb-label { font-size: 1.05rem; font-weight: 800; line-height: 1.3; }

        .rb-actions { margin-left: 1.4rem; padding: 0; list-style-type: none; }
        .rb-actions li {
          margin-bottom: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          line-height: 1.4;
          position: relative;
        }
        .rb-actions li::before {
          content: '•';
          position: absolute;
          left: -1.2rem;
          color: currentColor;
          opacity: 0.6;
        }

        .rb-note { margin-top: 15px; font-size: 0.75rem; opacity: 0.7; font-style: italic; border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 10px; }

        .theme-blue { background: #eff6ff; border-color: #3b82f6; color: #1d4ed8; }
        .theme-green { background: #f0fdf4; border-color: #22c55e; color: #166534; }
        .theme-orange { background: #fffbeb; border-color: #f59e0b; color: #92400e; }
        .theme-red { background: #fef2f2; border-color: #ef4444; color: #991b1b; }

        .ref-label-cat {
          margin-top: 0.75rem;
          font-size: 0.65rem;
          color: #94a3b8;
          text-align: center;
          font-style: italic;
          line-height: 1.5;
          opacity: 0.8;
        }

        @media (max-width: 640px) {
          .rb-label { font-size: 1rem; }
          .rb-actions li { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
};

export default CatObesityGuideline;
