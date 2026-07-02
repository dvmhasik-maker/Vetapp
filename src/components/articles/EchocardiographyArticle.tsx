import React from 'react';
import ArticleLayout from './ArticleLayout';

const EchocardiographyArticle: React.FC = () => (
  <ArticleLayout
    title="소동물 심초음파 지표 해석 가이드"
    description="LA/Ao, LVIDd, FS, EPSS 등 핵심 지표의 정상 범위와 ACVIM MMVD·HCM 병기 결정 기준 완전 정리"
    toolPath="/echocardiography"
    toolName="심초음파 지표 계산"
  >
    <h2>1. 소동물 심초음파(Echocardiography)의 역할</h2>
    <p>
      심초음파는 심장의 구조와 기능을 실시간으로 평가할 수 있는 비침습적 영상 검사로, 소동물 심장 질환 진단에서 가장 핵심적인 도구입니다.
      단순한 심장 크기 측정을 넘어 <strong>심실 수축력, 판막 기능, 혈역학적 상태</strong>까지 종합적으로 평가할 수 있습니다.
    </p>
    <p>
      특히 개에서 가장 흔한 심장 질환인 <strong>점액종성 승모판 질환(MMVD, Myxomatous Mitral Valve Disease)</strong>과
      고양이에서 흔한 <strong>비대성 심근증(HCM, Hypertrophic Cardiomyopathy)</strong>의 병기 결정과 치료 시작 시점 판단에 필수적입니다.
    </p>

    <h2>2. 주요 측정 지표와 정상 범위</h2>

    <h3>LA/Ao Ratio (좌심방/대동맥 비율)</h3>
    <p>
      좌심방(LA)과 대동맥(Ao) 직경의 비율로 <strong>좌심방 확장 여부</strong>를 평가하는 가장 중요한 단일 지표입니다.
      좌심방이 확장된다는 것은 심장이 보상 능력의 한계에 도달하고 있다는 의미입니다.
    </p>
    <ul>
      <li><strong>개 정상:</strong> 1.6 미만</li>
      <li><strong>개 경계:</strong> 1.6~1.8 (주의 관찰)</li>
      <li><strong>개 확장:</strong> 1.8 이상 (B2 단계 기준 중 하나)</li>
      <li><strong>고양이 정상:</strong> 1.5 미만</li>
    </ul>

    <h3>LVIDd Normalized (체중 표준화 좌심실 내경)</h3>
    <p>
      확장기 좌심실 내경을 체중으로 표준화한 값입니다. 개체 간 체격 차이를 보정하여 심실 확장을 공정하게 비교할 수 있습니다.
      ACVIM 2019 가이드라인에서 <strong>B2 단계 진입 기준</strong> 중 하나로 사용됩니다.
    </p>
    <ul>
      <li><strong>B2 기준:</strong> Normalized LVIDd ≥ 1.7 (개, 체중 보정 공식 적용)</li>
    </ul>

    <h3>FS (Fractional Shortening, 분획 단축률)</h3>
    <p>
      수축기와 이완기의 좌심실 내경 차이를 이완기 내경으로 나눈 비율로, <strong>심근 수축력</strong>을 나타냅니다.
    </p>
    <ul>
      <li><strong>개 정상:</strong> 25~45%</li>
      <li><strong>고양이 정상:</strong> 35~65% (고양이는 정상 범위가 더 넓음)</li>
      <li><strong>25% 미만 (개):</strong> 수축력 저하 의심 → 확장성 심근증(DCM) 감별</li>
      <li><strong>45% 이상 (개):</strong> 동적 폐색이나 비대성 심근증(HCM) 감별 필요</li>
    </ul>

    <h3>EPSS (E-Point Septal Separation)</h3>
    <p>
      M-mode에서 승모판 전엽 E파 최대 개방점과 심실 중격 사이의 거리입니다.
      좌심실 수축 기능이 저하될수록 심실이 충분히 비워지지 않아 이 거리가 멀어집니다.
    </p>
    <ul>
      <li><strong>개 정상:</strong> 6 mm 미만</li>
      <li><strong>6 mm 이상:</strong> 수축 기능 저하 시사</li>
    </ul>

    <h3>VHS (Vertebral Heart Score)</h3>
    <p>
      흉부 방사선에서 심장 크기를 흉추 길이로 표준화한 지표입니다. 심초음파와 함께 사용하여 심비대를 보조적으로 평가합니다.
    </p>
    <ul>
      <li><strong>개 정상:</strong> 9.7 ± 0.5 (견종별 정상 범위 차이 있음)</li>
      <li><strong>B2 기준 보조:</strong> VHS &gt; 10.5 또는 VLAS &gt; 2.04 (품종별 기준 적용)</li>
    </ul>

    <h2>3. ACVIM 2019 MMVD 병기 분류 (개)</h2>
    <p>
      2019년 개정된 ACVIM 가이드라인은 개 MMVD를 아래와 같이 분류하며, 각 단계별로 치료 방침이 달라집니다.
    </p>
    <ul>
      <li><strong>Stage A:</strong> 심장 질환 발생 위험이 높은 견종 (카발리에 킹 찰스 스패니얼 등). 현재 심잡음 없음. 정기 검진 권장.</li>
      <li><strong>Stage B1:</strong> 승모판 역류에 의한 심잡음은 있으나, 영상 검사에서 심비대 소견 없음. 치료 불필요, 6~12개월마다 재검진.</li>
      <li>
        <strong>Stage B2:</strong> 심잡음 있고 심비대 기준 충족 (아래 3가지 중 2개 이상):
        <ul>
          <li>VHS &gt; 10.5 또는 VLAS &gt; 2.04</li>
          <li>LA/Ao ≥ 1.6</li>
          <li>Normalized LVIDd ≥ 1.7</li>
        </ul>
        이 단계부터 Pimobendan 투여 시작 (0.25 mg/kg BID). 최근 연구(EPIC trial)에서 심부전 발생 시간을 15개월 이상 지연시킴이 입증됨.
      </li>
      <li><strong>Stage C:</strong> 과거 또는 현재 울혈성 심부전 증상(폐수종, 복수 등) 동반. Pimobendan + Furosemide + ACE 억제제 병용.</li>
      <li><strong>Stage D:</strong> 표준 치료에 반응하지 않는 불응성 심부전. 용량 증량 또는 Spironolactone, Sildenafil 등 추가 약제 고려.</li>
    </ul>

    <h2>4. 고양이 비대성 심근증(HCM) 평가</h2>
    <p>
      고양이 HCM은 좌심실 벽 두께(IVS 또는 LVW) 측정이 핵심입니다.
      정상 고양이의 경우 이완기 좌심실 벽 두께는 일반적으로 6 mm 미만이며, <strong>6 mm 이상이면 비대 의심</strong>합니다.
    </p>
    <ul>
      <li><strong>경증 HCM:</strong> 벽 두께 6.0~7.0 mm</li>
      <li><strong>중등증 HCM:</strong> 벽 두께 7.0~9.0 mm</li>
      <li><strong>중증 HCM:</strong> 벽 두께 9.0 mm 이상</li>
      <li><strong>LA 확장 동반:</strong> LA/Ao ≥ 1.5 → 심부전 위험 높음, Atenolol 또는 Clopidogrel 고려</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 고양이 심부전의 특이성</div>
      <p>고양이는 폐수종 증상이 개와 다르게 나타납니다. 빈호흡(호흡수 &gt; 30회/분)과 개구 호흡이 주요 징후이며, 청진 소견이 경미하거나 없는 경우도 있습니다. 흉수를 동반한 경우 즉시 흉강천자가 필요합니다.</p>
    </div>

    <h2>5. 심초음파 측정의 한계와 주의사항</h2>
    <p>
      심초음파 수치는 측정자 간 변동성(Inter-observer variability)이 있으며, 동일 환자에서도 진정 상태, 호흡, 심박수에 따라 달라질 수 있습니다.
      단일 수치로 판단하기보다 <strong>여러 지표를 종합하고 시계열 추적</strong>하여 경향성을 평가하는 것이 중요합니다.
    </p>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Keene BW, et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019.</p>
      <p>· Luis Fuentes V, et al. ACVIM consensus statement guidelines for the classification, diagnosis, and management of cardiomyopathies in cats. J Vet Intern Med. 2020.</p>
      <p>· Boswood A, et al. Effect of Pimobendan in Dogs with Preclinical Myxomatous Mitral Valve Disease and Cardiomegaly (EPIC Study). J Vet Intern Med. 2016.</p>
    </div>
  </ArticleLayout>
);

export default EchocardiographyArticle;
