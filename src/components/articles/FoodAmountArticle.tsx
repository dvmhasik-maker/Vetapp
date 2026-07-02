import React from 'react';
import ArticleLayout from './ArticleLayout';

const FoodAmountArticle: React.FC = () => (
  <ArticleLayout
    title="반려동물 사료량 계산과 영양 관리 가이드"
    description="RER·DER 공식, 생애 단계별 에너지 요구량 계수, 체중 관리 전략과 임상 영양 적용 원칙 완전 정리"
    toolPath="/food-amount"
    toolName="사료량 계산 도구"
  >
    <h2>1. 반려동물 영양 관리가 중요한 이유</h2>
    <p>
      적절한 영양 공급은 반려동물의 성장, 면역 기능, 피부·피모 건강, 근골격 유지, 노화 속도 등 건강 전반에 직결됩니다.
      임상에서 영양 상태는 종종 과소평가되지만, 비만 관련 질환(당뇨, 관절염, 호흡기 질환)과 근육 감소증(Sarcopenia)은
      올바른 영양 관리만으로도 상당 부분 예방하거나 개선할 수 있습니다.
    </p>
    <p>
      사료 회사가 포장에 표시한 급여량 권장치는 <strong>평균적인 개체</strong>를 기준으로 하며, 개별 환자의 나이·활동량·중성화 여부·질환 상태를 반영하지 않습니다.
      따라서 수의사가 직접 에너지 요구량을 계산하여 개인화된 급여 계획을 제시하는 것이 중요합니다.
    </p>

    <h2>2. 에너지 요구량 계산의 기초</h2>

    <h3>RER (Resting Energy Requirement, 안정 에너지 요구량)</h3>
    <p>
      RER은 체온 유지, 호흡, 순환 등 <strong>생명 유지에 필요한 최소 에너지</strong>를 나타냅니다.
      활동·소화·성장·임신 등 추가 에너지는 포함되지 않습니다.
    </p>
    <ul>
      <li><strong>대사 공식:</strong> RER(kcal/day) = 70 × 체중(kg)^0.75</li>
      <li><strong>간이 공식(2~45 kg 범위):</strong> RER = 30 × 체중(kg) + 70</li>
      <li><strong>예시(10 kg 개):</strong> 70 × 10^0.75 = 70 × 5.62 ≈ 394 kcal/day</li>
    </ul>

    <h3>DER (Daily Energy Requirement, 일일 에너지 요구량)</h3>
    <p>
      DER은 RER에 <strong>생활 상태 계수(Life Stage Factor)</strong>를 곱하여 실제 급여해야 할 에너지를 산출합니다.
    </p>
    <ul>
      <li><strong>공식:</strong> DER(kcal/day) = RER × 계수</li>
    </ul>

    <h2>3. 생활 상태별 에너지 계수 (Dogs)</h2>

    <h3>성장기 (Growth)</h3>
    <ul>
      <li><strong>이유 후~4개월령:</strong> × 3.0 (에너지 요구량이 성견의 2~3배)</li>
      <li><strong>4~12개월령:</strong> × 2.0~2.5</li>
      <li><strong>12개월~성견 체중 달성:</strong> × 1.8~2.0</li>
    </ul>

    <h3>성견 (Adult Maintenance)</h3>
    <ul>
      <li><strong>중성화 성견:</strong> × 1.6 (중성화 후 기초대사율 감소)</li>
      <li><strong>비중성화 성견:</strong> × 1.8</li>
      <li><strong>활동적인 개 (규칙적 운동, 주 5일 이상):</strong> × 2.0~2.5</li>
      <li><strong>작업견·경주견:</strong> × 3.0~8.0 (운동 강도에 따라 크게 증가)</li>
    </ul>

    <h3>체중 관리</h3>
    <ul>
      <li><strong>체중 감량 목표:</strong> 이상 체중 기준 RER × 1.0 (현재 체중이 아닌 목표 체중으로 계산)</li>
      <li><strong>심한 비만 초기:</strong> 이상 체중 RER × 0.8로 시작 후 체중 변화 모니터링</li>
      <li><strong>체중 유지 (이상체중 달성 후):</strong> × 1.2~1.4</li>
    </ul>

    <h3>특수 상태</h3>
    <ul>
      <li><strong>임신 초기 (1~6주):</strong> × 1.8 (임신 전 체중 기준)</li>
      <li><strong>임신 후기 (6~9주):</strong> × 3.0</li>
      <li><strong>수유 중:</strong> × 4.0~8.0 (새끼 수에 따라 조정)</li>
      <li><strong>노령견(7세 이상):</strong> × 1.4~1.6 (대사율 감소, 개체 차이 큼)</li>
    </ul>

    <h2>4. 고양이 에너지 요구량 계수 (Cats)</h2>
    <ul>
      <li><strong>중성화 성묘:</strong> × 1.2~1.4</li>
      <li><strong>비중성화 성묘:</strong> × 1.4~1.6</li>
      <li><strong>성장기 고양이 (10개월 미만):</strong> × 2.0~3.0</li>
      <li><strong>실내 비활동성 고양이:</strong> × 1.0 (비만 방지)</li>
      <li><strong>체중 감량 목표:</strong> × 0.8 (목표 체중 기준 RER)</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 고양이 급격한 식이 제한 금지</div>
      <p>
        비만 고양이에서 급격한 사료 제한은 지방간(간지방증, Hepatic Lipidosis)을 유발할 수 있습니다.
        체중 감량 속도는 주당 체중의 0.5~1%를 초과하지 않도록 하며, 식욕이 완전히 소실되면 즉시 수의사와 상담하세요.
      </p>
    </div>

    <h2>5. 사료량을 kcal에서 그램으로 환산하기</h2>
    <p>
      DER(kcal)을 계산한 후 실제 급여량(g)으로 환산하려면 사용 사료의 열량 밀도가 필요합니다.
    </p>
    <ul>
      <li><strong>사료 포장 확인:</strong> "ME(대사 가능 에너지) X kcal/kg" 또는 "X kcal/cup" 표기 확인</li>
      <li><strong>환산 공식:</strong> 일일 급여량(g) = DER(kcal) ÷ 사료 열량(kcal/g)</li>
      <li><strong>예시:</strong> DER = 500 kcal, 사료 열량 = 3,500 kcal/kg = 3.5 kcal/g → 500 ÷ 3.5 ≈ 143 g/day</li>
    </ul>
    <p>
      습식 사료는 수분 함량이 높아(70~80%) 같은 무게에서 건식 사료보다 훨씬 적은 열량을 제공하므로,
      건식과 습식을 혼합 급여하는 경우 각각의 열량 기여분을 합산하여 계산해야 합니다.
    </p>

    <h2>6. BCS(Body Condition Score)를 통한 급여량 조정</h2>
    <p>
      계산된 DER은 이론값이며, 실제 개체마다 대사율 차이가 있습니다.
      <strong>BCS(체형 점수, 9점 척도)</strong>를 이용한 정기적인 체형 평가를 통해 급여량을 세밀하게 조정하는 것이 핵심입니다.
    </p>
    <ul>
      <li><strong>BCS 4~5 (이상):</strong> 현재 급여량 유지</li>
      <li><strong>BCS 6~7 (과체중):</strong> 급여량 10~20% 감량, 2~4주마다 체중 재평가</li>
      <li><strong>BCS 8~9 (비만):</strong> 처방 감량식 또는 20~30% 감량, 월 1회 체중·BCS 측정</li>
      <li><strong>BCS 3 이하 (저체중):</strong> 급여량 10~20% 증량, 기저 질환 감별 필요</li>
    </ul>

    <h2>7. 사료 교체 시 주의사항</h2>
    <p>
      새로운 사료로 교체할 때 급작스러운 변경은 장내 미생물 불균형으로 인한 구토·설사를 유발할 수 있습니다.
      <strong>7~10일에 걸쳐 점진적으로 비율을 변경</strong>하는 것이 위장관 적응을 위한 표준 방법입니다.
    </p>
    <ul>
      <li>1~2일: 기존 사료 75% + 새 사료 25%</li>
      <li>3~4일: 기존 사료 50% + 새 사료 50%</li>
      <li>5~7일: 기존 사료 25% + 새 사료 75%</li>
      <li>8일 이후: 새 사료 100%</li>
    </ul>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· WSAVA Global Nutrition Guidelines. 2024. wsava.org</p>
      <p>· Hand MS, et al. Small Animal Clinical Nutrition. 5th ed. Mark Morris Institute. 2010.</p>
      <p>· Freeman LM, et al. AAHA Nutritional Assessment Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2011.</p>
    </div>
  </ArticleLayout>
);

export default FoodAmountArticle;
