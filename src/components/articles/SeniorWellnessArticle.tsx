import React from 'react';
import ArticleLayout from './ArticleLayout';

const SeniorWellnessArticle: React.FC = () => (
  <ArticleLayout
    title="노령동물 건강검진 프로토콜 완전 가이드"
    description="시니어 개·고양이의 검진 주기, 최소 데이터베이스(MDB) 구성, 나이별 스크리닝 우선순위와 보호자 상담 포인트"
    toolPath="/echocardiography"
    toolName="심초음파 지표 계산기"
  >
    <h2>1. 왜 노령동물 건강검진이 따로 필요한가?</h2>
    <p>
      개와 고양이는 사람보다 노화 속도가 훨씬 빠르고, 통증이나 불편감을 본능적으로 숨기는 경향이 있어 질환이
      상당히 진행된 이후에야 보호자가 이상을 알아차리는 경우가 많습니다. 정기적인 노령동물 검진의 목적은
      단순한 '이상 유무 확인'이 아니라, <strong>임상 증상이 나타나기 전 단계에서 만성 질환을 조기에 포착</strong>하여
      치료 개입 시점을 앞당기는 것입니다.
    </p>
    <ul>
      <li><strong>대형견:</strong> 만 7~8세부터 시니어로 분류</li>
      <li><strong>소형견:</strong> 만 9~10세부터 시니어로 분류</li>
      <li><strong>고양이:</strong> 만 10~11세부터 시니어, 15세 이상은 '초고령(Geriatric)'으로 별도 구분</li>
    </ul>

    <h2>2. 검진 주기 권장안</h2>
    <p>
      성견·성묘는 연 1회 검진이 일반적이지만, 시니어 단계에 진입하면 <strong>6개월 간격</strong>으로 좁히는 것이
      권장됩니다. 6개월은 사람의 노화 속도로 환산하면 약 2~3년에 해당하므로, 연 1회 검진으로는 신부전이나
      갑상선 질환 같은 진행성 질환의 조기 변화를 놓치기 쉽습니다.
    </p>

    <h2>3. 최소 데이터베이스(Minimum Database) 구성</h2>
    <p>노령동물 검진의 표준 최소 데이터베이스는 다음 네 가지로 구성됩니다.</p>
    <ul>
      <li><strong>전혈구검사(CBC):</strong> 빈혈, 염증, 혈소판 이상 등 전신 상태를 스크리닝합니다.</li>
      <li><strong>혈청 화학검사:</strong> 신장(BUN, Cr, SDMA), 간(ALT, ALP), 전해질, 혈당을 포함해 대사성 질환을 평가합니다.</li>
      <li><strong>요검사(비중 포함):</strong> 신장 농축력 평가는 혈액검사만으로는 놓치기 쉬운 초기 신장 기능 저하를 잡아냅니다.</li>
      <li><strong>혈압 측정:</strong> 특히 고양이에서 만성 신장병·갑상선기능항진증과 동반되는 고혈압은 실명·뇌졸중으로 이어질 수 있어 필수 항목입니다.</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 흔히 놓치는 포인트</div>
      <p>
        크레아티닌(Cr)이 정상 범위 안에 있어도 SDMA가 먼저 상승하는 경우 신장 기능이 이미 40% 가까이
        저하되었을 가능성이 있습니다. Cr 단독 해석보다 SDMA를 함께 보는 것이 조기 발견에 유리합니다.
      </p>
    </div>

    <h2>4. 견종·묘종별 우선 스크리닝 항목</h2>
    <ul>
      <li><strong>카발리에 킹 찰스 스패니얼, 몰티즈, 푸들 등 소형견:</strong> 승모판 폐쇄부전(MMVD) 호발종 — 심장 청진 및 심초음파를 우선 검토.</li>
      <li><strong>대형/초대형견(그레이트 데인, 도베르만 등):</strong> 확장성 심근병증(DCM) 호발종 — 심전도 및 심초음파 병행.</li>
      <li><strong>고양이 전반:</strong> 만성 신장병, 갑상선기능항진증 발생률이 매우 높아 혈액검사 시 반드시 T4 포함.</li>
      <li><strong>복서, 골든 리트리버 등:</strong> 종양 호발종 — 촉진 가능한 림프절·체표 종괴 검사와 흉부 방사선 스크리닝을 권장.</li>
    </ul>

    <h2>5. 보호자 상담 시 핵심 포인트</h2>
    <p>
      노령동물 검진에서 가장 중요한 상담 포인트는 보호자가 '노화'로 치부하기 쉬운 증상들을 구체적으로
      질문하는 것입니다. 활동량 감소, 계단 오르내리기를 꺼리는 행동, 야간 배뇨 횟수 증가, 체중 변화 등은
      보호자가 먼저 언급하지 않는 경우가 많으므로 문진 체크리스트를 활용해 능동적으로 확인해야 합니다.
    </p>
    <ul>
      <li>최근 3~6개월간 체중 변화가 있었는가?</li>
      <li>음수량이나 배뇨 횟수가 늘었는가?</li>
      <li>계단을 오르내리거나 소파에 뛰어오르는 것을 꺼리는가?</li>
      <li>대변 상태나 식욕에 변화가 있었는가?</li>
    </ul>

    <h2>6. 검진 결과가 경계선(borderline)일 때</h2>
    <p>
      단일 수치가 정상 범위를 약간 벗어난 경우, 즉시 확진 검사로 넘어가기보다 <strong>4~8주 후 재검사로
      추세를 확인</strong>하는 접근이 임상적으로 더 신중합니다. 특히 신장 수치나 간 수치는 검체 채취 조건(공복 여부,
      탈수 상태)에 따라 변동성이 있어 단일 수치보다 추세 변화가 진단적 가치가 더 높습니다.
    </p>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· AAHA Senior Care Guidelines for Dogs and Cats. American Animal Hospital Association.</p>
      <p>· IRIS (International Renal Interest Society) CKD Staging Guidelines.</p>
      <p>· AAFP Feline Senior Care Guidelines. American Association of Feline Practitioners.</p>
    </div>
  </ArticleLayout>
);

export default SeniorWellnessArticle;
