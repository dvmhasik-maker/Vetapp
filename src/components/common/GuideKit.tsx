import React from 'react';

interface GuideIntroProps {
  children: React.ReactNode;
}

export const GuideIntro: React.FC<GuideIntroProps> = ({ children }) => (
  <p className="guide-intro">{children}</p>
);

interface GuideStep {
  icon: string;
  title: string;
  desc: React.ReactNode;
}

interface GuideStepsProps {
  steps: GuideStep[];
}

export const GuideSteps: React.FC<GuideStepsProps> = ({ steps }) => (
  <div className="guide-steps">
    {steps.map((s, i) => (
      <div className="guide-step" key={i}>
        <div className="guide-step-num">{i + 1}</div>
        <div className="guide-step-body">
          <div className="guide-step-title">
            <span className="guide-step-icon">{s.icon}</span>{s.title}
          </div>
          <p className="guide-step-desc">{s.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

interface GuideFormulaProps {
  label?: string;
  children: React.ReactNode;
}

export const GuideFormula: React.FC<GuideFormulaProps> = ({ label = '계산식', children }) => (
  <div className="guide-formula">
    <span className="guide-formula-label">{label}</span>
    <code className="guide-formula-code">{children}</code>
  </div>
);

interface GuideNoteProps {
  children: React.ReactNode;
}

export const GuideNote: React.FC<GuideNoteProps> = ({ children }) => (
  <div className="guide-note">
    <span className="guide-note-icon">※</span>
    <span>{children}</span>
  </div>
);

export const GuideStyles: React.FC = () => (
  <style>{`
    .guide-intro {
      font-size: 0.92rem;
      line-height: 1.7;
      color: #475569;
      margin-bottom: 1.25rem;
    }
    .guide-intro strong { color: #1e293b; }

    .guide-steps {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 1.25rem;
    }
    .guide-step {
      display: flex;
      gap: 14px;
      position: relative;
      padding-bottom: 1.25rem;
    }
    .guide-step:last-child { padding-bottom: 0; }
    .guide-step::before {
      content: '';
      position: absolute;
      left: 13px;
      top: 28px;
      bottom: -2px;
      width: 2px;
      background: #e2e8f0;
    }
    .guide-step:last-child::before { display: none; }
    .guide-step-num {
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.78rem;
      font-weight: 800;
      box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
      z-index: 1;
    }
    .guide-step-body { padding-top: 2px; }
    .guide-step-title {
      font-weight: 700;
      color: #1e293b;
      font-size: 0.92rem;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 4px;
    }
    .guide-step-icon { font-size: 0.95rem; }
    .guide-step-desc {
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.6;
    }
    .guide-step-desc strong { color: #334155; font-weight: 700; }

    .guide-formula {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #f0f7ff, #eff6ff);
      border: 1px solid #dbeafe;
      border-radius: 12px;
      padding: 16px 18px;
      margin-bottom: 1.25rem;
      text-align: center;
    }
    .guide-formula-label {
      font-size: 0.72rem;
      font-weight: 800;
      color: #3b82f6;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .guide-formula-code {
      font-family: 'JetBrains Mono', 'Cascadia Code', 'SFMono-Regular', monospace;
      font-size: 0.88rem;
      font-weight: 600;
      color: #1e3a8a;
      line-height: 1.6;
      word-break: break-word;
    }

    .guide-note {
      display: flex;
      gap: 6px;
      align-items: flex-start;
      font-size: 0.78rem;
      color: #94a3b8;
      font-style: italic;
      line-height: 1.6;
      border-top: 1px dashed #e2e8f0;
      padding-top: 12px;
    }
    .guide-note-icon { flex-shrink: 0; }

    @media (max-width: 640px) {
      .guide-step-desc { font-size: 0.8rem; }
      .guide-formula-code { font-size: 0.78rem; }
    }
  `}</style>
);
