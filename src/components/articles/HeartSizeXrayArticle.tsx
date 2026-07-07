import React from 'react';
import ArticleLayout from './ArticleLayout';

const HeartSizeXrayArticle: React.FC = () => (
  <ArticleLayout
    title="흉부 방사선 심장크기평가(VHS·VLAS) 완전 가이드"
    description="척추심장크기(VHS)와 척추좌심방크기(VLAS)의 측정 원리, 정상범위, 임상적 한계까지 정리"
    toolPath="/heart-size-xray"
    toolName="심장크기평가"
  >
    <h2>1. 흉부 방사선으로 심장 크기를 평가하는 이유</h2>
    <p>
      심초음파가 심장의 구조와 기능을 가장 정확하게 평가하는 검사이지만, 모든 동물병원에서 즉시 시행하기 어렵고
      숙련된 검사자가 필요합니다. 반면 <strong>흉부 외측상 방사선(lateral thoracic radiograph)</strong>은 대부분의
      1차 진료 현장에서 쉽게 촬영할 수 있어, 기침·호흡곤란·심잡음 등의 증상이 있는 환자를 <strong>선별(screening)</strong>하고
      경과를 추적하는 데 널리 사용됩니다.
    </p>
    <p>
      <strong>VHS(Vertebral Heart Scale, 척추심장크기)</strong>와 <strong>VLAS(Vertebral Left Atrial Size, 척추좌심방크기)</strong>는
      개체의 체형 차이에 영향받지 않도록 심장의 실제 길이를 흉추(vertebra) 개수 단위로 환산해 표준화한 지표입니다.
      체중이나 흉곽 크기 대신 환자 자신의 척추를 자(scale)로 사용하기 때문에, 소형견부터 대형견까지 하나의 기준으로
      비교할 수 있다는 것이 핵심 장점입니다.
    </p>

    <h2>2. VHS (Vertebral Heart Scale) 측정 원리</h2>
    <p>
      Buchanan과 Bücheler(1995)가 제안한 표준 방법은 다음과 같습니다.
    </p>
    <ul>
      <li><strong>장축(Long axis, L):</strong> 기관분기부(Carina)부터 심첨(Apex)까지의 직선 거리</li>
      <li><strong>단축(Short axis, S):</strong> 장축과 수직으로 교차하는 심장의 최대 폭</li>
      <li>
        L과 S 길이를 각각 <strong>T4(4번째 흉추) 앞쪽 경계부터 시작해 척추를 따라 몇 개의 척추에 해당하는지</strong>
        환산합니다.
      </li>
      <li><strong>VHS = (L을 척추 단위로 환산한 값) + (S를 척추 단위로 환산한 값)</strong>, 소수점 첫째 자리까지 표기</li>
    </ul>
    <div className="article-info">
      <p>
        본 도구는 이 표준 방법을 그대로 구현합니다 — T4 앞쪽 경계부터 척추 경계를 순서대로 클릭하면, L과 S 거리가
        누적 척추 길이 중 어디에 해당하는지 선형보간으로 계산합니다. 단축선은 장축과 수직에 가까울 때만 자동으로
        정확히 수직 스냅되도록 하여, 수기 캘리퍼 측정과 동일한 원리를 재현하도록 설계했습니다.
      </p>
    </div>

    <h3>VHS 정상범위</h3>
    <ul>
      <li><strong>개(일반):</strong> 8.5~10.5 (평균 약 9.7 ± 0.5)</li>
      <li><strong>견종 편차 주의:</strong> Boxer, 불독 등 단두종·흉곽이 넓은 견종은 정상 상한이 11 이상까지 올라갈 수 있고, 그레이하운드처럼 흉곽이 좁고 긴 견종은 기준치가 다르게 해석되어야 합니다.</li>
      <li><strong>고양이:</strong> 6.7~8.1 (평균 약 7.5) — 개보다 정상 범위가 좁고 개체차가 적은 편입니다.</li>
      <li><strong>해석:</strong> 상한을 초과하면 심장비대(cardiomegaly)를 의심하되, 단일 수치만으로 확진하지 않고 심잡음·증상·심초음파 소견과 함께 판단합니다.</li>
    </ul>

    <h2>3. VLAS (Vertebral Left Atrial Size)</h2>
    <p>
      VHS가 심장 전체 크기를 반영하는 반면, 실제 임상에서 문제가 되는 것은 대부분 <strong>좌심방 확장</strong>입니다
      (특히 개의 점액종성 승모판 질환, MMVD). VLAS는 Carina에서 좌심방 후벽 경계까지의 선을 VHS와 같은 방식으로
      척추 단위로 환산하여, 좌심방 확장을 더 민감하게 반영하도록 고안된 보조 지표입니다(Sanderson 등).
    </p>
    <ul>
      <li><strong>개 정상:</strong> 2.3 미만</li>
      <li><strong>경도 확장 의심:</strong> 2.3~3.0</li>
      <li><strong>확장 의심:</strong> 3.0 초과</li>
      <li><strong>고양이:</strong> 표준화된 컷오프가 상대적으로 제한적이므로 참고용으로만 활용합니다.</li>
    </ul>

    <h2>4. VHS·VLAS와 심초음파의 관계</h2>
    <p>
      ACVIM 2019 MMVD 가이드라인에서는 <strong>B2 단계(치료 시작 기준)</strong> 판단에 방사선 지표를 심초음파 지표와
      함께 사용합니다. 아래 3가지 기준 중 2개 이상을 만족하면 B2로 분류합니다.
    </p>
    <ul>
      <li>VHS &gt; 10.5 또는 VLAS &gt; 2.3(문헌에 따라 컷오프 차이 있음)</li>
      <li>LA/Ao ≥ 1.6 (심초음파)</li>
      <li>체중 보정 LVIDd ≥ 1.7 (심초음파)</li>
    </ul>
    <p>
      즉, 방사선 지표는 심초음파를 대체하는 것이 아니라 <strong>심초음파를 시행하기 어려운 상황에서의 선별 검사</strong> 또는
      <strong> 심초음파 소견을 보완하는 근거</strong>로 사용하는 것이 가장 적절합니다.
    </p>

    <h2>5. 측정 정확도에 영향을 주는 요인</h2>
    <ul>
      <li><strong>자세:</strong> 순수 측와위(perfect lateral)가 아니거나 흉곽이 비틀어진 상태로 촬영되면 심장이 실제보다 크거나 작게 보일 수 있습니다.</li>
      <li><strong>호흡 단계:</strong> 흡기 말(peak inspiration)에 촬영해야 흉곽이 충분히 펴져 일관된 측정이 가능합니다.</li>
      <li><strong>척추 경계 클릭의 일관성:</strong> 척추 경계를 지그재그로 찍으면 누적 거리가 실제 척추 경로보다 길어져 오차가 생깁니다 — 본 도구는 클릭이 이전 척추 진행 방향과 어긋나면 시각적으로 표시하고 자동 정렬하여 이 오차를 줄입니다.</li>
      <li><strong>견종 특이적 흉곽 형태:</strong> 단두종, 깔때기 가슴(pectus excavatum), 척추 기형이 있는 개체는 표준 정상범위를 그대로 적용하기 어렵습니다.</li>
    </ul>

    <div className="article-callout">
      <div className="article-callout-title">⚠️ 스크리닝 도구로서의 한계</div>
      <p>
        VHS/VLAS는 재현성이 뛰어나고 사용이 간편하지만, 심실 벽 두께·판막 역류·심근 수축력 등은 전혀 반영하지 못합니다.
        수치가 정상이어도 초기 심근증이나 판막 질환이 있을 수 있으므로, 임상 증상이 있는 환자는 정상 VHS만으로
        안심하지 말고 심초음파 또는 전문의 재평가를 고려해야 합니다.
      </p>
    </div>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Buchanan JW, Bücheler J. Vertebral scale system to measure canine heart size in radiographs. J Am Vet Med Assoc. 1995.</p>
      <p>· Litster AL, Buchanan JW. Vertebral scale system to measure heart size in radiographs of cats. J Am Vet Med Assoc. 2000.</p>
      <p>· Sanderson KJ, et al. The vertebral heart score and vertebral left atrial size in dogs with degenerative mitral valve disease. (Vertebral left atrial size reference range studies).</p>
      <p>· Keene BW, et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019.</p>
    </div>
  </ArticleLayout>
);

export default HeartSizeXrayArticle;
