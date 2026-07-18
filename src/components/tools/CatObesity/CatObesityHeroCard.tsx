import React from 'react';
import { Cat as CatIcon } from 'lucide-react';
import { CatObesityResult } from './types';

interface CatObesityHeroCardProps {
  result: CatObesityResult | null;
}

const CatObesityHeroCard: React.FC<CatObesityHeroCardProps> = ({ result }) => {
  return (
    <div className="cat-hero-slot">
      {result ? (
        <div className={`cat-hero-card theme-${result.category}`}>
          <div className="hero-icon-bg"><CatIcon size={100} /></div>
          <p className="hero-label">FBMI (체지방률)</p>
          <div className="hero-main-value">
            <span className="value">{result.fbmi.toFixed(1)}</span>
            <span className="unit">%</span>
          </div>
          <div className="hero-category-badge">
            {result.banner.icon} {result.categoryLabel}
          </div>
        </div>
      ) : (
        <div className="cat-hero-empty">
          <div className="empty-icon">🐾</div>
          <p>몸통 둘레와 뒷다리 길이를 입력하면<br />결과가 이곳에 바로 표시됩니다.</p>
        </div>
      )}

      <style>{`
        .cat-hero-slot { height: 100%; min-width: 0; }
        .cat-hero-card, .cat-hero-empty {
          height: 100%;
          box-sizing: border-box;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .cat-hero-card {
          padding: 1.5rem;
          color: #fff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .cat-hero-card.theme-under { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
        .cat-hero-card.theme-normal { background: linear-gradient(135deg, #22c55e, #15803d); }
        .cat-hero-card.theme-over { background: linear-gradient(135deg, #f59e0b, #b45309); }
        .cat-hero-card.theme-obese { background: linear-gradient(135deg, #ef4444, #b91c1c); }

        .hero-icon-bg { position: absolute; right: -15px; bottom: -15px; opacity: 0.15; color: #fff; transform: rotate(-10deg); }
        .hero-label { font-size: 0.75rem; font-weight: 800; color: rgba(255,255,255,0.85); text-transform: uppercase; letter-spacing: 0.05em; }
        .hero-main-value { display: flex; align-items: baseline; gap: 0.5rem; margin: 0.6rem 0 0.75rem; }
        .hero-main-value .value { font-size: 3.25rem; font-weight: 900; line-height: 1; }
        .hero-main-value .unit { font-size: 1.15rem; font-weight: 700; color: rgba(255,255,255,0.85); }
        .hero-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.18);
          padding: 0.4rem 0.9rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 0.9rem;
          width: fit-content;
        }

        .cat-hero-empty {
          align-items: center;
          gap: 0.75rem;
          background: #fff;
          border: 1.5px dashed #e2e8f0;
          padding: 2rem;
          text-align: center;
        }
        .cat-hero-empty .empty-icon { font-size: 2.5rem; opacity: 0.5; }
        .cat-hero-empty p { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; font-weight: 600; }

        @media (max-width: 900px) {
          .cat-hero-card, .cat-hero-empty { min-height: 220px; }
        }
        @media (max-width: 640px) {
          .hero-main-value .value { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default CatObesityHeroCard;
