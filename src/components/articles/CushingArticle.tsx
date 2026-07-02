import React from 'react';
import ArticleLayout from './ArticleLayout';

const CushingArticle: React.FC = () => (
  <ArticleLayout
    title="개 쿠싱 증후군 진단과 치료 가이드"
    description="부신피질기능항진증(HAC)의 원인·증상·확진 검사 전략과 트릴로스탄 모니터링 프로토콜 완전 정리"
    toolPath="/cushing"
    toolName="쿠싱 진단 체크리스트"
  >
    <h2>1. 쿠싱 증후군이란?</h2>
    <p>
      부신피질기능항진증(Hyperadrenocorticism, HAC), 흔히 '쿠싱 증후군'이라고 불리는 이 질환은
      부신 피질에서 <strong>코르티솔(Cortisol)이 만성적으로 과다 분비</strong>되어 전신에 걸쳐 광범위한 대사 이상을 초래하는 내분비 질환입니다.
      중·노령견에서 가장 많이 발생하며, 평균 발병 연령은 10~11세입니다.
    </p>
    <p>
      발생 원인에 따라 두 가지 유형으로 나뉩니다.
    </p>
    <ul>
      <li><strong>뇌하수체 의존성(PDH, Pituitary-Dependent Hyperadrenocorticism):</strong> 전체의 약 80~85%를 차지하며, 뇌하수체의 미세 종양이 ACTH를 과도하게 분비하여 양쪽 부신을 자극합니다.</li>
      <li><strong>부신 의존성(AT, Adrenal Tumor):</strong> 약 15~20%에서 발생하며 부신에서 직접 코르티솔을 자율적으로 분비하는 종양(선종 또는 선암)이 원인입니다.</li>
      <li><strong>의원성(Iatrogenic):</strong> 장기간 스테로이드 투여에 의해 발생. 외인성 스테로이드를 점진적으로 감량하는 것이 치료의 핵심입니다.</li>
    </ul>

    <h2>2. 주요 임상 증상</h2>
    <p>
      쿠싱 증후군의 증상은 코르티솔의 전신적 과다 효과로 인해 매우 다양하게 나타나며, 초기에는 보호자가 단순한 '노화'로 오해하는 경우가 많습니다.
    </p>
    <ul>
      <li><strong>다음·다뇨·다식(PU/PD/PP):</strong> 가장 흔하고 이른 시기에 나타나는 증상. 보호자 주소가 "물을 너무 많이 마신다"인 경우 반드시 쿠싱을 감별 진단에 포함.</li>
      <li><strong>복부 팽만(Pot-belly):</strong> 복근 약화와 간 비대로 인해 복부가 아래로 처지는 전형적 외형.</li>
      <li><strong>대칭성 탈모:</strong> 옆구리, 복부, 허리 부위부터 시작하며 두피와 앞다리는 상대적으로 보존.</li>
      <li><strong>피부 변화:</strong> 피부 얇아짐(피부 혈관이 투명하게 보임), 석회 피부증(Calcinosis cutis), 면포 형성.</li>
      <li><strong>근육 약화·운동 불내성:</strong> 코르티솔의 근단백질 분해 효과로 인해 전반적인 근육량 감소.</li>
      <li><strong>간비대·ALT 상승:</strong> 스테로이드성 간염 패턴으로 ALP의 현저한 상승이 특징적.</li>
    </ul>

    <h2>3. 진단 전략: 올바른 검사 순서</h2>
    <p>
      쿠싱 진단에서 가장 중요한 원칙은 <strong>"임상 증상이 없는 환자에게 호르몬 수치만으로 쿠싱을 진단하지 않는다"</strong>는 것입니다.
      모든 확진 검사는 위양성 결과가 있으며, 임상 징후와 함께 종합적으로 해석해야 합니다.
    </p>

    <h3>선별 검사 (Screening Tests)</h3>
    <ul>
      <li>
        <strong>LDDST (Low-Dose Dexamethasone Suppression Test):</strong> 민감도 약 85~95%로 가장 우수한 선별 검사.
        덱사메타손 투여 후 8시간 시점 코르티솔이 1.0 μg/dL 초과 시 양성. 일부 PDH 환자에서 4시간 시점에 억제 후 8시간에 탈출하는 패턴이 관찰됨.
      </li>
      <li>
        <strong>UCCR (Urine Cortisol:Creatinine Ratio):</strong> 민감도 99%로 매우 높아 제외 진단에 유용.
        수치가 정상 범위면 쿠싱 가능성이 극히 낮음. 단, 특이도가 낮아 양성 결과만으로 확진 불가.
      </li>
    </ul>

    <h3>감별 검사 (Differentiation)</h3>
    <ul>
      <li>
        <strong>ACTH 자극 검사:</strong> PDH와 AT를 직접 감별하는 데는 한계가 있지만, <strong>의원성 쿠싱 감별</strong>과
        <strong>트릴로스탄 치료 모니터링</strong>에는 표준 검사. 투여 1시간 후 코르티솔 기준값 해석 필요.
      </li>
      <li>
        <strong>HDDST (High-Dose Dexamethasone Suppression Test):</strong> PDH에서는 약 75%에서 억제가 나타나 AT와 감별에 도움.
      </li>
      <li>
        <strong>복부 초음파:</strong> 부신 크기를 평가하여 PDH(양측 부신 비대) vs AT(한쪽 부신 종괴, 반대쪽 위축) 감별에 필수.
      </li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 검사 결과 해석 시 주의</div>
      <p>스트레스, 다른 전신 질환, 스테로이드 약물 사용은 코르티솔 수치를 위양성으로 만들 수 있습니다. 반드시 투약력과 건강 상태를 함께 확인하세요.</p>
    </div>

    <h2>4. 치료: 트릴로스탄(Trilostane) 사용 프로토콜</h2>
    <p>
      PDH와 수술 불가능한 AT에서 사용되는 트릴로스탄은 부신에서 코르티솔 합성의 핵심 효소(3β-HSD)를 억제합니다.
      치료 목표는 호르몬 수치 정상화가 아니라 <strong>보호자가 보고하는 임상 증상의 개선</strong>입니다.
    </p>
    <ul>
      <li><strong>초기 용량:</strong> 1~2 mg/kg, 1일 1회 식사와 함께 투여 (식이와 함께 투여 시 흡수율 향상)</li>
      <li><strong>첫 모니터링:</strong> 투약 시작 2~4주 후 ACTH 자극 검사 실시 (투여 4~6시간 후 채혈)</li>
      <li><strong>목표 자극 후 코르티솔:</strong> 1.45~9.1 μg/dL (38~238 nmol/L) — 이 범위에서 임상 증상 개선과 부신 부전 예방을 동시에 달성</li>
      <li><strong>이후 모니터링 주기:</strong> 1개월, 3개월, 이후 3~6개월마다</li>
    </ul>

    <h2>5. 트릴로스탄의 치명적 부작용: 급성 부신 부전(애디슨 위기)</h2>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 보호자 교육 필수 사항</div>
      <p>
        트릴로스탄 투여 중 갑작스러운 기력 저하, 식욕 완전 소실, 구토·설사가 나타나면 즉시 투약을 중단하고 병원을 방문하도록 보호자에게 반드시 교육해야 합니다.
        부신 괴사로 인한 급성 애디슨 위기는 응급 처치 없이 치명적입니다.
      </p>
    </div>
    <ul>
      <li><strong>위험 신호:</strong> 급성 허약, 식욕 완전 소실, 지속 구토, 저혈압</li>
      <li><strong>응급 처치:</strong> 즉각적인 수액 처치(생리식염수), 덱사메타손 IV 투여로 코르티솔 부족을 빠르게 보상</li>
      <li><strong>ACTH 자극 검사:</strong> 자극 전 코르티솔 2 μg/dL 미만 시 부신 기능 부전 의심</li>
    </ul>

    <h2>6. 외과적 치료 고려</h2>
    <p>
      부신 선종(AT)의 경우 외과적 부신 절제술(Adrenalectomy)이 근치적 치료가 될 수 있습니다.
      단, 부신 선암(악성)에서는 혈관 침범 및 전이 여부를 CT로 사전 평가하고, 수술 전 트릴로스탄으로 코르티솔 수치를 정상화하는 것이 수술 위험을 줄입니다.
    </p>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Behrend EN, et al. Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement (updated 2024)</p>
      <p>· Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine. 8th ed.</p>
      <p>· Helm JR, et al. Factors associated with survival after treatment with trilostane for canine hyperadrenocorticism. JVIM. 2011.</p>
    </div>
  </ArticleLayout>
);

export default CushingArticle;
