import React from 'react';
import ArticleLayout from './ArticleLayout';

const CatObesityArticle: React.FC = () => (
  <ArticleLayout
    title="고양이 비만도(FBMI) 완전 가이드"
    description="체지방률 측정 원리부터 BCS와의 관계, 비만·저체중 관리 프로토콜까지 정리"
    toolPath="/cat-obesity"
    toolName="고양이비만도"
  >
    <h2>1. 고양이 비만이 중요한 이유</h2>
    <p>
      고양이는 개보다 피부와 피하지방이 얇아 촉진만으로 비만 여부를 판단하기가 상대적으로 어렵고, 보호자가
      체형 변화를 늦게 알아차리는 경우가 많습니다. 그러나 지방조직은 단순히 에너지를 저장하는 곳이 아니라
      렙틴(leptin)·아디포넥틴(adiponectin) 등을 분비하는 <strong>내분비 기관</strong>으로 작용하며, 과도한
      체지방은 인슐린 저항성·만성 염증·관절 부담 증가로 이어집니다. 실제로 비만 고양이는 정상 체중 고양이에
      비해 <strong>제2형 당뇨병 발생 위험이 최대 4배</strong> 높은 것으로 보고되어 있습니다.
    </p>

    <h2>2. BCS(신체충실지수)와 FBMI의 차이</h2>
    <p>
      <strong>BCS(Body Condition Score)</strong>는 WSAVA 9점 척도가 가장 널리 쓰이며, 갈비뼈·허리선·복부
      지방 패드를 시진·촉진으로 평가하는 정성적(qualitative) 지표입니다. 숙련도에 따라 평가자 간 편차가
      있을 수 있고, 촉진이 어려운 장모종이나 예민한 개체에서는 정확도가 떨어질 수 있습니다.
    </p>
    <p>
      <strong>FBMI(Feline Body Mass Index)</strong>는 <strong>몸통(가슴) 둘레</strong>와 <strong>뒷다리(무릎~뒷발꿈치)
      길이</strong>라는 두 가지 줄자 측정값만으로 체지방률(%)을 추정하는 정량적(quantitative) 지표입니다. 사람이
      느끼는 촉감에 의존하지 않기 때문에 재현성이 높고, 보호자가 가정에서도 반복 측정해 추이를 기록하기
      쉽다는 장점이 있습니다. 다만 근육량이 유난히 많거나 적은 개체, 임신묘, 복수·종괴가 있는 경우에는
      오차가 커질 수 있어 <strong>BCS 등 다른 소견과 함께 해석</strong>해야 합니다.
    </p>

    <h2>3. FBMI 측정 및 계산 방법</h2>
    <ul>
      <li><strong>자세:</strong> 고양이가 서 있는 자세로, 고개는 들고 네 다리 모두 바닥과 수직인 상태에서 측정합니다.</li>
      <li><strong>몸통(가슴) 둘레:</strong> 9번째 갈비뼈가 위치한 부위의 둘레. 위치를 찾기 어렵다면 가슴 중 가장 두꺼운 부위로 대신합니다.</li>
      <li><strong>뒷다리 길이:</strong> 무릎(슬관절)에서 뒷발꿈치(비절)까지의 직선 길이.</li>
    </ul>
    <div className="article-info">
      <p>
        FBMI(%) = ((몸통 둘레 ÷ 0.7062) − 뒷다리 길이) ÷ 0.9156 − 뒷다리 길이
      </p>
    </div>
    <p>
      본 도구에 두 측정값을 입력하면 위 공식으로 체지방률을 자동 계산하고, 아래 4단계 기준에 따라 즉시
      등급을 판정해 줍니다.
    </p>

    <h3>FBMI 판정 기준 (본 도구 기준)</h3>
    <ul>
      <li><strong>저체중 (FBMI 15% 미만):</strong> 급여량 부족 또는 기저질환 가능성 — 재평가 필요</li>
      <li><strong>정상체중 (FBMI 15~30% 미만):</strong> 이상적인 체지방률 구간</li>
      <li><strong>과체중 (FBMI 30~42% 미만):</strong> 체중 관리 개입이 필요한 초기 단계</li>
      <li><strong>비만 (FBMI 42% 이상):</strong> 적극적인 체중 감량 프로그램과 동반 질환 검사가 권장되는 단계</li>
    </ul>

    <h2>4. 저체중 고양이 — 놓치기 쉬운 감별 진단</h2>
    <p>
      저체중은 단순히 "적게 먹어서"가 아니라 기저질환의 신호인 경우가 많아 오히려 과체중보다 진단적으로
      더 주의가 필요합니다. 특히 고령묘에서 체중 감소가 확인되면 다음 질환들을 감별해야 합니다.
    </p>
    <ul>
      <li><strong>갑상선기능항진증(Hyperthyroidism):</strong> 다식하는데도 체중이 빠지는 것이 특징적입니다.</li>
      <li><strong>만성 신장질환(CKD):</strong> 식욕부진·다음다뇨를 동반하는 경우가 많습니다.</li>
      <li><strong>염증성 장질환(IBD)·흡수불량·기생충:</strong> 만성 구토·설사를 동반할 수 있습니다.</li>
      <li><strong>구강 질환(치주질환·구내염):</strong> 통증으로 인해 사료 섭취량 자체가 줄어듭니다.</li>
      <li><strong>종양성 질환:</strong> 특히 노령묘의 원인 불명 체중 감소에서는 반드시 감별 목록에 포함합니다.</li>
    </ul>

    <h2>5. 과체중·비만 고양이의 관리 전략</h2>
    <h3>목표 체중과 감량 속도</h3>
    <p>
      급격한 체중 감량은 <strong>고양이 지방간(hepatic lipidosis)</strong>이라는 치명적인 합병증을 유발할 수
      있어, 개보다 훨씬 보수적으로 접근해야 합니다. 일반적으로 <strong>주당 체중의 0.5~2% 이내</strong>로
      서서히 감량하는 것이 안전하며, 목표 체중은 과거 정상 체중 기록이나 이상적인 BCS 5/9에 해당하는
      체형을 기준으로 설정합니다.
    </p>
    <h3>급여 전략</h3>
    <ul>
      <li>목표(이상) 체중을 기준으로 RER(안정 시 에너지 요구량)을 계산하고, 여기서 20~30% 낮춘 열량으로 시작합니다.</li>
      <li>고단백·저탄수화물 체중감량 전용 처방식은 근육량 손실을 최소화하면서 포만감을 유지하는 데 도움이 됩니다.</li>
      <li>하루 급여량을 여러 번(3~4회)으로 나누거나 퍼즐 피더를 활용하면 폭식과 지루함으로 인한 이식(異食) 행동을 줄일 수 있습니다.</li>
      <li>다묘 가정에서는 개별 급여가 어려운 경우가 많아, 급여 장소 분리나 마이크로칩 인식 급식기 등을 고려합니다.</li>
    </ul>
    <h3>활동량 증가</h3>
    <p>
      사냥 놀이형 장난감, 캣타워·수직 공간 확장, 자동 레이저 포인터 등으로 실내 고양이의 활동량을 늘리는
      것도 체중 관리의 중요한 축입니다. 급여를 게임처럼 만들어 먹이 활동 자체를 운동으로 전환하는
      환경 강화(environmental enrichment)가 특히 효과적입니다.
    </p>

    <h2>6. 비만과 연관된 주요 동반 질환</h2>
    <ul>
      <li><strong>제2형 당뇨병:</strong> 비만이 가장 강력한 위험 인자로, 체중 감량만으로 관해(remission)에 이르는 경우도 있습니다.</li>
      <li><strong>관절질환(골관절염):</strong> 관절에 가해지는 부하 증가로 통증·활동성 저하가 악화됩니다.</li>
      <li><strong>하부요로질환(FLUTD):</strong> 활동량 저하와 연관되어 발생 위험이 높아질 수 있습니다.</li>
      <li><strong>마취·수술 위험 증가:</strong> 약물 용량 계산 오차, 호흡기계 부담, 수술 후 회복 지연 등의 위험이 커집니다.</li>
      <li><strong>그루밍 저하·피부질환:</strong> 비만으로 인해 등·엉덩이 부위 그루밍이 어려워지면서 피부염이 발생할 수 있습니다.</li>
    </ul>

    <div className="article-callout">
      <div className="article-callout-title">⚠️ 스크리닝 지표로서의 한계</div>
      <p>
        FBMI는 줄자 두 번으로 체지방률을 빠르게 추정할 수 있는 유용한 스크리닝 도구이지만, 체성분 분석
        장비(DEXA 등)를 대체하지는 못합니다. 임신묘, 복수·종괴가 있는 개체, 근육량이 극단적인 개체에서는
        오차가 클 수 있으므로, 최종적인 비만 진단과 감량 목표 설정은 BCS·체중 추이·신체검사 소견을 함께
        고려한 수의사의 임상적 판단에 따라야 합니다.
      </p>
    </div>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· German AJ. The growing problem of obesity in dogs and cats. J Nutr. 2006.</p>
      <p>· WSAVA Global Nutrition Committee. Body Condition Score Chart – Feline.</p>
      <p>· Scarlett JM, Donoghue S. Association between body condition and disease in cats. J Am Vet Med Assoc. 1998.</p>
      <p>· Verkest KR. Pathophysiology of insulin resistance and glucose intolerance in obese cats. J Feline Med Surg. 2014.</p>
    </div>
  </ArticleLayout>
);

export default CatObesityArticle;
