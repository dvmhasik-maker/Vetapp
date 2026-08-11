import React from 'react';

const NeuroGuide: React.FC = () => {
  return (
    <div className="neuro-guide-content">
      <section className="guide-section">
        <h4>1. 신경계 검사(Neurological Exam)의 목적</h4>
        <ul className="guide-list">
          <li>신경계 병변에서 관찰되는 임상증상은 무엇인가?</li>
          <li>국소화된 신경계 병변의 위치는 어디인가?</li>
          <li>임상증상을 설명할 수 있는 질환의 진행 과정(형태)은 무엇인가?</li>
          <li>병증이 얼마나 심각한가?</li>
        </ul>
        <p>
          즉, 검사를 통해 임상증상을 파악하고 병변의 위치를 국소화하여 병증의 형태와 심도(severity)를 판단하는 것이 신경계 검사의 핵심입니다.
        </p>
      </section>

      <section className="guide-section">
        <h4>2. 관찰: 의식 상태 및 자세 이상</h4>
        <p><strong>의식 상태</strong></p>
        <ul className="guide-list">
          <li><strong>명료(Alert):</strong> 자극에 대한 반응이 즉각적이고 분명함.</li>
          <li><strong>침울(Depressed):</strong> 반응이 지연됨.</li>
          <li><strong>둔함(Stuporous):</strong> 큰 자극에만 반응.</li>
          <li><strong>소실(Comatose):</strong> 반응 없음.</li>
          <li><strong>치매(Dementia)/섬망(Delirium):</strong> 의식수준은 명료하나 행동이 비정상(부적절한 반응/과도한 반응).</li>
        </ul>
        <p className="guide-note">※ 의식수준의 변화는 각성을 담당하는 ARAS(ascending reticular activating system)가 위치한 중뇌 수준의 병변이나 전뇌의 광범위한 병변을 시사하며, 상대적으로 예후가 불량한 병변군에 속하므로 주목해야 합니다. 이 경우 3·4·5·6번 뇌신경 반사의 변화를 함께 관찰합니다.</p>

        <p><strong>머리 자세 이상</strong></p>
        <ul className="guide-list">
          <li><strong>Head Tilt (기운목):</strong> 좌우 귀/눈의 높이가 비대칭. 전정와우신경(CN 8)과 관련된 고실·전정·연수 수준의 병변이면 <strong>동측성</strong>으로 나타납니다. 단, 소뇌 타래결절엽(flocculonodular lobe) 병변인 경우 <strong>반대측(대측성)</strong>으로 나타나며, 이를 <strong>Paradoxical Vestibular Sign</strong>이라 부릅니다.</li>
          <li><strong>Head Turn:</strong> 좌우 귀 높이는 동일하고 코만 한쪽으로 치우침. 대뇌를 포함한 전뇌 수준의 병변에 의해 <strong>동측성</strong>으로 나타납니다.</li>
          <li><strong>안면비대칭:</strong> 안면신경(CN 7) 마비로 눈꺼풀·입술·귓바퀴가 처짐. 고실·전정·연수 등 말초성 병변은 동측성, 대뇌(두정엽·측두엽) 병변에 의한 중추성 증상은 대측성이며, 대측성일 경우 대뇌의 광범위한 편측 병변을 시사합니다.</li>
        </ul>

        <p><strong>척추 자세 및 횡와 자세 이상</strong></p>
        <ul className="guide-list">
          <li><strong>Spinal Curvature:</strong> Scoliosis(옆굽음/척추측만), Lordosis(배쪽굽음/척추전만), Kyphosis(등쪽굽음/척추후만). 통증에 의해서도 자세 이상(머리를 들지 못하거나 등이 굽는 자세)이 나타날 수 있어 신경 마비와 통증성 자세이상을 감별해야 합니다.</li>
          <li><strong>Wide-based Stance:</strong> 사지 기저부가 넓게 벌어진 자세 → 소뇌 병변 시사.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h4>3. 강직(Rigidity) 3종 비교</h4>
        <p>횡와 자세에서 사지마비 외에 감별해야 하는 세 가지 강직성 자세입니다.</p>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>구분</th><th>소견</th><th>의식</th><th>병변 위치</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Decerebrate Rigidity</td>
                <td>사지 모두 신전, 후궁반장(opisthotonus) 동반 가능</td>
                <td>변화 동반 (Stupor/Coma)</td>
                <td>문측 뇌간 (Rostral Brainstem)</td>
              </tr>
              <tr>
                <td>Decerebellate Rigidity</td>
                <td>후궁반장, 전지 신전, 후지는 굴곡(flexion) 자세가 흔함</td>
                <td>변화 없음(뚜렷)</td>
                <td>소뇌 (Cerebellum)</td>
              </tr>
              <tr>
                <td>Schiff-Sherrington</td>
                <td>후지 마비 + 전지 신전(과긴장) 동반</td>
                <td>변화 없음</td>
                <td>흉요추부 (T3-L3)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="guide-note">※ 핵심 감별점은 의식 상태입니다. 전지가 뻣뻣해도 의식이 정상이면 뇌간 병변일 가능성은 낮습니다.</p>
      </section>

      <section className="guide-section">
        <h4>4. 보행 이상: 파행·실조의 감별</h4>
        <p><strong>파행(Lameness) vs 실조(Ataxia)</strong></p>
        <ul className="guide-list">
          <li><strong>파행:</strong> 절뚝거림(skipping) 형태로 근골격계 임상증상. 단, 말초신경 병변에 의한 통증(nerve root signature)은 LMN 징후의 일종으로 파행처럼 보일 수 있어 주의가 필요합니다.</li>
          <li><strong>실조:</strong> 끌고 다니는(dragging) 형태로 신경계 임상증상이며 아래 3종으로 구분합니다.</li>
        </ul>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>구분</th><th>특징</th><th>병변 위치</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>고유감각성 실조<br />(Proprioceptive/Sensory Ataxia)</td>
                <td>발등을 끌거나(knuckling), 다리가 서로 꼬임(crossing over), 흔들거림</td>
                <td>말초신경~척수~뇌간~전뇌 (고유감각 경로 전 구간)</td>
              </tr>
              <tr>
                <td>전정성 실조<br />(Vestibular Ataxia)</td>
                <td>선회운동(circling), 구르는 듯한 쓰러짐(rolling)</td>
                <td>말초 또는 중추(뇌간/소뇌) 전정계 — 병변에 동측성</td>
              </tr>
              <tr>
                <td>소뇌성 실조<br />(Cerebellar Ataxia)</td>
                <td>거리측정 이상(dysmetria), 과잉동작(hypermetria), 의도전율. 고유자세반응은 정상인 경우가 많음</td>
                <td>소뇌 (Cerebellum)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="guide-note">※ 선회 운동(Circling)은 전뇌성 병변, 전정계 병변 모두 병변측으로 <strong>동측성</strong>으로 나타납니다. 좁게 도는 선회는 전정질환, 넓게 도는 선회는 전뇌 병변과 흔히 연관됩니다.</p>
      </section>

      <section className="guide-section">
        <h4>5. 불수의운동 (Involuntary Movements)</h4>
        <ul className="guide-list">
          <li><strong>Resting Tremor:</strong> 안정 시에도 나타나는 떨림.</li>
          <li><strong>Intentional Tremor:</strong> 목표 지향적 동작 시 심해지는 떨림 → 소뇌 병변 시사.</li>
          <li><strong>Epileptic Seizure (경련/발작):</strong> 전뇌 병변 시사.</li>
          <li><strong>Myoclonus:</strong> 반복되는 리듬성 근육수축(규칙적인 떨림 증상) → 뇌염/척수염(Encephalitis/Myelitis) 등에서 관찰.</li>
          <li><strong>Myotonia:</strong> 움직임 이후 근이완이 지연되며 불규칙한 수축이 일어남 → 근육 질환.</li>
          <li><strong>Head Bobbing/Swing/Titubation:</strong> 시상(Thalamus) 관련 이상운동.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h4>6. 뇌신경(Cranial Nerve) 검사</h4>
        <p>
          뇌는 대뇌·간뇌·중뇌·소뇌·교·연수로 구분되며, 이 중 중뇌·교·연수를 묶어 뇌줄기(Brainstem)라 부릅니다. 12쌍의 뇌신경 중 1번(후각)은 대뇌, 2번(시각)은 간뇌에서, 나머지 3~12번은 뇌줄기에서 기시합니다.
        </p>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>유형</th><th>해당 뇌신경</th></tr>
            </thead>
            <tbody>
              <tr><td>감각신경 (Sensory)</td><td>CN 1, 2, 8</td></tr>
              <tr><td>운동신경 (Motor)</td><td>CN 3, 4, 6, 11, 12</td></tr>
              <tr><td>혼합신경 (Mixed)</td><td>CN 5, 7, 9, 10</td></tr>
              <tr><td>부교감(자율)신경 포함</td><td>CN 3, 7, 9, 10</td></tr>
            </tbody>
          </table>
        </div>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>신경</th><th>기능</th><th>기능장애의 증상</th></tr>
            </thead>
            <tbody>
              <tr><td>I 후각신경</td><td>감각 - 후각</td><td>무후각증, 저후각증</td></tr>
              <tr><td>II 시신경</td><td>감각 - 시각</td><td>시각소실(완전 또는 부분)</td></tr>
              <tr><td>III 동안신경</td><td>운동 - 외측안구근, 동공수축(부교감)</td><td>안검하수, 사시(복외측), 축동, 빛에 무반응인 고정된 동공</td></tr>
              <tr><td>IV 활차신경</td><td>운동 - 안구 등쪽경근</td><td>사시(배외측)</td></tr>
              <tr><td>V 삼차신경</td><td>감각 - 얼굴 피부 / 운동 - 저작근</td><td>안면 과감각증·저감각증, 양측성 턱 처짐, 측두근 위축</td></tr>
              <tr><td>VI 외전신경</td><td>운동 - 외측곧은근, 안구뒷당김근</td><td>내측 사시, 안구 뒷당김 불능</td></tr>
              <tr><td>VII 안면신경</td><td>운동 - 표정근 / 감각 - 혀 앞쪽 2/3</td><td>귀·입술 처짐, 눈꺼풀 닫기 불능, 혀 저감각증, 눈물생산 감소</td></tr>
              <tr><td>VIII 전정와우신경</td><td>감각 - 청각·균형</td><td>청각상실/손상, Vestibular syndrome</td></tr>
              <tr><td>IX 설인신경</td><td>감각 - 인두, 혀 뒤쪽 / 운동 - 인두</td><td>연하곤란, 토출</td></tr>
              <tr><td>X 미주신경</td><td>감각 - 후두·인두·복강흉강내장 / 운동 - 후두·인두</td><td>연하곤란, 짖는 소리 변화, 심장·위장관계 증상</td></tr>
              <tr><td>XI 부신경</td><td>운동 - 등세모근</td><td>목 근육 위축</td></tr>
              <tr><td>XII 설하신경</td><td>운동 - 혀</td><td>혀의 마비와 위축</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>주요 반사 검사 경로</strong></p>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>검사</th><th>수입 (Afferent)</th><th>중추 경로</th><th>수출 (Efferent)</th><th>확인 내용</th></tr>
            </thead>
            <tbody>
              <tr><td>협박 반응 (Menace)</td><td>CN II</td><td>전뇌·소뇌·뇌줄기</td><td>CN VII</td><td>위협 자극에 눈 깜빡임/회피</td></tr>
              <tr><td>눈꺼풀 반사 (Palpebral)</td><td>CN V</td><td>뇌줄기</td><td>CN VII</td><td>내안각 자극 시 눈 깜빡임</td></tr>
              <tr><td>동공 빛 반사 (PLR)</td><td>CN II</td><td>뇌줄기</td><td>CN III</td><td>빛 자극 시 양측 동공 수축</td></tr>
              <tr><td>각막 반사 (Corneal)</td><td>CN V</td><td>뇌줄기</td><td>CN VI, VII</td><td>각막 자극 시 안구 후퇴 + 눈 감김</td></tr>
              <tr><td>전정안구반사 (VOR/Doll's eye)</td><td>CN VIII</td><td>뇌줄기</td><td>CN III, IV, VI</td><td>고개 움직일 때 안구진탕 유발</td></tr>
              <tr><td>안면감각 검사</td><td>CN V</td><td>뇌줄기</td><td>CN VII</td><td>안면 자극 시 눈 깜빡임/안면 움직임</td></tr>
              <tr><td>구역 반사 (Gag)</td><td>CN IX, X</td><td>뇌줄기</td><td>CN IX, X</td><td>인두부 자극 시 수축</td></tr>
              <tr><td>하악신경 운동기능</td><td>-</td><td>뇌줄기</td><td>CN V</td><td>턱 벌림 시 저작근 저항</td></tr>
              <tr><td>혀 운동기능</td><td>-</td><td>연수</td><td>CN XII</td><td>혀의 움직임</td></tr>
              <tr><td>시각적 위치 검사 (Visual Placing)</td><td>CN II</td><td>전뇌·소뇌·뇌줄기</td><td>운동신경</td><td>테이블 가장자리 접근 시 전지를 뻗음</td></tr>
            </tbody>
          </table>
        </div>
        <p className="guide-note">※ 협박 반응은 반사(reflex)가 아닌 반응(response)입니다. 시각 정보가 대뇌 후두엽 시각중추에서 인지된 뒤 안면신경 반응으로 이어지므로, 시신경·안면신경 이상뿐 아니라 전뇌 시각경로 어디의 병변으로도 소실될 수 있습니다.</p>

        <p><strong>안구진탕(Nystagmus)</strong></p>
        <ul className="guide-list">
          <li><strong>생리적(정상) 안구진탕:</strong> 머리가 도는 방향으로 안구가 리듬감 있게 움직임(Doll's eye). 소실 시 전정계 또는 CN 3·4·6 이상 의심.</li>
          <li><strong>수직(Vertical):</strong> 중추신경계 병변 의심.</li>
          <li><strong>수평(Horizontal):</strong> 말초신경계 병변 의심.</li>
          <li><strong>Positional:</strong> 비정상 자세에서 유발. 말초신경계 병변과 관련된다고 알려져 있으나 민감도는 높지 않음.</li>
        </ul>
        <p className="guide-note">※ 사시(Strabismus)는 CN 3·4·6 중 마비된 신경이 지배하는 근육의 <strong>반대 방향</strong>으로 안구가 치우치는 형태로 나타납니다.</p>
      </section>

      <section className="guide-section">
        <h4>7. 자세 반응 검사 (Postural Reactions)</h4>
        <p>
          말초신경부터 대뇌까지 전 구간의 기능(고유수용기 → 척수 → 대뇌 인지 → 운동신경 출력)이 포함된 종합 검사입니다. 고유감각 자세반응과 도약반응(Hopping)에서 정상 소견을 보이면 나머지 검사는 생략 가능합니다.
        </p>
        <ul className="guide-list">
          <li><strong>Knuckling (고유자세반응):</strong> 발등을 지면에 접촉시켰을 때 정상 위치로 되돌리는지 확인. 대뇌·척수·말초 기능이 모두 포함된 검사.</li>
          <li><strong>Hopping (도약반응):</strong> 한쪽 다리에만 체중을 싣고 좌우로 밀어 반응 확인. 반응이 느리거나 잘못된 위치로 가거나 <strong>끌려가면 C6-T2 문제</strong>, <strong>과하게 반응하면 소뇌 문제</strong>를 시사.</li>
          <li><strong>Hemi-walking (반걸음 반응):</strong> 한쪽 전후지로 걷는 능력 평가. 편측부전마비(hemiparesis) 평가에 상대적으로 유용.</li>
          <li><strong>Wheelbarrow (손수레 반응):</strong> 후지를 들어 전지만으로 체중 지지 후 전진 유도. 전지의 쇠약과 보행실조 평가에 사용.</li>
          <li><strong>Extensor Postural Thrust (펴짐근 자세밀기):</strong> 어깨를 들었다가 내리며 후지가 펴지는지, 착지 후 뒤로 밀어내는지 확인. 피질척수로·전정소뇌로 이상 시 비정상. <strong className="guide-warn">척추 창상이나 추간판탈출증(IVDD) 등 척추 불안정성이 의심되면 시행 금지.</strong></li>
          <li><strong>Visual/Tactile Placing (발딛기 반응):</strong> 시각적 검사는 테이블 가장자리에 접촉 없이도 전지를 뻗는지, 비시각적 검사는 발등이 가장자리에 닿는 즉시 발을 올리는지 확인.</li>
        </ul>
        <p className="guide-note">※ 국소화 원칙: 말초신경·척수·연수(Medulla)·뇌교(Pons) 병변은 <strong>동측(Ipsilateral)</strong>에, 전뇌(Forebrain)·중뇌(Midbrain) 병변은 <strong>반대측(Contralateral)</strong>에 자세 반응 이상이 나타납니다. 단독으로는 정밀한 국소화가 어려워 다른 소견과 함께 종합 판단합니다.</p>
      </section>

      <section className="guide-section">
        <h4>8. 척수의 기능적 구획과 예후</h4>
        <p>척수 단면에서 섬유 다발은 바깥쪽부터 안쪽까지 순서대로 압박에 노출되며, 안쪽일수록(심부일수록) 예후가 불량합니다.</p>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>섬유(바깥→안쪽 순)</th><th>기능</th><th>압박 진행 시 소견</th><th>예후</th></tr>
            </thead>
            <tbody>
              <tr><td>Proprioception</td><td>고유감각</td><td>고유자세반응 이상</td><td>Good</td></tr>
              <tr><td>Voluntary Motor</td><td>수의운동</td><td>부전마비, 마비</td><td>Fair</td></tr>
              <tr><td>Superficial Pain</td><td>표재통각</td><td>피부감각 소실</td><td>Fair</td></tr>
              <tr><td>Deep Pain</td><td>심부통각</td><td>심부통증 소실</td><td>Poor</td></tr>
            </tbody>
          </table>
        </div>
        <p className="guide-note">※ 심부통증 반응이 소실되었다면 척수의 바깥부터 가장 안쪽(심부통각로)까지 넓은 영역에 병변이 있다는 뜻이므로, 그렇지 않은 경우보다 예후가 나쁩니다.</p>
      </section>

      <section className="guide-section">
        <h4>9. 척수 병변의 국소화 (Neurolocalization)</h4>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>병변 위치</th><th>전지 (Thoracic)</th><th>후지 (Pelvic)</th></tr>
            </thead>
            <tbody>
              <tr><td>뇌 (Brain)</td><td>UMN</td><td>UMN</td></tr>
              <tr><td>C1-5</td><td>UMN</td><td>UMN</td></tr>
              <tr><td>C6-T1 (C6-T2)</td><td>LMN</td><td>UMN</td></tr>
              <tr><td>T2-L3 (T3-L3)</td><td>Normal</td><td>UMN</td></tr>
              <tr><td>L4-S3</td><td>Normal</td><td>LMN</td></tr>
              <tr><td>Polyradiculopathy/Polyneuropathy</td><td>LMN</td><td>LMN</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h4>10. UMN vs LMN 징후 감별</h4>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>구분</th><th>LMN 부전마비</th><th>UMN 부전마비</th></tr>
            </thead>
            <tbody>
              <tr><td>자세</td><td>체중 지지 어려움, 관절 과굴곡으로 웅크린 자세</td><td>대개 정상(마비 시 제외), 비정상 사지 위치(knuckling, 벌어짐, 모아짐, 꼬임)</td></tr>
              <tr><td>걸음걸이</td><td>보폭이 짧음, 주저앉는 경향</td><td>뻣뻣하고 실조성 보행, 지연된 걸음 내딛기</td></tr>
              <tr><td>운동기능</td><td>이완성 부전마비/마비</td><td>강직성 부전마비/마비</td></tr>
              <tr><td>척수 분절 반사</td><td>저하~소실</td><td>정상~항진</td></tr>
              <tr><td>안정 시 근긴장도</td><td>저하~소실</td><td>정상~항진</td></tr>
              <tr><td>사지 수동 굴곡/신전</td><td>저항 감소</td><td>약간의 저항</td></tr>
              <tr><td>근위축</td><td>이르고 심한 신경성 위축</td><td>늦고 경미한 불용성 위축</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h4>11. 척수 반사 검사 (Spinal Reflex Tests)</h4>
        <p>각 반사는 항진·정상·저하·소실로 판단하며, 병변 국소화에 활용합니다.</p>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr><th>검사</th><th>평가 부위/분절</th><th>방법 및 정상 반응</th></tr>
            </thead>
            <tbody>
              <tr><td>Flexor(Withdrawal) Reflex</td><td>전지 C6-T1 / 후지 L4-S3</td><td>발가락을 꼬집으면 다리를 굽힘. 활용도가 가장 높은 검사</td></tr>
              <tr><td>Extensor Carpi Radialis</td><td>C7-T2</td><td>상완 근위부 타진 시 발목이 펴짐</td></tr>
              <tr><td>Triceps Reflex</td><td>C6-T1</td><td>타진 시 팔꿈치 굽힘 또는 이두근 수축</td></tr>
              <tr><td>Patella Reflex</td><td>L4-L6</td><td>슬개골 인대 타진 시 다리가 펴짐. 반응이 명확해 활용 빈도가 높음</td></tr>
              <tr><td>Cranial Tibial Reflex</td><td>L6-S1</td><td>앞쪽 경골 근위부 타진 시 발목이 굽음</td></tr>
              <tr><td>Cutaneous Trunci (Panniculus)</td><td>T2-L4, 운동경로 C8-T1</td><td>등쪽 피부를 꼬집으면 등 피부가 움찔. 반응 없는 지점의 2개 앞쪽 척추에 병변 추정, 완전 소실 시 C8-T1 손상 의심</td></tr>
              <tr><td>Perineal Reflex</td><td>S1-S3</td><td>회음부 자극 시 꼬리 굽힘 + 항문 괄약근 수축</td></tr>
            </tbody>
          </table>
        </div>
        <p className="guide-note">※ 회피반사(flexor reflex)와 심부통증반응(deep pain perception)은 혼동하기 쉽지만 다른 검사입니다. 회피반사는 통증 인지 이전의 척수 반사이고, 심부통증반응은 뼈/관절을 강하게 자극했을 때 <strong>머리를 돌리거나 짖거나 물려는</strong> 등 통증을 의식적으로 인지한 행동까지 확인해야 정상으로 판정합니다.</p>
      </section>

      <section className="guide-section">
        <h4>12. 응급 상황 판단 (Deep Pain)</h4>
        <p>
          후지 마비 환자에서 심부 통증 감각(Deep Pain Perception)의 소실은 매우 불량한 예후를 의미하며, 즉각적인 외과적 개입이 필요할 수 있는 응급 상황입니다. 심부통증 경로는 척수 백질의 가장 깊은 곳에 위치하므로, 이 반응이 소실되었다는 것은 척수의 바깥쪽부터 안쪽까지 넓은 영역에 병변이 있다는 뜻입니다.
        </p>
      </section>

      <div className="guide-reference">
        <p>※ 참고 문헌: Dewey CW, da Costa RC, eds. Practical Guide to Canine and Feline Neurology. 3rd ed.; Merck/MSD Veterinary Manual - The Neurologic Examination of Animals; 이한림, 최수영. 신경계 검사: 척수 1·2, 뇌신경검사 1·2. VETIS Vol.11-14, 이안동물영상의학센터.</p>
      </div>

      <style>{`
        .neuro-guide-content h4 {
          font-size: 1.1rem;
          color: #1e293b;
          margin: 1.5rem 0 0.75rem;
          font-weight: 700;
        }
        .neuro-guide-content h4:first-child {
          margin-top: 0;
        }
        .guide-section p {
          margin-bottom: 1rem;
        }
        .guide-list {
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .guide-list li {
          margin-bottom: 0.5rem;
          position: relative;
        }
        .guide-note {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }
        .guide-warn {
          color: #b91c1c;
        }
        .guide-table-wrap {
          overflow-x: auto;
          margin-bottom: 1.25rem;
        }
        .guide-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          min-width: 480px;
        }
        .guide-table th, .guide-table td {
          border: 1px solid #e2e8f0;
          padding: 8px 10px;
          text-align: left;
          vertical-align: top;
          line-height: 1.4;
        }
        .guide-table th {
          background: #f1f5f9;
          color: #1e293b;
          font-weight: 700;
          white-space: nowrap;
        }
        .guide-reference {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.8rem;
          color: #94a3b8;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default NeuroGuide;
