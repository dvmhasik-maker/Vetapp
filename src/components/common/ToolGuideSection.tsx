import React from 'react';
import { BookOpen } from 'lucide-react';

interface ToolGuideSectionProps {
  children: React.ReactNode;
}

const ToolGuideSection: React.FC<ToolGuideSectionProps> = ({ children }) => (
  <div className="tool-card-container tool-guide-section">
    <div className="tool-card-title">
      <BookOpen size={16} style={{ verticalAlign: '-3px', marginRight: '6px' }} />
      임상 가이드
    </div>
    {children}
  </div>
);

export default ToolGuideSection;
