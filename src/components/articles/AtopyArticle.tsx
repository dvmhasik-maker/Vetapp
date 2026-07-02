import React from 'react';
import ArticleLayout from './ArticleLayout';

const AtopyArticle: React.FC = () => (
  <ArticleLayout
    title="개 아토피성 피부염 진단과 관리 전략"
    description="Favrot's Criteria 진단 기준, 제외 진단 프로토콜, 아포퀠·사이토포인트·면역요법의 선택과 장기 관리 계획"
    toolPath="/atopy"
    toolName="아토피 진단 도구"
  >
    <h2>1. 개 아토피성 피부염(CAD)이란?</h2>
    <p>
      개 아토피성 피부염(Canine Atopic Dermatitis, CAD)은 환경 알레르겐(집먼지진드기, 꽃가루, 곰팡이, 동물 비듬 등)에 대한
      <strong>IgE 매개 면역 과민 반응</strong>으로 발생하는 만성, 염증성, 가려움성 피부 질환입니다.
    </p>
    <p>
      아토피는 단순한 알레르기 피부 반응이 아니라 <strong>피부 장벽 기능 이상(Skin Barrier Dysfunction)</strong>과
      <strong>면역계의 Th2 편향(Type 2 immune skewing)</strong>이 복합적으로 작용하는 다인성 질환입니다.
      인간의 아토피 피부염과 매우 유사한 병태 생리를 공유하여, 동물 모델로도 광범위하게 연구되고 있습니다.
    </p>
    <p>
      호발 견종으로는 골든 리트리버, 래브라도 리트리버, 불독, 웨스트 하이랜드 화이트 테리어, 말티즈, 포메라니안, 시바이누 등이 있으며,
      보통 <strong>생후 6개월~3세</strong>에 처음 증상이 나타납니다.
    </p>

    <h2>2. 진단: 제외 진단(Diagnosis of Exclusion)의 원칙</h2>
    <p>
      아토피는 단일 검사로 확진할 수 있는 질환이 아닙니다.
      가려움증을 유발하는 다른 원인들을 먼저 배제하는 <strong>제외 진단 과정</strong>이 필수입니다.
    </p>

    <h3>반드시 먼저 배제해야 할 질환</h3>
    <ul>
      <li><strong>식이 알레르기(Food Allergy/Adverse Food Reaction):</strong> 아토피와 임상 증상이 매우 유사. 8~12주의 엄격한 가수분해 또는 신단백 제한 식이 시험(Elimination Diet Trial)이 필수. 이 기간 동안 기존 간식·약제·구충제 풍미 제품 모두 제한.</li>
      <li><strong>벼룩 알레르기성 피부염(FAD):</strong> 벼룩 자체보다 벼룩 타액에 대한 과민 반응. 꼬리 기저부, 엉덩이, 복부에 집중된 병변. 벼룩이 보이지 않아도 완전 박멸 치료 후 반응 평가.</li>
      <li><strong>농피증(Pyoderma) 및 말라세지아 피부염:</strong> 가려움증을 악화시키는 이차 감염. 세균·효모균 치료 후 가려움증 정도를 재평가해야 기저 원인 파악 가능.</li>
      <li><strong>개선충(Sarcoptes scabiei):</strong> 극심한 가려움증을 유발하며 혈청 검사 위음성이 많아 치료적 진단을 사용하는 경우도 있음.</li>
    </ul>

    <h3>Favrot's Criteria (2010)</h3>
    <p>
      아래 8가지 항목 중 5가지 이상 만족 시 민감도 85%, 특이도 79%로 아토피를 지지합니다.
    </p>
    <ol>
      <li>증상 발현 시 3세 이하</li>
      <li>실내에서 주로 생활</li>
      <li>코르티코스테로이드에 반응성이 있는 가려움증</li>
      <li>초기에 삼출물이 없는 가려움증</li>
      <li>앞발 침범</li>
      <li>귓바퀴 침범</li>
      <li>귓바퀴 가장자리의 병변 없음</li>
      <li>등 허리 부위의 병변 없음</li>
    </ol>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ Favrot's Criteria는 보조 기준</div>
      <p>이 기준은 진단을 지지하는 도구이지 단독 확진 기준이 아닙니다. 반드시 제외 진단 과정과 함께 해석해야 합니다.</p>
    </div>

    <h2>3. 알레르기 검사: IDST vs Serology</h2>
    <ul>
      <li><strong>피내 반응 검사(IDST):</strong> 피부에 다양한 알레르겐을 직접 주사하여 즉각적인 팽진 반응을 평가. 면역요법 알레르겐 선택의 골든 스탠다드.</li>
      <li><strong>혈청 알레르기 검사(Serology):</strong> IgE를 측정하는 혈액 검사. IDST보다 민감도가 낮지만 비침습적이어서 임상에서 광범위하게 사용.</li>
      <li><strong>중요 원칙:</strong> 알레르기 검사는 <strong>진단</strong>이 아닌 <strong>면역요법 알레르겐 선택</strong>을 위해 수행합니다. 검사 양성이 아토피를 진단하거나 양성 알레르겐이 임상 증상의 원인임을 의미하지 않습니다.</li>
    </ul>

    <h2>4. 치료 전략: 복합 관리(Multimodal Therapy)</h2>
    <p>
      아토피 치료의 핵심은 단일 약물에 의존하지 않고, 환자의 상태에 따라 여러 치료 전략을 조합하는 것입니다.
    </p>

    <h3>① 가려움증 조절 약물</h3>
    <ul>
      <li><strong>아포퀠(Oclacitinib, Apoquel):</strong> JAK1/JAK3 억제제. 효과 발현이 빠르며(24시간 내) 장기 사용 가능. 면역억제 작용이 있어 감염 모니터링 필요. 12개월 미만 사용 금지.</li>
      <li><strong>사이토포인트(Lokivetmab, Cytopoint):</strong> IL-31을 직접 중화하는 단클론 항체. 한 번 주사로 4~8주 효과 지속. 전신 면역억제 없이 가려움증만 선택적으로 조절.</li>
      <li><strong>사이클로스포린(Atopica):</strong> T세포 활성화 억제. 효과 발현까지 4~6주 소요. 구역·구토 등 위장관 부작용으로 초기 수용성이 낮을 수 있음.</li>
      <li><strong>스테로이드(프레드니솔론 등):</strong> 급성 악화 시 단기간 사용에 한정. 장기 사용은 부작용(쿠싱, 피부 위축, 요로 감염 등) 위험으로 권장하지 않음.</li>
    </ul>

    <h3>② 피부 장벽 강화</h3>
    <ul>
      <li><strong>세라마이드 함유 샴푸·보습제:</strong> 주 2~3회 목욕이 알레르겐 제거와 피부 장벽 회복에 효과적.</li>
      <li><strong>오메가-3 지방산(EPA/DHA):</strong> 피부 장벽 강화 및 염증 완화. 단독으로는 효과 제한적이나 다른 치료의 보조로 권장.</li>
      <li><strong>국소 스테로이드 또는 타크로리무스:</strong> 제한된 병변 부위에만 국소 적용하여 전신 부작용 최소화.</li>
    </ul>

    <h3>③ 알레르겐 특이 면역요법(ASIT)</h3>
    <p>
      IDST 또는 혈청 검사로 확인된 알레르겐을 소량씩 장기간 투여하여 면역 관용을 유도합니다.
      효과 발현까지 6~12개월 소요되지만, 유일하게 <strong>질환의 근본적인 원인</strong>에 접근하는 치료로 장기적으로 약물 의존도를 낮출 수 있습니다.
    </p>

    <h2>5. 이차 감염 관리</h2>
    <p>
      아토피 환자에서 세균성 농피증(Staphylococcus pseudintermedius)과 말라세지아 피부염은 가려움증을 극도로 악화시키는 가장 흔한 합병증입니다.
      이차 감염이 해결되지 않으면 아무리 좋은 가려움증 조절 약물도 효과가 반감됩니다.
    </p>
    <ul>
      <li>세균성 농피증: 표피 도말 검사에서 구균 확인 시 적절한 항생제 3~4주 투여</li>
      <li>말라세지아 피부염: 항진균 샴푸(케토코나졸 2%, 미코나졸 등) 주 2~3회 + 경구 항진균제 병용</li>
      <li>귀 감염(외이염): 아토피의 가장 흔한 동반 증상 중 하나. 세균·효모균·귀진드기 구분 후 치료</li>
    </ul>

    <h2>6. 보호자 교육의 핵심</h2>
    <p>
      아토피는 <strong>'완치'가 아닌 '평생 관리'의 질환</strong>임을 보호자가 이해하는 것이 치료 순응도의 핵심입니다.
      증상이 좋아졌다고 느낄 때 임의로 약을 중단하면 곧 재발하는 패턴이 반복됩니다.
      증상이 잘 조절되는 단계에서 최소 유지 용량을 결정하고, 계절성 악화에 대비한 처치 계획을 수립하는 것이 장기 치료의 성공 열쇠입니다.
    </p>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Favrot C, et al. A prospective study on the clinical features of chronic canine atopic dermatitis. Vet Dermatol. 2010.</p>
      <p>· Olivry T, et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals. BMC Vet Res. 2015.</p>
      <p>· Hensel P, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015.</p>
    </div>
  </ArticleLayout>
);

export default AtopyArticle;
