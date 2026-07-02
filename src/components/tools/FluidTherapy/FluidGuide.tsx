import React from 'react';
import { AlertTriangle, Info, ClipboardList } from 'lucide-react';

const FluidGuide: React.FC = () => {
  return (
    <div className="fluid-guide-content">
      <section className="guide-section">
        <div className="section-title"><Info size={20} /> <h4>1. 수액 요법의 기본 원칙</h4></div>
        <p>
          수액 요법은 단순히 부족한 수분을 보충하는 처치가 아닙니다. 환자의 <strong>혈역학적 안정(Perfusion)을 유지</strong>하고,
          <strong>전해질 및 산-염기 불균형을 교정</strong>하며, 환자가 잃고 있는 <strong>지속적인 소실량(Ongoing loss)</strong>을 보충하는 
          수의학 임상의 핵심적인 치료 전략입니다. 환자의 상태에 따라 적절한 수액제 선택과 투여 속도 조절이 필수적입니다.
        </p>
      </section>

      <section className="guide-section">
        <div className="section-title"><ClipboardList size={20} /> <h4>2. 수액량 계산의 세 요소 (Three Pillars)</h4></div>
        <ul className="guide-list">
          <li><strong>Deficit (탈수량):</strong> 체중(kg) × 탈수 정도(%) × 1000 = 교정량(mL). <br/>
              <span className="text-sm text-slate-500">※ 일반적으로 12-24시간에 걸쳐 나누어 보충하며, 환자의 혈역학적 상태에 따라 속도를 조절합니다.</span>
          </li>
          <li><strong>Maintenance (유지량):</strong> 대사 유지에 필요한 기초 요구량. <br/>
              <span className="text-sm text-slate-500">※ 공식: 70 × 체중(kg)^0.75 (또는 종/상태에 따른 40-60ml/kg/day 등 적용 가능)</span>
          </li>
          <li><strong>Ongoing Loss (지속 소실량):</strong> 구토, 설사, 다뇨 등으로 인한 추가 소실량. <br/>
              <span className="text-sm text-slate-500">※ 측정되거나 추정된 값을 반드시 합산하여 보충해야 합니다.</span>
          </li>
        </ul>
      </section>

      <section className="guide-section warning-box">
        <div className="section-title"><AlertTriangle size={20} className="text-amber-600" /> <h4>3. 과수액(Fluid Overload) 및 모니터링</h4></div>
        <p>
          수액 처치 중인 환자는 심부전, 신부전, 낮은 혈장 알부민 농도로 인해 <strong>폐수종(Pulmonary Edema)</strong> 등 과수액 징후가 나타날 위험이 있습니다.
        </p>
        <ul className="guide-list">
          <li><strong>매일 체중 측정:</strong> 급격한 체중 증가는 수분 정체를 의미합니다.</li>
          <li><strong>호흡수 및 노력성 호흡 모니터링:</strong> 호흡수 증가는 폐수종의 초기 신호일 수 있습니다.</li>
          <li><strong>임상 징후 확인:</strong> 비강 분비물(장액성), 결막 부종, 기침 발생 여부 확인.</li>
        </ul>
      </section>

      <div className="guide-reference">
        <p>※ 참고 문헌: 2024 AAHA/AAFP Fluid Therapy Guidelines for Dogs and Cats. 최신 임상 가이드라인을 반영하고 있습니다.</p>
      </div>

      <style>{`
        .section-title { display: flex; align-items: center; gap: 10px; color: #1e293b; margin: 1.5rem 0 0.75rem; }
        .section-title h4 { font-size: 1.1rem; font-weight: 700; margin: 0; }
        .guide-section p { margin-bottom: 1rem; color: #475569; line-height: 1.6; }
        .guide-list { padding-left: 1.5rem; margin-bottom: 1.5rem; color: #475569; }
        .guide-list li { margin-bottom: 0.75rem; }
        .warning-box { background: #fffbeb; padding: 1.25rem; border-radius: 12px; border: 1px solid #fef3c7; }
        .text-sm { font-size: 0.85rem; }
        .text-slate-500 { color: #64748b; }
        .guide-reference { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; font-size: 0.8rem; color: #94a3b8; font-style: italic; }
      `}</style>
    </div>
  );
};

export default FluidGuide;
