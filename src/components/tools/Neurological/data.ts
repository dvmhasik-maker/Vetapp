import { Symptom } from './types';

export const symptomData: Record<string, Symptom[]> = {
  consciousness: [
    { id: '의식_이상', text: '의식 이상\n(Stupor/Coma/Depression)', base: ['전뇌', '뇌간'] }
  ],
  eyeMenace: [
    { id: '눈_왼쪽위협반사소실', text: '왼쪽 위협반사 소실/저하\n(Menace Response Deficit)', cross: ['전뇌'], ipsi: ['소뇌'], isMenaceFail: true },
    { id: '눈_오른쪽위협반사소실', text: '오른쪽 위협반사 소실/저하\n(Menace Response Deficit)', cross: ['전뇌'], ipsi: ['소뇌'], isMenaceFail: true }
  ],
  eyePLR: [
    { id: '눈_왼쪽PLR구심성소실', text: '왼쪽 눈 직접 PLR 소실, 간접 정상\n(Afferent Defect - CN II)' },
    { id: '눈_오른쪽PLR구심성소실', text: '오른쪽 눈 직접 PLR 소실, 간접 정상\n(Afferent Defect - CN II)' },
    { id: '눈_왼쪽PLR원심성소실', text: '왼쪽 눈 직접+간접 PLR 모두 소실\n(Efferent Defect - CN III)', ipsi: ['뇌간'] },
    { id: '눈_오른쪽PLR원심성소실', text: '오른쪽 눈 직접+간접 PLR 모두 소실\n(Efferent Defect - CN III)', ipsi: ['뇌간'] }
  ],
  eyeNystagmusCentral: [
    { id: '눈_수직안진', text: '수직 안구진탕\n(Vertical Nystagmus)', base: ['뇌간', '소뇌'] },
    { id: '눈_체위성안진_방향전환', text: '자세를 바꾸면 방향이 바뀌는 안진\n(Positional Nystagmus, Direction-Changing)', base: ['뇌간', '소뇌'] }
  ],
  eyeNystagmusLateral: [
    { id: '눈_왼쪽안진', text: '왼쪽으로 빠르게 움직이는 안진\n(Horizontal/Rotary Nystagmus - Fast Phase Left)', cross: ['뇌간', '소뇌'] },
    { id: '눈_오른쪽안진', text: '오른쪽으로 빠르게 움직이는 안진\n(Horizontal/Rotary Nystagmus - Fast Phase Right)', cross: ['뇌간', '소뇌'] }
  ],
  postureDirectional: [
    { id: '자세_왼쪽머리돌림', text: '왼쪽 머리 돌림\n(Head Turn)', ipsi: ['전뇌'] },
    { id: '자세_오른쪽머리돌림', text: '오른쪽 머리 돌림\n(Head Turn)', ipsi: ['전뇌'] },
    { id: '자세_왼쪽기운목', text: '왼쪽으로 머리 기울임 (귀 처짐)\n(Head Tilt)', ipsi: ['뇌간', '소뇌'] },
    { id: '자세_오른쪽기운목', text: '오른쪽으로 머리 기울임 (귀 처짐)\n(Head Tilt)', ipsi: ['뇌간', '소뇌'] },
    { id: '자세_왼쪽안면비대칭', text: '왼쪽 안면 처짐 (눈꺼풀/입술/귀)\n(Facial Asymmetry)', cross: ['전뇌'], ipsi: ['뇌간'] },
    { id: '자세_오른쪽안면비대칭', text: '오른쪽 안면 처짐 (눈꺼풀/입술/귀)\n(Facial Asymmetry)', cross: ['전뇌'], ipsi: ['뇌간'] }
  ],
  postureSymmetric: [
    { id: '자세_머리프레싱', text: '벽에 머리 대기\n(Head Pressing)', base: ['전뇌'] },
    { id: '자세_사지신전강직_의식저하', text: '사지 신전강직 + 의식 저하/혼수\n(Decerebrate Rigidity)', base: ['뇌간'] },
    { id: '자세_후궁반장_전지강직', text: '머리·목 젖혀짐(후궁반장) + 앞다리 강직 + 의식 있음\n(Decerebellate Rigidity)', base: ['소뇌'] },
    { id: '자세_쉬프셔링턴', text: '앞다리는 뻣뻣하게 펴지고 뒷다리는 마비됨\n(Schiff-Sherrington)', base: ['T3-L3'] },
    { id: '자세_사지벌어짐', text: '다리를 넓게 벌리고 섬\n(Wide-based Stance)', base: ['소뇌'] },
    { id: '자세_평지자세', text: '뒷다리 비절까지 바닥에 닿게 섬 (평발 자세)\n(Plantigrade Posture)', base: ['L6-S3'] }
  ],
  gaitDirectional: [
    { id: '걸음_왼쪽선회_좁게', text: '왼쪽 좁은 선회\n(Tight Circling - Vestibular)', ipsi: ['뇌간', '소뇌'] },
    { id: '걸음_오른쪽선회_좁게', text: '오른쪽 좁은 선회\n(Tight Circling - Vestibular)', ipsi: ['뇌간', '소뇌'] },
    { id: '걸음_왼쪽선회_넓게', text: '왼쪽 넓은 선회\n(Wide Circling - Forebrain)', ipsi: ['전뇌'] },
    { id: '걸음_오른쪽선회_넓게', text: '오른쪽 넓은 선회\n(Wide Circling - Forebrain)', ipsi: ['전뇌'] },
    { id: '걸음_왼쪽전정실조', text: '왼쪽 전정성 실조 (기울며 쓰러짐)\n(Vestibular Ataxia)', ipsi: ['뇌간', '소뇌'] },
    { id: '걸음_오른쪽전정실조', text: '오른쪽 전정성 실조 (기울며 쓰러짐)\n(Vestibular Ataxia)', ipsi: ['뇌간', '소뇌'] }
  ],
  gaitSymmetric: [
    { id: '걸음_사지마비', text: '사지 마비/부전\n(Tetraparesis)', base: ['뇌간', 'C1-C5', 'C6-T2'] },
    { id: '걸음_의도전율', text: '움직이려 할 때 심해지는 떨림\n(Intention Tremor)', base: ['소뇌'] },
    { id: '걸음_소뇌성실조', text: '소뇌성 실조 (과잉동작/휘청거림)\n(Cerebellar Ataxia)', base: ['소뇌'] },
    { id: '걸음_후지마비', text: '후지 마비/부전\n(Paraparesis)', base: ['T3-L3', 'L4-L6', 'L6-S3'] },
    { id: '걸음_일어섬_어려움', text: '일어서기 어려움\n(Difficulty Standing)', base: ['L6-S3'] },
    { id: '걸음_뻣뻣_과장', text: '뻣뻣하고 과장된 걸음\n(Stiff/Exaggerated Gait)', base: ['골격근'] }
  ],
  posturalReactionDirectional: [
    { id: '반응_왼쪽앞다리CP소실', text: '왼쪽 앞다리 고유자세반응 소실/저하\n(Forelimb CP Deficit)', cross: ['전뇌'], ipsi: ['뇌간', 'C1-C5', 'C6-T2', '소뇌'] },
    { id: '반응_오른쪽앞다리CP소실', text: '오른쪽 앞다리 고유자세반응 소실/저하\n(Forelimb CP Deficit)', cross: ['전뇌'], ipsi: ['뇌간', 'C1-C5', 'C6-T2', '소뇌'] },
    { id: '반응_왼쪽뒷다리CP소실', text: '왼쪽 뒷다리 고유자세반응 소실/저하\n(Hindlimb CP Deficit)', cross: ['전뇌'], ipsi: ['뇌간', 'C1-C5', 'C6-T2', 'T3-L3', 'L4-L6', 'L6-S3', '소뇌'] },
    { id: '반응_오른쪽뒷다리CP소실', text: '오른쪽 뒷다리 고유자세반응 소실/저하\n(Hindlimb CP Deficit)', cross: ['전뇌'], ipsi: ['뇌간', 'C1-C5', 'C6-T2', 'T3-L3', 'L4-L6', 'L6-S3', '소뇌'] },
    { id: '반응_왼쪽도약지연', text: '왼쪽 도약반응 지연/끌림\n(Hopping Deficit - C6-T2)', cross: ['전뇌'], ipsi: ['C6-T2'] },
    { id: '반응_오른쪽도약지연', text: '오른쪽 도약반응 지연/끌림\n(Hopping Deficit - C6-T2)', cross: ['전뇌'], ipsi: ['C6-T2'] },
    { id: '반응_왼쪽도약과잉', text: '왼쪽 도약반응 과잉동작\n(Hopping Hypermetria - Cerebellar)', ipsi: ['소뇌'] },
    { id: '반응_오른쪽도약과잉', text: '오른쪽 도약반응 과잉동작\n(Hopping Hypermetria - Cerebellar)', ipsi: ['소뇌'] }
  ],
  posturalReactionGeneral: [
    { id: '반응_사지전체CP소실', text: '사지 전체 고유자세반응 소실\n(General CP Deficit)', base: ['뇌간', 'C1-C5', 'C6-T2'] }
  ],
  misc: [
    { id: '기타_발작', text: '경련/발작\n(Seizure)', base: ['전뇌'] },
    { id: '기타_편측무시', text: '한쪽만 무시하는 증상 (편측무시증후군)\n(Hemi-inattention)', base: ['전뇌'] },
    { id: '기타_호흡곤란', text: '호흡 곤란\n(Respiratory Distress)', base: ['뇌간', 'C1-C5', 'C6-T2'] },
    { id: '기타_심장이상', text: '심장 리듬/자율신경 이상\n(Cardiac/Autonomic)', base: ['뇌간'] },
    { id: '기타_연하곤란', text: '연하 곤란\n(Dysphagia)', base: ['뇌간'] },
    { id: '기타_호너', text: '호너증후군 의심\n(Horner\'s Syndrome)', base: ['C1-C5', 'C6-T2'] },
    { id: '기타_요정체', text: '요정체\n(UMN Bladder)', base: ['C1-C5', 'C6-T2', 'T3-L3', 'L4-L6'] },
    { id: '기타_요실금', text: '요실금\n(LMN Bladder)', base: ['L6-S3'] },
    { id: '기타_변실금', text: '변실금\n(Fecal Incontinence)', base: ['L6-S3'] }
  ]
};
