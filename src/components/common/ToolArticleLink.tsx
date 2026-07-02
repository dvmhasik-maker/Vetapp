import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

interface ToolArticleLinkProps {
  articlePath: string;
  description: string;
}

const ToolArticleLink: React.FC<ToolArticleLinkProps> = ({ articlePath, description }) => (
  <Link to={articlePath} className="tool-article-link">
    <BookOpen size={15} className="tal-icon" />
    <span className="tal-desc">{description}</span>
    <span className="tal-read">임상 가이드 읽기 <ChevronRight size={13} /></span>
    <style>{`
      .tool-article-link {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 10px;
        padding: 0.7rem 1rem;
        margin-bottom: 1.25rem;
        text-decoration: none;
        transition: background 0.15s;
      }
      .tool-article-link:hover { background: #dbeafe; }
      .tal-icon { color: #3b82f6; flex-shrink: 0; }
      .tal-desc {
        font-size: 0.85rem;
        color: #1e40af;
        flex: 1;
        line-height: 1.4;
        word-break: keep-all;
      }
      .tal-read {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 0.8rem;
        font-weight: 700;
        color: #2563eb;
        white-space: nowrap;
        flex-shrink: 0;
      }
      @media (max-width: 480px) {
        .tal-desc { font-size: 0.8rem; }
        .tal-read { display: none; }
      }
    `}</style>
  </Link>
);

export default ToolArticleLink;
