import React from 'react';
import { BookOpen, BadgeCheck } from 'lucide-react';

interface ToolGuideSectionProps {
  children: React.ReactNode;
  reviewedDate: string;
}

const ToolGuideSection: React.FC<ToolGuideSectionProps> = ({ children, reviewedDate }) => (
  <div className="tool-card-container tool-guide-section">
    <div className="tool-card-title">
      <BookOpen size={16} style={{ verticalAlign: '-3px', marginRight: '6px' }} />
      임상 가이드
    </div>
    {children}
    <div className="guide-reviewer-credit">
      <BadgeCheck size={14} />
      <span>감수: 윤하식 원장 (수의사면허 제14393호 · 여의도 동물병원) · 최종 검토일 {reviewedDate}</span>
    </div>
    <style>{`
      .guide-reviewer-credit {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
        font-size: 0.78rem;
        color: #94a3b8;
      }
      .guide-reviewer-credit svg {
        color: #3b82f6;
        flex-shrink: 0;
      }
    `}</style>
  </div>
);

export default ToolGuideSection;
