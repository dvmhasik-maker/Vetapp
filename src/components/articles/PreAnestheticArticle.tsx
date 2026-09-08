import React from 'react';
import ArticleLayout from './ArticleLayout';

const PreAnestheticArticle: React.FC = () => (
  <ArticleLayout
    title="마취 전 검사와 위험도 평가 가이드"
    description="ASA 신체상태 분류, 마취 전 최소 검사 항목, 금식 기준, 고위험 환자에서의 프로토콜 조정 원칙"
    toolPath="/fluid-therapy"
    toolName="수액 요법 계산기"
  >
    <h2>1. 마취 전 평가의 목적</h2>
    <p>
      마취 관련 합병증의 상당수는 마취제 자체보다 <strong>기저 질환을 사전에 발견하지 못했거나, 위험도에 맞춰
      프로토콜을 조정하지 않은 경우</strong>에 발생합니다. 마취 전 평가는 단순히 "수술이 가능한가"를 확인하는
      절차가 아니라, 개별 환자에게 맞는 마취 계획(전처치·유도·유지·회복)을 설계하기 위한 필수 단계입니다.
    </p>

    <h2>2. ASA 신체상태 분류(Physical Status Classification)</h2>
    <p>
      미국마취과학회(ASA) 분류는 수의학에서도 표준적으로 차용되어 마취 위험도를 등급화하는 데 사용됩니다.
    </p>
    <ul>
      <li><strong>ASA I:</strong> 전신 건강한 환자 (기저 질환 없음)</li>
      <li><strong>ASA II:</strong> 경미한 전신 질환이 있으나 기능 제한이 없는 환자 (예: 비만, 경증 심잡음)</li>
      <li><strong>ASA III:</strong> 중등도의 전신 질환이 있어 활동에 제한이 있는 환자 (예: 대상성 심부전, 조절 중인 당뇨)</li>
      <li><strong>ASA IV:</strong> 생명을 위협하는 중증 전신 질환 (예: 실조성 심부전, 쇼크)</li>
      <li><strong>ASA V:</strong> 수술 없이는 생존이 불가능한 위독 상태</li>
    </ul>
    <div className="article-info">
      <p>ASA III 이상부터는 표준 프로토콜을 그대로 적용하기보다, 개별 약물 선택과 모니터링 강도를 반드시 조정해야 합니다.</p>
    </div>

    <h2>3. 마취 전 최소 검사 항목</h2>
    <p>나이와 ASA 등급에 따라 검사 범위를 조정하되, 다음 항목을 기본으로 고려합니다.</p>
    <ul>
      <li><strong>전혈구검사(CBC):</strong> 빈혈, 혈소판 감소 등 출혈·산소운반능 관련 위험을 확인합니다.</li>
      <li><strong>혈청 화학검사:</strong> 신장·간 기능은 마취제 대사와 배출에 직결되므로 필수입니다. 알부민 저하는 마취제 결합률에 영향을 줍니다.</li>
      <li><strong>흉부 청진 및 심잡음 평가:</strong> 새로 발견된 심잡음은 마취 전 심초음파 등 추가 심장 평가로 이어져야 합니다.</li>
      <li><strong>응고 기능 검사:</strong> 출혈 위험이 있는 수술이나 특정 견종(도베르만의 폰 빌레브란트병 등)에서 고려합니다.</li>
      <li><strong>고령 환자의 흉부 방사선:</strong> 잠재적 심비대나 폐 병변을 사전에 배제합니다.</li>
    </ul>

    <h2>4. 금식 기준</h2>
    <p>
      과도하게 긴 금식은 저혈당·탈수 위험을 높이고, 반대로 금식이 불충분하면 마취 중 역류·흡인성 폐렴 위험이
      커집니다. 최신 가이드라인은 과거보다 짧은 금식 시간을 권장하는 추세입니다.
    </p>
    <ul>
      <li><strong>고형식:</strong> 마취 6~8시간 전까지 금식 (그 이상 장시간 금식은 권장되지 않음)</li>
      <li><strong>음수:</strong> 마취 유도 1~2시간 전까지는 자유급수 허용</li>
      <li><strong>어린 동물, 당뇨 환자:</strong> 저혈당 위험이 크므로 금식 시간을 짧게 조정하고 혈당을 모니터링</li>
    </ul>

    <h2>5. 고위험 환자에서의 프로토콜 조정</h2>
    <h3>심장 질환 환자</h3>
    <p>
      전부하·후부하 변화에 민감하므로 급격한 수액 부하를 피하고, 심근 억제 효과가 적은 약물(오피오이드 중심
      전처치 등)을 우선 고려합니다. 마취 중 수액 속도는 표준 유지량보다 보수적으로 설정합니다.
    </p>
    <h3>신장 질환 환자</h3>
    <p>
      신장으로 배출되는 약물은 반감기가 늘어날 수 있어 용량 조정이 필요하며, 마취 전후 적절한 수액 처치로
      신혈류를 유지하는 것이 급성 신손상 예방에 중요합니다.
    </p>
    <h3>단두종(브라키세팔릭) 견종</h3>
    <p>
      상부 기도 저항이 높아 마취 유도·발관 시 저산소증 위험이 특히 큽니다. 완전히 각성할 때까지 기관 삽관을
      유지하고, 회복 중에도 산소 공급과 기도 개방 상태를 지속적으로 관찰해야 합니다.
    </p>

    <div className="article-callout">
      <div className="article-callout-title">⚠️ 회복기도 마취의 연장선</div>
      <p>
        마취 관련 사망의 상당수는 수술 중이 아니라 <strong>회복기(발관 이후 몇 시간)</strong>에 발생합니다.
        활력징후가 안정될 때까지 회복실에서의 모니터링을 소홀히 하지 않아야 합니다.
      </p>
    </div>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· AAHA Anesthesia and Monitoring Guidelines for Dogs and Cats. American Animal Hospital Association.</p>
      <p>· Grimm KA, et al., eds. Veterinary Anesthesia and Analgesia: The Fifth Edition of Lumb and Jones.</p>
    </div>
  </ArticleLayout>
);

export default PreAnestheticArticle;
