import React from 'react';
import { Sparkles, BrainCircuit, ShieldCheck, Stethoscope } from 'lucide-react';

const AtopyGuide: React.FC = () => {
  return (
    <div className="atopy-guide-content">
      <section className="guide-section">
        <div className="section-title"><Sparkles size={20} className="text-purple-500" /> <h4>1. 개 아토피성 피부염(CAD)이란?</h4></div>
        <p>
          개 아토피성 피부염은 환경 알레르겐(집먼지진드기, 꽃가루 등)에 대한 면역 과민 반응으로 발생하는 <strong>만성, 염증성, 가려움성 피부 질환</strong>입니다. 
          이는 단순한 피부 문제가 아닌 면역 체계의 불균형에서 기인하며, 평생 동안 지속적인 관리와 모니터링이 필요한 질환입니다.
        </p>
      </section>

      <section className="guide-section">
        <div className="section-title"><BrainCircuit size={20} className="text-blue-500" /> <h4>2. 진단 접근법 (Favrot's Criteria)</h4></div>
        <p>아토피는 단일 검사로 확진되는 질환이 아니며, 다양한 피부 질환을 배제하는 <strong>제외 진단(Diagnosis of Exclusion)</strong>을 통해 접근합니다.</p>
        <ul className="guide-list">
          <li><strong>주요 감별 대상:</strong> 식이 알레르기, 벼룩 알레르기성 피부염, 농피증 및 말라세지아 피부염.</li>
          <li><strong>진단 기준 활용:</strong> Favrot's Criteria 8가지 항목 중 5가지 이상 만족 시 아토피 가능성을 매우 높게 판단합니다.</li>
        </ul>
      </section>

      <section className="guide-section">
        <div className="section-title"><ShieldCheck size={20} className="text-green-500" /> <h4>3. 복합적 관리(Multimodal Therapy)의 중요성</h4></div>
        <p>
          아토피 치료의 핵심은 '하나의 약물'에 의존하는 것이 아니라, 환자 개별 상황에 맞춘 <strong>복합적인 관리 전략</strong>을 수립하는 것입니다.
        </p>
        <ul className="guide-list">
          <li><strong>피부 장벽 강화:</strong> 세라마이드 등 지질 성분이 포함된 샴푸/보습제 및 오메가-3 지방산 급여.</li>
          <li><strong>알레르겐 관리:</strong> 환경 알레르기 검사를 통한 원인 파악 및 노출 최소화.</li>
          <li><strong>가려움증의 효과적 조절:</strong> 아포퀠, 사이토포인트 등 최신 생물학적 제제와 약물 활용.</li>
          <li><strong>이차 감염 제어:</strong> 가려움증을 악화시키는 농피증과 말라세지아를 주기적으로 점검하고 즉각 치료.</li>
        </ul>
      </section>

      <section className="guide-section">
        <div className="section-title"><Stethoscope size={20} className="text-indigo-500" /> <h4>4. 임상 수의사를 위한 제언</h4></div>
        <p>
          보호자에게 아토피는 <strong>'완치가 아닌 관리의 질환'</strong>임을 충분히 교육해야 합니다. 
          치료 반응성이 좋을 때 약물을 무조건 중단하기보다, 최소 용량으로 가려움증을 억제하는 '유지 관리 계획'을 세우는 것이 환자의 삶의 질을 높이는 핵심입니다.
        </p>
      </section>

      <div className="guide-reference">
        <p>※ 참고 문헌: Favrot C, et al. A prospective study on the clinical features of chronic canine atopic dermatitis. Vet Dermatol. 2010. 최신 가이드라인에 기반하여 작성되었습니다.</p>
      </div>

      <style>{`
        .section-title { display: flex; align-items: center; gap: 10px; color: #1e293b; margin: 1.5rem 0 0.75rem; }
        .section-title h4 { font-size: 1.1rem; font-weight: 700; margin: 0; }
        .guide-section p { margin-bottom: 1rem; color: #475569; line-height: 1.6; }
        .guide-list { padding-left: 1.5rem; margin-bottom: 1.5rem; color: #475569; }
        .guide-list li { margin-bottom: 0.75rem; }
        .guide-reference { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; font-size: 0.8rem; color: #94a3b8; font-style: italic; }
      `}</style>
    </div>
  );
};

export default AtopyGuide;
