import React from 'react';
import ArticleLayout from './ArticleLayout';

const HypothyroidismArticle: React.FC = () => (
  <ArticleLayout
    title="개 갑상선기능저하증 진단·치료 가이드"
    description="TT4·fT4·TSH 복합 지표 해석, ESS 감별, Levothyroxine 투여와 모니터링까지 임상 프로토콜 완전 정리"
    toolPath="/hypothyroidism"
    toolName="갑기저 진단 도구"
  >
    <h2>1. 개 갑상선기능저하증이란?</h2>
    <p>
      갑상선기능저하증(Hypothyroidism)은 개에서 가장 흔한 내분비 질환 중 하나입니다.
      갑상선에서 T3·T4 호르몬 분비가 만성적으로 감소하여 전신 신진대사가 저하되는 것이 핵심 병태 생리입니다.
    </p>
    <p>
      주요 원인은 두 가지입니다.
    </p>
    <ul>
      <li><strong>림프구성 갑상선염(Lymphocytic Thyroiditis):</strong> 전체의 약 50%를 차지. 자가면역 반응으로 갑상선 조직이 파괴됩니다. 유전적 소인이 있으며 항갑상선 항체(TGAA)가 검출되기도 합니다.</li>
      <li><strong>특발성 갑상선 위축(Idiopathic Thyroid Atrophy):</strong> 약 50%. 갑상선 조직이 지방 조직으로 대체되는 퇴행성 변화로, 면역 관련성은 불분명합니다.</li>
    </ul>
    <p>
      호발 견종으로는 골든 리트리버, 도베르만 핀셔, 아이리시 세터, 복서, 코커 스패니얼 등이 있으며, 주로 <strong>4~10세의 중·대형견</strong>에서 많이 진단됩니다.
    </p>

    <h2>2. 주요 임상 증상</h2>
    <p>
      갑상선 호르몬은 거의 모든 장기의 대사에 관여하기 때문에 증상이 매우 다양하고 비특이적입니다.
      이 때문에 보호자가 "그냥 나이 들어서 그런 것"으로 오해하고 늦게 내원하는 경우가 많습니다.
    </p>
    <ul>
      <li><strong>체중 증가 / 비만:</strong> 식이량 변화 없이 살이 찌는 것이 전형적 주소.</li>
      <li><strong>무기력·운동 불내성:</strong> 산책을 꺼리거나 쉽게 지침. 추위를 타는 경향(체온 조절 저하).</li>
      <li><strong>피부 및 피모 이상:</strong> 털이 건조하고 푸석해짐, 대칭성 탈모(양쪽 옆구리), 쥐꼬리 현상(rat tail), 피부 두꺼워짐(점액부종).</li>
      <li><strong>신경·근육 증상:</strong> 드물게 말초신경병증, 후지 허약, 안면 신경 마비, 실조 등 신경 증상 동반.</li>
      <li><strong>심혈관 변화:</strong> 서맥, 약한 심음. 심초음파상 심장 수축력 저하가 관찰되기도 함.</li>
      <li><strong>고지혈증:</strong> 총 콜레스테롤 및 중성지방 상승. 갑상선기능저하증의 전형적 혈액 검사 소견.</li>
    </ul>

    <h2>3. 진단 프로토콜: 복합 지표의 종합 해석</h2>
    <p>
      단일 호르몬 수치만으로 갑상선기능저하증을 진단하면 <strong>오진율이 매우 높습니다.</strong>
      반드시 임상 증상 + 여러 호르몬 지표를 함께 해석해야 합니다.
    </p>

    <h3>Total T4 (TT4)</h3>
    <p>
      선별 검사로 활용됩니다. TT4가 정상 범위이면 갑상선기능저하증 가능성은 낮습니다.
      그러나 낮은 TT4 단독으로는 확진에 불충분합니다. 비갑상선 질환(ESS)에 의해 위양성으로 낮아질 수 있기 때문입니다.
    </p>

    <h3>Free T4 by Equilibrium Dialysis (fT4 by ED)</h3>
    <p>
      단백질에 결합되지 않은 활성형 T4를 측정합니다. TT4보다 ESS의 영향을 덜 받으며 진단적 가치가 높습니다.
      TT4가 낮고 fT4도 함께 낮다면 갑상선기능저하증 가능성이 상당히 높아집니다.
    </p>

    <h3>TSH (Canine Thyroid-Stimulating Hormone)</h3>
    <p>
      뇌하수체에서 갑상선을 자극하는 호르몬으로, 갑상선 기능이 저하되면 뇌하수체가 더 많은 TSH를 분비합니다.
      <strong>TT4 낮음 + TSH 상승</strong>의 조합이 가장 확진에 가까운 패턴입니다.
      다만 약 25~40%의 환자에서는 TSH가 정상 범위 내에 있어 단독 사용에는 한계가 있습니다.
    </p>

    <h3>K-Value (감별 지표)</h3>
    <p>
      <strong>K = 0.7 × fT4 - TSH</strong> 공식으로 계산하며, K &lt; 0이면 갑상선기능저하증, K ≥ 0이면 ESS(비갑상선 질환)의 가능성이 높습니다.
      이 지표는 임상 증상과 함께 해석할 때 감별 진단의 보조 도구로 활용됩니다.
    </p>

    <h2>4. 가장 흔한 오진 원인: 비갑상선 질환 증후군 (ESS)</h2>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 임상에서 가장 중요한 감별 포인트</div>
      <p>
        당뇨병, 부신 질환, 신부전 등 다른 전신 질환이 있거나, 페노바비탈·스테로이드·설파제 등을 복용 중인 개는
        갑상선 기능이 정상이더라도 TT4·fT4 수치가 낮게 측정될 수 있습니다(ESS).
        이 상태에서 Levothyroxine을 투여하면 오히려 해롭습니다.
      </p>
    </div>
    <p>
      ESS가 의심되면 원인 질환을 먼저 치료하고 4~6주 후 갑상선 호르몬 수치를 재평가하는 것이 원칙입니다.
    </p>

    <h2>5. 치료: Levothyroxine 투여 프로토콜</h2>
    <p>
      갑상선기능저하증이 확진되면 합성 T4인 <strong>Levothyroxine(L-thyroxine)</strong>을 경구 보충합니다.
    </p>
    <ul>
      <li><strong>초기 용량:</strong> 0.02 mg/kg, 1일 2회 경구 투여. 심장 질환이 있는 경우 낮은 용량으로 시작하여 점진적으로 증량.</li>
      <li><strong>식이와의 관계:</strong> 공복 투여 시 흡수율이 더 높으나, 일관성 있는 급여 방법을 유지하는 것이 중요.</li>
      <li><strong>모니터링 채혈 시점:</strong> 투약 후 <strong>4~6시간(Peak level)</strong>에 채혈. 이 시점의 TT4 목표: 25~45 nmol/L (2~3.5 μg/dL).</li>
      <li><strong>첫 모니터링:</strong> 투약 시작 후 4~8주 후 혈청 TT4 측정.</li>
      <li><strong>임상적 개선 시기:</strong> 활력·활동성은 1~2주, 피부·피모 개선은 2~3개월, 체중 정상화는 3~6개월 소요.</li>
    </ul>

    <h2>6. 치료 반응 평가와 용량 조절</h2>
    <p>
      호르몬 수치뿐만 아니라 <strong>보호자가 관찰하는 임상 증상의 개선 여부</strong>를 가장 중요하게 평가해야 합니다.
    </p>
    <ul>
      <li><strong>치료 반응 좋음:</strong> TT4 목표 범위 내 + 임상 증상 개선 → 현 용량 유지</li>
      <li><strong>TT4 낮음 + 증상 지속:</strong> 용량 25~50% 증량 후 재평가</li>
      <li><strong>TT4 높음 또는 갑상선기능항진증 증상(체중 감소, 빈맥, 과잉 활동성):</strong> 용량 감량 또는 투여 간격 조정</li>
    </ul>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Scott-Moncrieff JC. Hypothyroidism. In: Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine. 8th ed.</p>
      <p>· Mooney CT, Peterson ME. BSAVA Manual of Canine and Feline Endocrinology. 4th ed.</p>
      <p>· Dixon RM, et al. Epidemiological, clinical, haematological and biochemical characteristics of canine hypothyroidism. Vet Rec. 1999.</p>
    </div>
  </ArticleLayout>
);

export default HypothyroidismArticle;
