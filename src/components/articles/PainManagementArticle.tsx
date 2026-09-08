import React from 'react';
import ArticleLayout from './ArticleLayout';

const PainManagementArticle: React.FC = () => (
  <ArticleLayout
    title="동물병원 통증 평가와 다중모드 진통 관리 가이드"
    description="개·고양이 통증 평가 스케일 활용법, 급성·만성 통증의 구분, 다중모드 진통(Multimodal Analgesia) 설계 원칙"
  >
    <h2>1. 동물의 통증을 놓치기 쉬운 이유</h2>
    <p>
      개와 고양이는 야생에서 약함을 드러내지 않도록 진화한 종이라, 상당한 통증이 있어도 겉으로는 평소와
      비슷하게 행동하는 경우가 많습니다. 특히 고양이는 개보다 통증 표현이 더 미묘해서, 단순히 '식욕이
      줄었다', '숨어 지낸다' 정도의 변화가 유일한 단서인 경우도 흔합니다. 통증 관리의 첫 단계는 표준화된
      평가 도구를 사용해 이 미묘한 신호를 놓치지 않는 것입니다.
    </p>

    <h2>2. 표준화된 통증 평가 스케일</h2>
    <ul>
      <li>
        <strong>Glasgow Composite Measure Pain Scale (CMPS-SF, 개):</strong> 자세, 발성, 상처 부위 반응 등을
        점수화하여 진통제 투여 여부를 객관적으로 판단하는 데 널리 사용됩니다.
      </li>
      <li>
        <strong>Feline Grimace Scale (고양이):</strong> 귀 위치, 눈매, 수염 위치, 머리 자세 등 안면 표정 변화
        5가지 항목을 점수화하는 도구로, 특히 급성 통증 평가에서 신뢰도가 높습니다.
      </li>
      <li>
        <strong>만성 통증(예: 골관절염) 평가:</strong> 급성 스케일과 달리 보호자가 가정에서 관찰한 활동성
        변화(계단 오르내리기, 점프, 걸음걸이)를 기반으로 한 설문형 도구가 더 유용합니다.
      </li>
    </ul>

    <h2>3. 급성 통증 vs 만성 통증</h2>
    <p>
      급성 통증(수술 후, 외상)은 명확한 원인과 발생 시점이 있고 치유되면서 감소하는 것이 정상 경과입니다.
      반면 만성 통증(골관절염, 종양 관련 통증 등)은 수개월~수년에 걸쳐 서서히 진행하며, 중추 감작
      (central sensitization)이 동반되어 원인 부위 자극이 없어도 통증이 지속되는 경우가 있습니다. 이
      차이는 치료 전략에도 직접 영향을 미쳐, 만성 통증은 원인 제거만으로는 해결되지 않고 장기적인
      다중모드 관리가 필요합니다.
    </p>

    <h2>4. 다중모드 진통(Multimodal Analgesia)의 원칙</h2>
    <p>
      단일 약물에 의존하기보다 <strong>서로 다른 기전의 약물을 병용</strong>하여 각 약물의 용량을 낮추면서도
      진통 효과는 상승시키는 것이 현대 통증 관리의 핵심 원칙입니다.
    </p>
    <ul>
      <li><strong>오피오이드:</strong> 중추성 통증 경로를 억제하며 급성·중등도 이상 통증에서 핵심적인 역할을 합니다.</li>
      <li><strong>NSAIDs:</strong> 말초 염증 매개 통증에 효과적이나, 신장·위장관 기저 질환이 있는 환자에서는 신중한 적용이 필요합니다.</li>
      <li><strong>국소 마취(Local/Regional block):</strong> 수술 부위 신경 전달 자체를 차단해 전신 진통제 요구량을 줄입니다.</li>
      <li><strong>보조제(가바펜틴, 아만타딘 등):</strong> 신경병증성 통증이나 중추 감작이 의심되는 만성 통증에서 병용됩니다.</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 고양이 NSAID 사용 시 주의</div>
      <p>
        고양이는 개보다 NSAID 대사 능력이 낮고 신장 부작용에 더 취약합니다. 장기 투여 시 반드시 최소
        유효 용량을 사용하고, 정기적인 신장 수치 모니터링을 병행해야 합니다.
      </p>
    </div>

    <h2>5. 골관절염 환자의 비약물적 관리</h2>
    <p>
      약물 치료와 함께 체중 관리, 저충격 운동(수영 등 재활치료), 미끄럽지 않은 바닥재 등 환경 개선을
      병행하면 진통제 용량을 줄이면서도 삶의 질을 유지하는 데 도움이 됩니다. 특히 과체중은 관절에 가해지는
      부하를 직접적으로 늘리므로, 체중 감량 자체가 하나의 치료 전략으로 다뤄져야 합니다.
    </p>

    <h2>6. 보호자 교육: 통증 신호 체크리스트</h2>
    <ul>
      <li>평소보다 활동량이 줄고 눕는 시간이 늘었는가?</li>
      <li>계단이나 소파 오르내리기를 주저하는가?</li>
      <li>그루밍(고양이)이나 몸단장 빈도가 줄었는가?</li>
      <li>만졌을 때 특정 부위에서 움찔하거나 피하는 반응이 있는가?</li>
      <li>평소와 다른 자세로 앉거나 눕는가?</li>
    </ul>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· WSAVA Global Pain Council Guidelines for Recognition, Assessment and Treatment of Pain.</p>
      <p>· AAHA/AAFP Pain Management Guidelines for Dogs and Cats.</p>
      <p>· Evangelista MC, et al. Facial expressions of pain in cats: the development and validation of a Feline Grimace Scale. Sci Rep. 2019.</p>
    </div>
  </ArticleLayout>
);

export default PainManagementArticle;
