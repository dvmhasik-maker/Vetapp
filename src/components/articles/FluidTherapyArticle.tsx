import React from 'react';
import ArticleLayout from './ArticleLayout';

const FluidTherapyArticle: React.FC = () => (
  <ArticleLayout
    title="수의 수액 요법 완전 가이드"
    description="탈수량·유지량·지속 소실량을 정확히 계산하고 과수액 부작용을 예방하는 임상 수액 처치의 모든 것"
    toolPath="/fluid-therapy"
    toolName="수액 속도 계산"
  >
    <h2>1. 수액 요법이란?</h2>
    <p>
      수액 요법(Fluid Therapy)은 탈수, 쇼크, 전해질 이상, 산-염기 불균형 등을 교정하기 위해 정맥·피하·골내 경로로 수분과 전해질을 보충하는 치료법입니다.
      단순히 "수분 보충"이 아니라 <strong>혈역학적 안정(Hemodynamic Stabilization), 전해질 교정, 지속 소실량 보상</strong>을 동시에 달성해야 하는 다차원적 치료 전략입니다.
    </p>
    <p>
      특히 소동물 임상에서 수액 요법은 내과적·외과적·응급 상황 모두에서 가장 빈번하게 사용되는 처치 중 하나이며,
      잘못된 수액 선택이나 속도 계산은 폐수종·전해질 위기 등 심각한 합병증으로 이어질 수 있습니다.
    </p>

    <h2>2. 수액 요법의 세 가지 구성 요소 (Three Pillars)</h2>
    <p>
      임상에서 수액량을 결정할 때 반드시 아래 세 요소를 개별적으로 계산한 뒤 합산하는 방식을 사용합니다.
    </p>

    <h3>① 결핍량 (Deficit)</h3>
    <p>
      탈수로 인해 이미 잃은 수분량입니다. 임상 징후를 통해 탈수 정도(%)를 추정하고, 아래 공식으로 보충해야 할 총량을 계산합니다.
    </p>
    <ul>
      <li><strong>계산 공식:</strong> 체중(kg) × 탈수율(%) × 10 = 결핍량(mL)</li>
      <li><strong>5% 미만:</strong> 임상 징후 불명확, 피부 탄력성 경미한 감소</li>
      <li><strong>5~8%:</strong> 피부 탄력성 저하, 점막 건조, CRT(모세혈관 재충전 시간) 2초 이상</li>
      <li><strong>8~10%:</strong> 안구함몰, 심한 피부 탄력 저하, 빈맥 시작</li>
      <li><strong>10~12%:</strong> 쇼크 징후 동반, 즉각적인 응급 수액 처치 필요</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 임상 주의사항</div>
      <p>결핍량은 일반적으로 12~24시간에 나누어 보충합니다. 단, 쇼크 상태에서는 빠른 볼루스 투여 후 지속 속도를 재평가해야 합니다.</p>
    </div>

    <h3>② 유지량 (Maintenance)</h3>
    <p>
      생명 유지에 필요한 기초 대사 수분량입니다. 대사 속도와 연관된 공식을 사용하며, 종과 환자 상태에 따라 범위가 달라집니다.
    </p>
    <ul>
      <li><strong>대사 공식:</strong> 70 × 체중(kg)^0.75 (mL/day)</li>
      <li><strong>간이 공식(개):</strong> 40~60 mL/kg/day</li>
      <li><strong>간이 공식(고양이):</strong> 40~60 mL/kg/day (심장 질환이 있는 경우 하한 적용)</li>
      <li><strong>등장성 수액 선택:</strong> LRS(락테이트 링거액), 0.9% NaCl, Plasmalyte 등 임상 상황에 맞게 선택</li>
    </ul>

    <h3>③ 지속 소실량 (Ongoing Loss)</h3>
    <p>
      치료 중에도 계속해서 소실되는 수분량으로, 이를 빠뜨리면 수액량이 실제 필요보다 부족해집니다.
    </p>
    <ul>
      <li><strong>구토·설사:</strong> 각 에피소드를 기록하여 mL 단위로 추정하고 합산</li>
      <li><strong>다뇨증:</strong> 소변 생산량을 모니터링하여 과도한 소실분 보상</li>
      <li><strong>호흡성 소실:</strong> 빈호흡, 고열, 개구 호흡 시 증가 (일반적으로 5~10 mL/kg/day 추가)</li>
      <li><strong>복수·흉수 배출:</strong> 배출량만큼 별도 보충 계획 수립</li>
    </ul>

    <h2>3. 수액제 종류와 선택 원칙</h2>
    <p>
      수액제는 크게 <strong>등장성 결정질(Isotonic Crystalloid), 저장성 결정질(Hypotonic Crystalloid), 교질액(Colloid)</strong>으로 분류됩니다.
    </p>
    <ul>
      <li><strong>LRS (Lactated Ringer's Solution):</strong> 가장 흔히 사용되는 등장성 결정질. 간 기능이 정상이면 유산염(Lactate)이 중탄산염으로 전환되어 산증 교정에 유리.</li>
      <li><strong>0.9% NaCl (생리식염수):</strong> 저나트륨혈증, 저염소혈증, 대사성 알칼리증 교정에 적합. 과량 투여 시 고염소혈증 유발 주의.</li>
      <li><strong>0.45% NaCl (저장성):</strong> 고삼투압성 탈수나 유지 수액으로 사용. 빠른 투여는 세포 부종 위험.</li>
      <li><strong>헤타스타치(HES) 등 교질액:</strong> 저알부민혈증, 쇼크 상태에서 혈관 내 용적 유지. 신장 독성 우려로 신중 사용.</li>
    </ul>

    <h2>4. 전해질 보충: 칼륨(K⁺) 관리</h2>
    <p>
      저칼륨혈증은 수액 치료 중 가장 흔히 발생하는 전해질 이상 중 하나입니다. 식욕 부진, 구토, 설사, 이뇨제 사용 환자에서 특히 주의해야 합니다.
    </p>
    <ul>
      <li><strong>칼륨 보충 한계 속도:</strong> 0.5 mEq/kg/hr를 절대 초과하지 않음 (심장 독성 위험)</li>
      <li><strong>K⁺ 2.5~3.0 mEq/L:</strong> 수액 1L당 KCl 20~30 mEq 첨가</li>
      <li><strong>K⁺ 2.0~2.5 mEq/L:</strong> 수액 1L당 KCl 30~40 mEq 첨가</li>
      <li><strong>K⁺ 2.0 mEq/L 미만:</strong> 수액 1L당 KCl 40~80 mEq 첨가, 지속 심전도 모니터링 필수</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 칼륨 급속 투여 금지</div>
      <p>칼륨을 빠르게 정맥 투여하면 심실세동(VF)을 유발할 수 있습니다. 반드시 계산된 속도로 희석하여 투여하세요.</p>
    </div>

    <h2>5. 과수액(Fluid Overload)의 예방과 모니터링</h2>
    <p>
      수액 과다 투여는 특히 심부전, 신부전, 저알부민혈증 환자에서 폐수종, 복수, 조직 부종으로 이어집니다.
    </p>
    <ul>
      <li><strong>체중 추세:</strong> 매일 동일한 시간에 측정. 24시간 내 체중이 10% 이상 증가하면 수액 과다 의심</li>
      <li><strong>호흡수 모니터링:</strong> 안정 시 호흡수 증가는 폐수종의 초기 신호. 고양이는 특히 민감하므로 30회/분 초과 시 즉시 평가</li>
      <li><strong>청진:</strong> 폐에서 수포음(crackles) 또는 흉수로 인한 심음 감약 확인</li>
      <li><strong>콧물, 결막 부종, 사지 부종:</strong> 체계적으로 매일 평가</li>
    </ul>

    <h2>6. 고양이 수액 처치 시 특별 고려사항</h2>
    <p>
      고양이는 개와 달리 수액에 매우 민감하며, 특히 폐수종 발생 위험이 훨씬 높습니다.
    </p>
    <ul>
      <li><strong>유지 속도 보수적 적용:</strong> 일반적으로 2~3 mL/kg/hr를 초과하지 않도록 시작</li>
      <li><strong>심장 질환 동반 시:</strong> 1 mL/kg/hr 이하로 더욱 조심스럽게 적용하고 빈번한 재평가 실시</li>
      <li><strong>피하 수액(SQ):</strong> 경미한 탈수 또는 재택 처치에 유용. 한 부위당 최대 100~150 mL로 제한</li>
    </ul>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· 2024 AAHA/AAFP Fluid Therapy Guidelines for Dogs and Cats</p>
      <p>· DiBartola SP. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice. 4th ed.</p>
      <p>· Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine. 8th ed.</p>
    </div>
  </ArticleLayout>
);

export default FluidTherapyArticle;
