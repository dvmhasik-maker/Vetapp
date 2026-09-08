import React from 'react';
import { AlertCircle, FileCheck, Info } from 'lucide-react';
import GuideFAQ from '../../common/GuideFAQ';

const CushingGuide: React.FC = () => {
  return (
    <div className="cushing-guide-content">
      <section className="guide-section">
        <div className="section-title"><Info size={20} className="text-blue-500" /> <h4>1. 부신피질기능항진증(Cushing's Syndrome)이란?</h4></div>
        <p>
          쿠싱 증후군은 부신에서 코르티솔(Cortisol)이 과다하게 분비되어 전신적인 대사 이상을 초래하는 질환입니다. 
          뇌하수체 종양(PDH, 약 80-85%) 또는 부신 종양(AT, 약 15-20%)이 주요 원인입니다. 
          다뇨/다갈, 복부 팽만(Pot-belly), 대칭성 탈모, 피부 얇아짐 등 전형적인 증상을 동반합니다.
        </p>
      </section>

      <section className="guide-section">
        <div className="section-title"><FileCheck size={20} className="text-purple-500" /> <h4>2. 주요 확진 검사 전략</h4></div>
        <p>검사 결과는 반드시 <strong>'임상 증상'과 함께 해석</strong>해야 합니다. 무증상 환자에게서 호르몬 수치 이상만으로 쿠싱을 진단해서는 안 됩니다.</p>
        <ul className="guide-list">
          <li><strong>LDDST:</strong> 가장 높은 민감도를 가지는 선별 검사입니다. 덱사메타손 투여 후 코르티솔의 불충분한 억제를 확인합니다.</li>
          <li><strong>ACTH 자극 검사:</strong> 의원성(Iatrogenic) 쿠싱 여부 판별 및 트릴로스탄(Trilostane) 치료 모니터링 시 표준 검사입니다.</li>
          <li><strong>UCCR:</strong> 매우 높은 민감도를 가지므로, 수치가 정상이라면 쿠싱일 가능성은 극히 낮습니다(제외 진단용).</li>
        </ul>
      </section>

      <section className="guide-section warning-box">
        <div className="section-title"><AlertCircle size={20} className="text-amber-600" /> <h4>3. 치료(Trilostane) 및 안전 모니터링</h4></div>
        <p>치료의 성공 기준은 호르몬 농도뿐만 아니라 <strong>'보호자가 보고하는 임상 증상 개선'</strong>입니다.</p>
        <ul className="guide-list">
          <li><strong>모니터링:</strong> 투약 후 2~4주 후 첫 검사. 임상 증상(음수량/식욕)과 혈액 검사결과를 종합합니다.</li>
          <li><strong>치명적 부작용:</strong> 투약 후 기력 저하, 식욕 부진, 구토가 나타나면 즉시 투약을 중단하고 부신피질기능저하증(애디슨) 여부를 확인하십시오.</li>
        </ul>
      </section>

      <GuideFAQ
        items={[
          {
            q: '스트레스나 다른 질환이 있어도 LDDST 결과가 정확한가요?',
            a: '아니요. 스트레스, 통증, 당뇨병 등 다른 전신 질환이 있으면 위양성(가짜 쿠싱 소견)이 흔하게 나타납니다. 검사 전 최소 며칠간 안정된 상태를 확인하고, 결과가 애매하면 임상 증상과 함께 재해석하거나 재검사를 고려해야 합니다.',
          },
          {
            q: '트릴로스탄 투약 후 언제부터 효과가 나타나나요?',
            a: '보통 투약 2주 이내에 음수량·식욕 등 임상 증상이 먼저 호전되기 시작하며, 완전한 효과 판정은 첫 ACTH 자극 검사(투약 2~4주 후)를 기준으로 합니다. 증상 개선이 없다면 용량 조절 전에 진단 자체를 재검토해야 합니다.',
          },
          {
            q: '부신 종양(AT)과 뇌하수체 의존성(PDH)은 어떻게 구분하나요?',
            a: 'LDDST 패턴, 내인성 ACTH 농도, 복부 초음파상 부신 크기 및 좌우 비대칭 여부를 종합해 감별합니다. 확진이 필요한 경우 복부 CT 등 영상 검사를 추가로 진행하기도 합니다.',
          },
        ]}
      />

      <div className="guide-reference">
        <p>※ 참고 문헌: Behrend EN, et al. 2012 ACVIM consensus statement for spontaneous canine hyperadrenocorticism (updated 2024).</p>
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

export default CushingGuide;
