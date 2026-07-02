import React from 'react';
import { Activity, Thermometer, AlertCircle, Search } from 'lucide-react';

const HypoGuide: React.FC = () => {
  return (
    <div className="hypo-guide-content">
      <section className="guide-section">
        <div className="section-title"><Activity size={20} className="text-blue-500" /> <h4>1. 개 갑상선기능저하증(Hypothyroidism)의 이해</h4></div>
        <p>
          개 갑상선기능저하증은 주로 갑상선 자체의 파괴(림프구성 갑상선염 또는 특발성 위축)로 인해 갑상선 호르몬 분비가 부족해지는 질환입니다. 
          신진대사 속도가 저하되어 체중 증가, 무기력증, 피부 질환(털빠짐, 색소침착) 등이 전신적으로 나타납니다.
        </p>
      </section>

      <section className="guide-section">
        <div className="section-title"><Search size={20} className="text-purple-500" /> <h4>2. 진단 프로토콜 및 복합 지표 활용</h4></div>
        <p>단일 호르몬 검사만으로는 오진의 가능성이 높으므로, 반드시 임상 증상과 함께 다음의 복합 지표를 종합적으로 평가해야 합니다.</p>
        <ul className="guide-list">
          <li><strong>Total T4 (TT4):</strong> 선별 검사로 활용되나, 비갑상선 질환(ESS)에 의해 낮게 측정될 수 있습니다.</li>
          <li><strong>Free T4 (by ED):</strong> TT4보다 진단적 가치가 높으며, ESS의 영향을 비교적 적게 받습니다.</li>
          <li><strong>TSH (Thyrotropin):</strong> T4가 낮으면서 TSH가 높은 경우 진단적 가치가 매우 높으나, 약 25-30% 환자에서는 정상일 수 있습니다.</li>
          <li><strong>K-Value 활용:</strong> 0.7 * fT4 - TSH 공식을 통해 비갑상선 질환과 진성 갑상선기능저하증을 감별하는 도구로 활용합니다.</li>
        </ul>
      </section>

      <section className="guide-section warning-box">
        <div className="section-title"><AlertCircle size={20} className="text-amber-600" /> <h4>3. 주의: 비갑상선 질환(ESS)과의 감별</h4></div>
        <p>
          <strong>가장 흔한 오진의 원인입니다.</strong> 다른 전신 질환이 있거나 스테로이드, 페노바비탈 등 특정 약물을 복용 중인 경우 갑상선 호르몬 수치가 일시적으로 낮아질 수 있습니다(ESS). 
          이때는 호르몬 보충 없이 원인 질환을 우선 치료하고 호르몬 수치를 재평가해야 합니다.
        </p>
      </section>

      <section className="guide-section">
        <div className="section-title"><Thermometer size={20} className="text-indigo-500" /> <h4>4. 치료 및 모니터링 원칙</h4></div>
        <ul className="guide-list">
          <li><strong>투약:</strong> Levothyroxine (T4) 보충. (주로 0.02 mg/kg, 1일 2회 투여 시작)</li>
          <li><strong>모니터링:</strong> 투약 후 4~6시간(Peak level)에 채혈하여 수치를 확인합니다.</li>
          <li><strong>평가:</strong> 호르몬 수치뿐만 아니라, 보호자가 보고하는 임상 증상(활력, 식욕, 피부 개선)의 개선 여부를 종합하여 용량을 최종 결정합니다.</li>
        </ul>
      </section>

      <div className="guide-reference">
        <p>※ 참고 문헌: Ettinger SJ, Feldman EC, et al. Textbook of Veterinary Internal Medicine. 최신 임상 가이드라인과 Consensus Statement를 기반으로 작성되었습니다.</p>
      </div>

      <style>{`
        .section-title { display: flex; align-items: center; gap: 10px; color: #1e293b; margin: 1.5rem 0 0.75rem; }
        .section-title h4 { font-size: 1.1rem; font-weight: 700; margin: 0; }
        .guide-section p { margin-bottom: 1rem; color: #475569; line-height: 1.6; }
        .guide-list { padding-left: 1.5rem; margin-bottom: 1.5rem; color: #475569; }
        .guide-list li { margin-bottom: 0.75rem; }
        .warning-box { background: #fffbeb; padding: 1.25rem; border-radius: 12px; border: 1px solid #fef3c7; }
        .guide-reference { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; font-size: 0.8rem; color: #94a3b8; font-style: italic; }
      `}</style>
    </div>
  );
};

export default HypoGuide;
