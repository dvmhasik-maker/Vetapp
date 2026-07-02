import React from 'react';
import ArticleLayout from './ArticleLayout';

const ParasitesArticle: React.FC = () => (
  <ArticleLayout
    title="반려동물 기생충 예방과 치료 가이드"
    description="심장사상충·지알디아·트리코모나스·회충·외부기생충의 임상 특징과 CAPC 기반 예방·치료 프로토콜 완전 정리"
    toolPath="/parasites"
    toolName="기생충 치료 프로토콜"
  >
    <h2>1. 기생충 관리의 중요성</h2>
    <p>
      반려동물의 기생충 감염은 단순한 소화기 증상을 훨씬 넘어서, 심부전(심장사상충), 중증 빈혈, 신경 증상, 그리고 사람에게로의 전파(인수공통감염병)까지
      다양한 심각한 결과를 초래할 수 있습니다.
    </p>
    <p>
      한국의 아열대화되는 기후 변화와 야외 활동 증가로 인해 과거보다 기생충 노출 위험이 높아지고 있으며,
      특히 심장사상충과 진드기 매개 질환(바베시아, SFTS 등)에 대한 연중 예방의 중요성이 더욱 강조되고 있습니다.
    </p>

    <h2>2. 내부 기생충별 임상 특징과 치료</h2>

    <h3>① 심장사상충 (Dirofilaria immitis)</h3>
    <p>
      모기를 통해 전파되는 심장사상충은 성충이 <strong>폐동맥과 우심방에 기생</strong>하며,
      만성 기침, 운동 불내성, 호흡 곤란, 복수(우심부전)를 유발합니다.
      고양이에서는 개보다 성충 수가 적어도 더 심각한 폐 반응(HARD, Heartworm Associated Respiratory Disease)을 일으킵니다.
    </p>
    <ul>
      <li><strong>진단:</strong> 개 - 항원 검사(성충 암컷 항원 검출)가 표준. 마이크로필라리아 검사(혈액 도말) 병행.</li>
      <li><strong>고양이 진단:</strong> 항원 + 항체 검사 병용 (항원 음성이어도 감염 가능)</li>
      <li><strong>개 치료:</strong> Melarsomine dihydrochloride (Immiticide) 근육주사. WHO protocol에 따라 투여 전 Doxycycline(Wolbachia 박멸)과 Prednisolone(폐 반응 완화) 전처치 후 3주 안정 필수.</li>
      <li><strong>고양이 치료:</strong> 성충 구제 약물 없음. 증상 관리(스테로이드, 기관지 확장제) 중심.</li>
      <li><strong>예방:</strong> Ivermectin, Milbemycin oxime, Selamectin 등 월 1회 또는 Moxidectin 3~6개월마다 투여</li>
    </ul>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 치료 중 안정의 중요성</div>
      <p>메라사민 투여 후 죽은 성충이 폐동맥을 막는 혈전색전증을 예방하기 위해 치료 후 최소 4~6주간 엄격한 운동 제한이 필수입니다.</p>
    </div>

    <h3>② 지알디아 (Giardia duodenalis)</h3>
    <p>
      오염된 물이나 분변-구강 경로로 전파되는 원생동물로, 소장 융모 손상을 통해 영양 흡수 장애를 일으킵니다.
      특징적으로 <strong>악취가 나는 점액성 설사</strong>가 만성적으로 반복됩니다.
    </p>
    <ul>
      <li><strong>진단:</strong> 분변 부유법(낭포 검출), ELISA 항원 검사, PCR (가장 민감). 간헐적 배출로 3회 분변 검사 권장.</li>
      <li><strong>치료:</strong> Metronidazole (25 mg/kg BID, 5~7일) 또는 Fenbendazole (50 mg/kg SID, 3~5일). 내성이 있는 경우 두 약물 병용.</li>
      <li><strong>환경 소독:</strong> 사염화 암모늄 또는 희석 표백제. 분변으로 오염된 환경과 개체를 목욕시키는 것도 중요.</li>
      <li><strong>인수공통감염:</strong> 어린이와 면역 저하자에게 전파 가능. 엄격한 위생 교육 필요.</li>
    </ul>

    <h3>③ 고양이 트리코모나스 (Tritrichomonas foetus)</h3>
    <p>
      고양이 대장에 기생하는 원충으로, 주로 군집 생활하는 순혈종 고양이 사이에서 전파됩니다.
      지알디아와 유사한 만성 설사를 유발하지만 악취가 더 심하고, 혈액 또는 점액이 혼재하는 경향이 있습니다.
    </p>
    <ul>
      <li><strong>진단:</strong> PCR이 골든 스탠다드. 신선한 분변의 직접 도말 검경에서 편모 운동성 원충 관찰 가능하나 민감도 낮음.</li>
      <li><strong>치료:</strong> Ronidazole (30~50 mg/kg SID, 14일). 단, 신경 독성 부작용(경련, 운동실조) 주의 — 용량 초과 금물.</li>
      <li><strong>예후:</strong> 치료 후 재감염이 없으면 약 2세까지 자연적으로 해소되는 경향.</li>
    </ul>

    <h3>④ 회충 (Toxocara canis/cati) 및 구충 (Ancylostoma spp.)</h3>
    <p>
      어린 강아지·새끼 고양이에서 가장 흔한 내부 기생충입니다. Toxocara는 태반 또는 모유를 통한 수직 감염이 가능합니다.
    </p>
    <ul>
      <li><strong>회충 증상:</strong> 복부 팽만, 구토·설사, "팟 벨리(pot belly)" 외형, 복강 내 다량 기생 시 장폐색 위험.</li>
      <li><strong>구충 증상:</strong> 장 점막에서 흡혈하여 심한 출혈성 설사, 빈혈, 저알부민혈증 유발.</li>
      <li><strong>치료:</strong> Pyrantel pamoate, Fenbendazole, Milbemycin oxime 등.</li>
      <li><strong>인수공통감염:</strong> 내장 유충 이행증(VLM), 안구 유충 이행증(OLM) — 어린이에게 특히 위험.</li>
    </ul>

    <h2>3. 외부 기생충: 진드기와 벼룩</h2>

    <h3>진드기 (Ticks)</h3>
    <p>
      진드기는 피부 흡혈 외에 다수의 심각한 전신 질환을 매개합니다.
    </p>
    <ul>
      <li><strong>바베시아(Babesia canis):</strong> 적혈구 파괴를 일으키는 원충. 급성 황달, 혈뇨, 중증 빈혈 유발. Imidocarb dipropionate 치료.</li>
      <li><strong>에를리히아(Ehrlichia canis):</strong> 단핵구에 기생. 발열, 혈소판 감소, 출혈 경향. Doxycycline 치료.</li>
      <li><strong>중증열성혈소판감소증(SFTS):</strong> 국내 유행 진드기 매개 바이러스 질환. 사람·개·고양이 모두 감염 가능. 치명률 높음.</li>
    </ul>

    <h3>벼룩 (Fleas)</h3>
    <ul>
      <li><strong>벼룩 알레르기성 피부염(FAD):</strong> 벼룩 타액에 대한 과민 반응. 꼬리 기저부와 복부의 집중된 가려움증·탈모.</li>
      <li><strong>촌충 매개:</strong> Dipylidium caninum — 벼룩이 중간 숙주. 항문 주변에 쌀알 모양 충체 관찰.</li>
      <li><strong>환경 처리의 중요성:</strong> 벼룩 생활사의 95%가 환경(알·유충·번데기)에 있으므로 동물 치료와 환경 처리를 동시에 진행해야 재감염을 방지할 수 있습니다.</li>
    </ul>

    <h2>4. 치료 시 주의사항</h2>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ MDR1/ABCB1 유전자 변이 견종 주의</div>
      <p>
        콜리, 셰틀랜드 쉽독, 오스트레일리안 셰퍼드 등 ABCB1 유전자 변이 견종은 Ivermectin, Milbemycin, Loperamide 등 P-당단백 기질 약물에 신경 독성 반응을 보일 수 있습니다.
        투여 전 유전자 검사 또는 MDR1-safe 약물 선택을 권장합니다.
      </p>
    </div>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 고양이에게 퍼메트린 절대 금지</div>
      <p>
        개 전용 벼룩·진드기 방제 제품에 포함된 퍼메트린(Permethrin)은 고양이에게 치명적인 신경 독성을 유발합니다.
        다묘 가정에서는 고양이가 개의 국소 도포 제품에 접촉하지 않도록 반드시 주의하세요.
      </p>
    </div>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Companion Animal Parasite Council (CAPC) Official Guidelines. 2024. capcvet.org</p>
      <p>· Bowman DD. Georgis' Parasitology for Veterinarians. 10th ed. Elsevier. 2014.</p>
      <p>· European Scientific Counsel Companion Animal Parasites (ESCCAP) Guidelines. 2024.</p>
    </div>
  </ArticleLayout>
);

export default ParasitesArticle;
