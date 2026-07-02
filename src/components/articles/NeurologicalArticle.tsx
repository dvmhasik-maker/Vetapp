import React from 'react';
import ArticleLayout from './ArticleLayout';

const NeurologicalArticle: React.FC = () => (
  <ArticleLayout
    title="소동물 신경계 질환 국소화 가이드"
    description="신경학적 검사 체계, UMN vs LMN 감별, 척수 병변 위치 국소화 원칙과 주요 신경계 질환 감별 진단"
    toolPath="/neurological"
    toolName="신경증상 진단 도구"
  >
    <h2>1. 신경학적 검사의 목적과 체계</h2>
    <p>
      신경학적 검사(Neurological Examination)의 두 가지 핵심 목표는 첫째 <strong>병변의 유무 확인</strong>,
      둘째 <strong>병변의 위치 국소화(Localization)</strong>입니다.
      어디에 병변이 있는지를 먼저 결정해야 적절한 영상 검사 방법(MRI 부위, CT 범위)을 선택할 수 있습니다.
    </p>
    <p>
      신경계는 크게 <strong>중추 신경계(CNS: 뇌 + 척수)</strong>와 <strong>말초 신경계(PNS: 신경근, 말초 신경)</strong>로 나뉘며,
      각각의 병변은 서로 다른 임상 양상을 보입니다.
    </p>

    <h2>2. UMN vs LMN: 가장 중요한 기초 감별</h2>
    <p>
      신경 병변을 국소화하는 데 있어 <strong>상위운동신경세포(UMN) 징후</strong>와
      <strong>하위운동신경세포(LMN) 징후</strong>를 구분하는 것이 출발점입니다.
    </p>

    <h3>UMN (Upper Motor Neuron) 징후</h3>
    <p>
      뇌 또는 척수(C1~L3)에서 LMN으로 내려가는 신호를 차단하는 병변에서 나타납니다.
      LMN에 대한 억제가 제거되어 반사가 오히려 항진됩니다.
    </p>
    <ul>
      <li>척수 반사: 정상 또는 항진(Hyperreflexia)</li>
      <li>근긴장도: 정상 또는 증가(Hypertonia)</li>
      <li>근위축: 느리게 진행(폐용성 위축)</li>
      <li>보행 패턴: 경직되고 비틀거리는 보행(Spastic ataxia)</li>
    </ul>

    <h3>LMN (Lower Motor Neuron) 징후</h3>
    <p>
      척수 회색질, 신경근, 말초신경, 신경근육 접합부 또는 근육 자체의 병변에서 나타납니다.
      운동 신호 자체가 차단되므로 근육이 이완되고 반사가 소실됩니다.
    </p>
    <ul>
      <li>척수 반사: 저하 또는 소실(Hyporeflexia/Areflexia)</li>
      <li>근긴장도: 저하(Hypotonia, 이완성)</li>
      <li>근위축: 매우 빠르게 진행(신경원성 위축, 수일 내 시작)</li>
      <li>보행 패턴: 이완성 마비, 쓰러짐</li>
    </ul>

    <h2>3. 척수 병변의 해부학적 국소화</h2>
    <p>
      네 지체의 운동·감각 이상 조합과 UMN/LMN 패턴을 분석하면 척수 병변 위치를 좁힐 수 있습니다.
    </p>

    <h3>C1~C5 (경추 1~5번)</h3>
    <ul>
      <li>사지 마비 또는 부전 마비 (Tetraplegia/Tetraparesis)</li>
      <li>사지 모두 UMN 징후</li>
      <li>횡격막 마비(C3~C5) 시 호흡 곤란 → 응급</li>
      <li>주요 원인: 환축골돌기 기형, 추간판 탈출증(IVDD)</li>
    </ul>

    <h3>C6~T2 (경추 6번~흉추 2번)</h3>
    <ul>
      <li>사지 마비 가능하나 전지 LMN + 후지 UMN 패턴</li>
      <li>전지: 반사 저하, 이완성 → C6~T2 신경근에서 전지 LMN 기원</li>
      <li>Horner's Syndrome(안검하수, 동공 축소, 안구함몰) 동반 가능</li>
      <li>주요 원인: 소형견 IVDD, 종양, 외상</li>
    </ul>

    <h3>T3~L3 (흉추 3번~요추 3번)</h3>
    <ul>
      <li>후지 마비 또는 부전 마비, 전지는 정상</li>
      <li>후지 UMN 징후 (반사 정상 또는 항진)</li>
      <li>배뇨 기능: UMN 방광(방광 과긴장, 소량의 잦은 실수 또는 완전 저류)</li>
      <li>주요 원인: 소형견에서 가장 흔한 IVDD 부위 (T12~L1 호발)</li>
    </ul>

    <h3>L4~S3 (요추 4번~천추 3번)</h3>
    <ul>
      <li>후지 마비, 전지 정상</li>
      <li>후지 LMN 징후 (반사 저하·소실, 이완성 마비)</li>
      <li>배뇨 기능: LMN 방광(방광 이완, 압박으로 용이하게 배뇨 가능)</li>
      <li>회음부 반사 저하, 항문 긴장도 저하</li>
      <li>주요 원인: 마미 증후군(Cauda Equina Syndrome), 요추 불안정증</li>
    </ul>

    <h2>4. 심부 통증 감각(Deep Pain Perception): 예후의 핵심 지표</h2>
    <div className="article-callout">
      <div className="article-callout-title">⚠️ 응급 상황 판단 기준</div>
      <p>
        심부 통증 감각(DPP) 소실은 척수 병변 중 가장 심각한 신경학적 손상을 의미합니다.
        DPP 소실 이후 48시간을 초과하면 외과적 감압술 후에도 회복 가능성이 급격히 낮아집니다.
        DPP 소실이 확인되면 즉각적인 외과적 개입 가능성을 논의해야 합니다.
      </p>
    </div>
    <ul>
      <li><strong>DPP 양성(정상):</strong> 발가락의 깊은 뼈를 자극할 때 의식적인 반응(울음, 머리 돌리기) 있음</li>
      <li><strong>DPP 음성:</strong> 통증 자극에 의식적 반응 없음. 단순 척수 반사(withdrawal)와 구분 필수</li>
      <li><strong>DPP 소실 시 수술 예후:</strong> 48시간 이내 감압술 → 회복률 약 50~60%, 48시간 초과 → 회복률 급감</li>
    </ul>

    <h2>5. 주요 신경계 질환 감별</h2>

    <h3>추간판 탈출증 (IVDD)</h3>
    <p>
      소형 연골이영양성 견종(닥스훈트, 비글, 시추, 페키니즈 등)에서 가장 흔합니다.
      Hansen Type I(수핵 탈출)은 급성, Type II(섬유륜 팽윤)는 만성 경과가 특징입니다.
      보존 요법(엄격한 cage rest + 진통)과 외과적 감압술(척추후궁절제술 등) 중 신경 손상 정도에 따라 결정합니다.
    </p>

    <h3>변성성 척수병증 (Degenerative Myelopathy, DM)</h3>
    <p>
      노령의 대형견(저먼 셰퍼드, 코기 등)에서 SOD1 유전자 돌연변이와 연관된 진행성 척수 변성입니다.
      초기에는 비통증성 UMN 후지 부전 마비로 시작하여 점진적으로 LMN 징후로 진행합니다.
      현재 확립된 치료는 없으나 재활 치료가 이동성 유지에 도움이 됩니다.
    </p>

    <h3>피브로카틸라지노스 색전증 (FCE)</h3>
    <p>
      섬유연골 물질이 척수 혈관을 막아 발생하는 비통증성 급성 척수 경색입니다.
      갑작스러운 발현 후 통증 없이 24~72시간 내 더 이상 진행하지 않는 것이 특징입니다.
      치료는 재활 중심이며, 예후는 병변 정도와 DPP 유무에 따라 다양합니다.
    </p>

    <div className="article-reference">
      <p>※ 참고 문헌</p>
      <p>· Dewey CW, da Costa RC, eds. Practical Guide to Canine and Feline Neurology. 3rd ed. Wiley-Blackwell. 2016.</p>
      <p>· Olby N. The Pathogenesis and Treatment of Acute Spinal Cord Injuries in Dogs. Vet Clin North Am Small Anim Pract. 2010.</p>
      <p>· Tipold A, Stein VM. Inflammatory diseases of the spine in small animals. Vet Clin North Am Small Anim Pract. 2010.</p>
    </div>
  </ArticleLayout>
);

export default NeurologicalArticle;
