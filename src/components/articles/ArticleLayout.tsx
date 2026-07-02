import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, ExternalLink } from 'lucide-react';
import { useSEO } from '../common/useSEO';

interface ArticleLayoutProps {
  title: string;
  description: string;
  toolPath: string;
  toolName: string;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ title, description, toolPath, toolName, children }) => {
  useSEO(title, description);

  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/articles" className="back-btn-prominent">
          <ChevronLeft size={18} /> 수의학 가이드
        </Link>
      </div>

      <div className="article-hero">
        <div className="article-hero-tag">
          <BookOpen size={14} /> 수의학 임상 가이드
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="tool-card-container article-card-container-pc">
        <div className="article-content-wrap">
          <div className="article-body">
            {children}
          </div>
        </div>
      </div>

      <div className="article-tool-cta">
        <p>이 가이드와 연관된 임상 계산 도구를 사용해 보세요.</p>
        <Link to={toolPath} className="cta-btn">
          <ExternalLink size={16} /> {toolName} 도구 바로가기
        </Link>
      </div>

      <style>{`
        /* ── 히어로 ── */
        .article-hero {
          padding: 2rem 1rem 2.5rem;
          text-align: center;
        }
        .article-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          color: #3b82f6;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 1rem;
          border: 1px solid #bfdbfe;
        }
        .article-hero h1 {
          font-size: 1.65rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.6rem;
          line-height: 1.35;
          word-break: keep-all;
        }
        .article-hero p {
          font-size: 0.95rem;
          color: #64748b;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.65;
          word-break: keep-all;
        }

        /* ── 본문 컨테이너: PC에서 읽기 최적 너비로 중앙 정렬 ── */
        .article-content-wrap {
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── 본문 타이포그래피 ── */
        .article-body {
          font-size: 0.97rem;
          color: #334155;
          line-height: 1.8;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .article-body h2 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin: 2.75rem 0 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f1f5f9;
        }
        .article-body h2:first-child {
          margin-top: 0.25rem;
        }
        .article-body h3 {
          font-size: 1.02rem;
          font-weight: 700;
          color: #1e293b;
          margin: 1.75rem 0 0.5rem;
        }
        .article-body p {
          margin-bottom: 1rem;
        }
        .article-body ul, .article-body ol {
          padding-left: 1.35rem;
          margin-bottom: 1.25rem;
        }
        .article-body li {
          margin-bottom: 0.65rem;
          line-height: 1.7;
        }
        .article-body strong {
          color: #0f172a;
          font-weight: 700;
        }

        /* ── 콜아웃 박스 ── */
        .article-callout {
          background: #fffbeb;
          border: 1px solid #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 0 10px 10px 0;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
        .article-callout p { margin: 0; color: #92400e; font-size: 0.9rem; line-height: 1.65; word-break: keep-all; }
        .article-callout-title {
          font-weight: 800;
          color: #78350f;
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
        }
        .article-info {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-left: 4px solid #3b82f6;
          border-radius: 0 10px 10px 0;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
        .article-info p { margin: 0; color: #1d4ed8; font-size: 0.9rem; }

        /* ── 참고문헌 ── */
        .article-reference {
          margin-top: 2.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.82rem;
          color: #94a3b8;
          font-style: italic;
          line-height: 1.9;
        }

        /* ── 하단 CTA ── */
        .article-tool-cta {
          max-width: 760px;
          margin: 2.5rem auto 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 1px solid #bae6fd;
          border-radius: 14px;
          padding: 1.5rem;
          text-align: center;
        }
        .article-tool-cta p {
          font-size: 0.9rem;
          color: #0369a1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0ea5e9;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .cta-btn:hover { background: #0284c7; }

        /* ── PC 최적화 (≥1024px) ── */
        @media (min-width: 1024px) {
          .article-hero {
            padding: 2.5rem 1rem 3rem;
          }
          .article-hero h1 {
            font-size: 2rem;
          }
          .article-hero p {
            font-size: 1rem;
          }
          .article-body {
            font-size: 1rem;
          }
          .article-body h2 {
            font-size: 1.3rem;
          }
          .article-body h3 {
            font-size: 1.08rem;
          }
          /* tool-card-container 패딩 PC에서 확대 */
          .article-card-container-pc {
            padding: 2rem 2.5rem !important;
          }
        }

        /* ── 모바일 최적화 (≤640px) ── */
        @media (max-width: 640px) {
          .article-hero {
            padding: 1.5rem 0.5rem 2rem;
          }
          .article-hero h1 {
            font-size: 1.3rem;
          }
          .article-hero p {
            font-size: 0.875rem;
          }
          .article-body {
            font-size: 0.92rem;
          }
          .article-body h2 {
            font-size: 1.1rem;
            margin-top: 2rem;
          }
          .article-body h3 {
            font-size: 0.97rem;
          }
          .article-body ul, .article-body ol {
            padding-left: 1.1rem;
          }
          .article-callout {
            padding: 0.875rem 1rem;
          }
          .cta-btn {
            width: 100%;
            font-size: 0.9rem;
            padding: 0.875rem 1rem;
          }
          .article-tool-cta {
            padding: 1.25rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ArticleLayout;
