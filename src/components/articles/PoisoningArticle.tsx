import React from 'react';
import ArticleLayout from './ArticleLayout';

const PoisoningArticle: React.FC = () => (
  <ArticleLayout
    title="반려동물 중독 응급 처치 가이드"
    description="독성 물질 섭취 시 응급 대응 원칙, 구토 유발 금기 사항, 주요 독성 물질별 위험성과 해독 처치 프로토콜"
    toolPath="/poisoning"
    toolName="중독 위험성 평가"
  >
    <h2>1. 중독 의심 시 응급 대응 원칙</h2>
    <p>
      반려동물의 독성 물질 섭취가 의심될 때 <strong>가장 중요한 것은 시간</strong>입니다.
      섭취 후 1~2시간 이내에 처치가 이루어지면 독소의 흡수를 크게 줄일 수 있습니다.
      그러나 어떤 처치를 해야 하는지는 섭취한 물질의 종류에 따라 완전히 달라지므로,
      보호자가 임의로 판단하여 처치하기 전에 <strong>반드시 동물병원 또는 동물 독성 정보 센터에 먼저 연락</strong>해야 합니다.
    </p>

    <h3>응급 처치의 기본 순서</h3>
    <ol>
      <li><strong>섭취 물질 파악:</strong> 어떤 물질을, 얼마나, 언제 먹었는지 파악. 제품 포장지를 가져오거나 사진을 찍어 병원에 지참.</li>
      <li><strong>생체 징후 평가:</strong> 의식 수준, 호흡, 경련 여부를 즉시 확인.</li>
      <li><strong>병원 이송:</strong> 위중한 증상이 있으면 즉시 응급 이송. 경미하더라도 반드시 수의사와 상담.</li>
      <li><strong>구토 유발 여부 결정:</strong> 수의사 지시하에만 실시 (아래 금기 사항 참고).</li>
    </ol>

    <h2>2. 구토 유발이 금지되는 경우</h2>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 구토 유발 전 반드시 확인</div>
      <p>아래 상황에서 임의로 구토를 유발하면 오히려 상태를 악화시킬 수 있습니다.</p>
    </div>
    <ul>
      <li><strong>부식성 물질 (강산·강염기·세제):</strong> 역류 시 식도와 구강을 추가로 손상시킵니다.</li>
      <li><strong>석유화학 제품 (휘발유, 등유, 오일 등):</strong> 구토 시 흡인으로 인한 흡인성 폐렴 위험이 매우 높습니다.</li>
      <li><strong>의식 저하 또는 경련 상태:</strong> 구토물 흡인으로 인한 기도 폐쇄 위험.</li>
      <li><strong>날카로운 물체 섭취:</strong> 역류 시 식도나 기도 손상.</li>
      <li><strong>이미 심하게 구토 중인 경우.</strong></li>
      <li><strong>섭취 후 2~3시간 이상 경과:</strong> 이미 소장으로 내려간 독소는 구토로 제거할 수 없음.</li>
    </ul>
    <p>
      구토 유발이 적절한 경우, 수의사의 지시하에 <strong>3% 과산화수소(H₂O₂)</strong>를 1~2 mL/kg 경구 투여하거나
      병원에서 덱스메데토미딘(고양이), 아포모르핀(개) 등을 사용합니다.
    </p>

    <h2>3. 주요 독성 물질별 위험성과 처치</h2>

    <h3>초콜릿 (테오브로민/카페인)</h3>
    <p>
      다크 초콜릿과 베이킹 초콜릿이 밀크 초콜릿보다 훨씬 위험합니다.
      테오브로민은 개의 체내에서 사람보다 훨씬 느리게 대사되어 독성이 누적됩니다.
    </p>
    <ul>
      <li><strong>증상:</strong> 구토, 설사, 과잉 활동성 → 심한 경우 빈맥·부정맥, 경련, 고체온</li>
      <li><strong>독성 용량(테오브로민 기준):</strong> 20 mg/kg 이상에서 중등도 중독, 40 mg/kg 이상 심각</li>
      <li><strong>처치:</strong> 섭취 2시간 이내 구토 유발, 활성탄 투여, 부정맥 모니터링, IV 수액 및 경련 조절</li>
    </ul>

    <h3>포도 / 건포도</h3>
    <p>
      독성 기전이 아직 완전히 밝혀지지 않았으나 <strong>소량으로도 급성 신부전</strong>을 유발할 수 있습니다.
      안전한 용량이 없으므로 섭취량에 관계없이 즉각 처치가 필요합니다.
    </p>
    <ul>
      <li><strong>증상:</strong> 구토(보통 섭취 후 수 시간 내), 무기력, 식욕 부진, 24~48시간 후 신부전 증상</li>
      <li><strong>처치:</strong> 즉각 구토 유발, 활성탄, 최소 48~72시간 IV 수액 처치, 신장 기능 모니터링</li>
    </ul>

    <h3>양파 / 마늘 / 파</h3>
    <p>
      N-프로필 디설파이드 성분이 적혈구 내 헤모글로빈을 산화 손상시켜 <strong>하인즈 소체 용혈성 빈혈</strong>을 유발합니다.
      고양이가 개보다 훨씬 민감합니다.
    </p>
    <ul>
      <li><strong>독성 용량(개):</strong> 체중의 0.5%(15 kg 개에서 양파 75 g) 이상에서 위험</li>
      <li><strong>증상:</strong> 잠복기(1~5일) 후 창백한 점막, 쇠약, 빈호흡, 갈색뇨(혈색소뇨)</li>
      <li><strong>처치:</strong> 수혈(중증 빈혈 시), 산소 공급, IV 수액, 원인 제거</li>
    </ul>

    <h3>자일리톨</h3>
    <p>
      개에서는 췌장 인슐린 분비를 급격히 자극하여 <strong>심각한 저혈당</strong>을 유발하며, 고용량에서는 간부전을 일으킵니다.
      무설탕 껌, 사탕, 일부 땅콩버터, 구강 청결제에 포함될 수 있습니다.
    </p>
    <ul>
      <li><strong>독성 용량:</strong> 0.1 g/kg 이상에서 저혈당, 0.5 g/kg 이상에서 간부전 위험</li>
      <li><strong>증상:</strong> 섭취 후 30분~1시간 내 구토, 허약, 운동 실조, 경련(저혈당), 황달(간부전)</li>
      <li><strong>처치:</strong> 즉각 구토 유발, 포도당 보충(IV), 간 기능 검사 72시간 모니터링</li>
    </ul>

    <h3>아세트아미노펜 (타이레놀)</h3>
    <p>
      고양이에서 극도로 위험합니다. 글루쿠론산화 효소가 결핍된 고양이는 독성 대사체를 처리하지 못해
      메트헤모글로빈혈증과 간부전이 빠르게 진행됩니다. <strong>고양이에게 타이레놀 단 한 알도 치명적입니다.</strong>
    </p>
    <ul>
      <li><strong>증상:</strong> 청색증(갈색 점막), 얼굴·발 부종, 허약, 침 흘림, 빠른 호흡</li>
      <li><strong>처치:</strong> N-아세틸시스테인(NAC) IV 투여, 아스코르브산(비타민C), 메티오닌, 산소 공급</li>
    </ul>

    <h2>4. 활성탄(Activated Charcoal) 사용법</h2>
    <p>
      많은 독성 물질에서 구토 후 또는 구토가 불가능한 경우 <strong>독소 흡착 목적</strong>으로 활성탄을 경구 투여합니다.
    </p>
    <ul>
      <li><strong>일반 용량:</strong> 1~4 g/kg 경구</li>
      <li><strong>효과 있는 물질:</strong> 대부분의 유기 화합물, 약물</li>
      <li><strong>효과 없는 물질:</strong> 중금속(납, 아연), 알코올, 자일리톨, 부식성 물질</li>
      <li><strong>주의:</strong> 의식 저하 환자에게 억지로 투여 시 흡인 위험. 소르비톨 함유 제품은 반복 투여 시 전해질 이상 주의.</li>
    </ul>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· ASPCA Animal Poison Control Center (APCC) Guidelines. 2024. aspca.org/pet-care/animal-poison-control</p>
      <p>· Peterson ME, Talcott PA. Small Animal Toxicology. 3rd ed. Elsevier. 2013.</p>
      <p>· Gwaltney-Brant SM. Veterinary Toxicology. In: Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine. 8th ed.</p>
    </div>
  </ArticleLayout>
);

export default PoisoningArticle;
