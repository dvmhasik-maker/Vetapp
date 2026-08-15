import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Species, PatientInfo, DogInput, CatInput, EchoResult, EchoResultItem } from './types';
import { saveImageFile, buildSaveFilename } from '../../common/saveImageFile';

const initialPatientInfo: PatientInfo = {
  name: '',
  breed: '',
  sex: '',
  age: ''
};

const initialDogInput: DogInput = {
  weight: '', LVOT_len: '', LVIDd: '', LVIDs: '', FS: '', EPSS: '',
  LA_Ao: '', MPA_Ao: '', RPAD: '', TAPSE: '', PA_vel: '', PV_AT: '', PV_ET: '', PR_vel: '', MV_E: '', DTE: '',
  MV_A: '', MCO: '', MV_Eprime: '', MV_Sprime: '', MR_Vol: '',
  MR_V1V3: '', TR_vel: '', LVOT_VTI: '', AV_vel: '', LV_ET: '',
  LV_PEP: '', HR: '', IVRT: ''
};

const initialCatInput: CatInput = {
  weight: '', LVform: [], SEC: '', D2_IVSd: '', D2_LVPWd: '', LVOT_len: '', LVOT_turb: '',
  SAM: '', D2_LVwall: '', PM: '', M_IVSd: '', M_LVIDd: '', M_LVPWd: '', M_LVIDs: '',
  FS: '', EPSS: '', LA_len: '', LA_Ao: '', M_LAFS: '', PA_turb: '', PA_vel: '', PR_vel: '',
  MV_E: '', MV_A: '', MV_Eprime: '', MV_Aprime: '', MV_Sprime: '', MR_vel: '',
  MR_VTI: '', TR_vel: '', LVOT_VTI: '', HR: '', AV_vel: '', ET: '', PEP: ''
};

export const useEchoLogic = () => {
  const [species, setSpecies] = useState<Species>('dog');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>(initialPatientInfo);
  const [dogInput, setDogInput] = useState<DogInput>(initialDogInput);
  const [catInput, setCatInput] = useState<CatInput>(initialCatInput);
  const [result, setResult] = useState<EchoResult | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);

  const v = (val: string) => {
    const n = parseFloat(val);
    return isNaN(n) ? 0 : n;
  };

  const calculateDog = () => {
    const weight = v(dogInput.weight);
    const lvotLen = v(dogInput.LVOT_len);
    const lvotVTI = v(dogInput.LVOT_VTI);
    const r = lvotLen * 10 / 2 * 0.1;
    const SV = Math.PI * r * r * lvotVTI;
    const CO = SV * v(dogInput.HR);
    const LVIDDN = (weight > 0) ? v(dogInput.LVIDd) / Math.pow(weight, 0.294) : 0;
    const mrVol = v(dogInput.MR_Vol);
    const mrFrac = ((mrVol + SV) > 0) ? (mrVol / (mrVol + SV)) * 100 : 0;
    const mvE = v(dogInput.MV_E);
    const ivrt = v(dogInput.IVRT);
    const EIVRT = (ivrt > 0) ? (mvE * 100) / ivrt : 0;
    const lvET = v(dogInput.LV_ET);
    const PEPET = (lvET > 0) ? v(dogInput.LV_PEP) / lvET : 0;
    const TEI = (lvET > 0) ? (v(dogInput.MCO) - lvET) / lvET : 0;
    const mrV1V3 = v(dogInput.MR_V1V3);
    const dPdt = (mrV1V3 > 0) ? 32000 / mrV1V3 : 0;
    const mvA = v(dogInput.MV_A);
    const EA = (mvA > 0) ? mvE / mvA : 0;
    const mvEp = v(dogInput.MV_Eprime);
    const EEp = (mvEp > 0) ? (mvE * 100) / mvEp : 0;
    const tapse = v(dogInput.TAPSE);
    const tapseIdx = (weight > 0 && tapse > 0) ? tapse / Math.pow(weight, 0.284) : 0;
    const pvAT = v(dogInput.PV_AT);
    const pvET = v(dogInput.PV_ET);
    const atEtRatio = (pvET > 0) ? pvAT / pvET : 0;

    const normLVIDd = (weight > 0) ? 1.53 * Math.pow(weight, 0.294) : null;
    const normLVIDs = (weight > 0) ? 0.95 * Math.pow(weight, 0.315) : null;
    const normSV = (weight > 0) ? 2 * weight : null;
    const normCO = (weight > 0) ? 250 * weight : null;

    const items: EchoResultItem[] = [
      { group: 'Volume Overload', name: 'LVIDDN', val: LVIDDN, normal: 1.7, range: null, inv: false, lo: '정상', hi: 'DMVD 의심' },
      { group: 'Volume Overload', name: 'MV E wave', val: mvE, normal: null, range: [0.7, 1.0], inv: false, lo: 'LV 충만기압 감소', hi: 'LV 충만기압 증가 (1.25이상→DMVD)' },
      { group: 'Volume Overload', name: 'MR Fraction(PISA)', val: mrFrac, normal: null, range: [5, 33], inv: false, lo: '정상', mid: '경미한 MR', hi: 'MR 존재' },
      { group: 'Volume Overload', name: 'E/IVRT ratio', val: EIVRT, normal: 1.25, range: null, inv: false, lo: '정상', hi: 'LV 충만기압 증가 (2.5이상→DMVD)' },
      { group: 'Volume Overload', name: 'LA/Ao ratio', val: v(dogInput.LA_Ao), normal: 1.6, range: null, inv: false, lo: '정상', hi: 'LA 비대' },
      
      { group: 'Myocardial Failure', name: 'LVIDd', val: v(dogInput.LVIDd), normal: normLVIDd, range: null, inv: false, lo: '정상', hi: 'Preload 증가 / 수축능력 저하' },
      { group: 'Myocardial Failure', name: 'LVIDs', val: v(dogInput.LVIDs), normal: normLVIDs, range: null, inv: false, lo: '정상', hi: 'Afterload 증가 & 수축능력 저하' },
      { group: 'Myocardial Failure', name: 'FS (%)', val: v(dogInput.FS), normal: 25, range: null, inv: true, lo: '수축능력 저하 (FS 감소)', hi: '정상' },
      { group: 'Myocardial Failure', name: 'EPSS', val: v(dogInput.EPSS), normal: 0.65, range: null, inv: false, lo: '정상', hi: '수축능력 저하 (EPSS 증가)' },
      { group: 'Myocardial Failure', name: 'LV PEP/ET', val: PEPET, normal: 0.41, range: null, inv: false, lo: '정상', hi: '수축능력 저하' },
      { group: 'Myocardial Failure', name: 'Tei : LV IMP', val: TEI, normal: 0.48, range: null, inv: false, lo: '정상', hi: '수축능력 저하' },
      { group: 'Myocardial Failure', name: 'dP/dt', val: dPdt, normal: 1200, range: null, inv: true, lo: '수축능력 저하', hi: '정상' },
      { group: 'Myocardial Failure', name: "MV S' wave", val: v(dogInput.MV_Sprime), normal: 7.6, range: null, inv: true, lo: '심실 수축 기능 저하', hi: '정상' },
      { group: 'Myocardial Failure', name: 'SV', val: SV, normal: normSV, range: null, inv: true, lo: '심박출량 저하', hi: '정상 이상' },
      { group: 'Myocardial Failure', name: 'CO', val: CO, normal: normCO, range: null, inv: true, lo: '심박출량 저하', hi: '정상 이상' },
      
      { group: 'Diastolic Failure', name: 'MV E/A ratio', val: EA, normal: null, range: [1.0, 2.0], inv: false, lo: '이완기능부전 stage 1', hi: '이완기능부전 stage 3' },
      { group: 'Diastolic Failure', name: 'DTE', val: v(dogInput.DTE), normal: null, range: [60, 100], inv: false, lo: '이완기능부전 stage 3', hi: '이완기능부전 stage 1' },
      { group: 'Diastolic Failure', name: "MV E/E' ratio", val: EEp, normal: 12.0, range: null, inv: false, lo: '정상', hi: '이완기능부전 stage 1b 이상' },
      { group: 'Diastolic Failure', name: 'IVRT', val: ivrt, normal: null, range: [41, 65], inv: false, lo: '이완기능부전 stage 3', hi: '이완기능부전 stage 1' },
      
      { group: 'Pulmonary Hypertension', name: 'MPA/Ao ratio', val: v(dogInput.MPA_Ao), normal: 1.15, range: null, inv: false, lo: '정상', hi: 'PAH 의심' },
      // RPAD index 35%: 연구별 편차 있음 (21~38% 범위 보고, 예: Visser 2016 <29.5%가 TRPG>50mmHg 예측) — 현재값은 해당 범위 내
      { group: 'Pulmonary Hypertension', name: 'RPAD index', val: v(dogInput.RPAD), normal: 35, range: null, inv: true, lo: 'PAH 의심', hi: '정상' },
      // AT/ET ratio: 정상견 median≈0.43, PH견 median≈0.30 (Serres/RLD 코호트 등); ≤0.25는 PH 특이도 100%, >0.42는 PH 배제 가능성 높음
      { group: 'Pulmonary Hypertension', name: 'PV AT/ET ratio', val: atEtRatio, normal: null, range: [0.25, 0.42], inv: true, lo: 'PAH 강력히 의심 (특이도 높음)', mid: 'PAH 가능성 있음 (추가 소견 확인)', hi: '정상 (PAH 배제 가능성 높음)' },
      { group: 'Pulmonary Hypertension', name: 'TR 속도', val: v(dogInput.TR_vel), normal: null, range: [2.8, 3.4], inv: false, lo: '정상', mid: 'PAH 중등도 가능성 (추가 소견 확인)', hi: 'PAH 고확률 (수축기)' },
      { group: 'Pulmonary Hypertension', name: 'PR 속도', val: v(dogInput.PR_vel), normal: 2.0, range: null, inv: false, lo: '정상', hi: 'PAH (이완기) / PDA' },
      // TAPSE/BW^0.284 < 3.23: PH견에서 생존기간 단축과 독립적 연관 (Visser 등)
      { group: 'Pulmonary Hypertension', name: 'TAPSE index (BW 보정)', val: tapseIdx, normal: 3.23, range: null, inv: true, lo: '우심실 수축기능 저하 (PH 예후 불량)', hi: '정상' },

      // AS/PS: peak velocity로 진단 후 modified Bernoulli(ΔP=4V²)로 경증(≤50)/중등도(50~80)/중증(>80 mmHg) 등급화
      { group: 'Valvular Stenosis', name: 'AV 속도 (대동맥협착)', val: v(dogInput.AV_vel), normal: null, range: [2.5, 4.47], inv: false, lo: '정상', mid: 'AS 의심 (경도~중등도)', hi: '중증 AS 의심' },
      { group: 'Valvular Stenosis', name: 'PV 속도 (폐동맥협착)', val: v(dogInput.PA_vel), normal: null, range: [2.0, 4.47], inv: false, lo: '정상', mid: 'PS 의심 (경도~중등도)', hi: '중증 PS 의심' },
    ];

    setResult({
      species: 'dog',
      patientInfo,
      items,
      date: new Date().toLocaleDateString('ko-KR')
    });
  };

  const calculateCat = () => {
    const weight = v(catInput.weight);
    const catThresh: any = {
      D2_IVSd: { max: 6 }, D2_LVPWd: { max: 6 }, D2_LVwall: { max: 6 },
      M_IVSd: { max: 0.6 }, M_LVPWd: { max: 0.6 }, M_LVIDd: { max: 1.8 }, M_LVIDs: { max: 0.9 },
      FS: { min: 45 }, EPSS: { max: 0.4 }, LA_len: { max: 1.6 }, LA_Ao: { max: 1.8 }, M_LAFS: { min: 24 },
      PA_vel: { max: 1.1 }, PR_vel: { max: 2.0 }, MV_E: { max: 0.8 }, MV_A: { max: 0.6 },
      MV_EA: { min: 1.0, max: 2.0 }, MV_Eprime: { min: 7.2 }, MV_Aprime: { min: 2.9 },
      MV_Sprime: { min: 4.4 }, MV_EAp: { min: 1.0 }, MV_EEp: { max: 8.07 },
      MR_vel: { max: 1.5 }, TR_vel: { max: 2.5 }, AV_vel: { max: 1.3 },
      ET: { min: 116 }, PEP: { min: 44 }, PEP_ET: { max: 0.41 },
      SV: weight > 0 ? { min: 1 * weight, max: 2 * weight } : null,
      CO: weight > 0 ? { min: (200 * weight) / 1000, max: (300 * weight) / 1000 } : null
    };

    // Auto-calcs
    const mvE = v(catInput.MV_E);
    const mvA = v(catInput.MV_A);
    const mvEp = v(catInput.MV_Eprime);
    const mvAp = v(catInput.MV_Aprime);
    const lvotLen = v(catInput.LVOT_len);
    const lvotVTI = v(catInput.LVOT_VTI);
    const hr = v(catInput.HR);
    const mrVTI = v(catInput.MR_VTI);
    const pep = v(catInput.PEP);
    const et = v(catInput.ET);

    const mvEA = mvA > 0 ? mvE / mvA : 0;
    const mvEEp = mvEp > 0 ? (mvE / mvEp) * 100 : 0;
    const mvEAp = mvAp > 0 ? mvEp / mvAp : 0;
    const pepET = et > 0 ? pep / et : 0;

    const r = lvotLen * 10 / 2 * 0.1;
    const SV = (lvotLen && lvotVTI) ? Math.PI * r * r * lvotVTI : 0;
    const CO = (SV * hr) / 1000; // L/min 으로 변환
    const mrFrac = (mrVTI && SV) ? (mrVTI / (mrVTI + SV)) * 100 : 0;

    const currentValues: any = {
      ...catInput,
      weight,
      MV_EA: mvEA,
      MV_EEp: mvEEp,
      MV_EAp: mvEAp,
      PEP_ET: pepET,
      SV,
      CO,
      MR_Frac: mrFrac
    };

    let diagnosis = 'Normal';
    const hcmIds = ['D2_IVSd', 'D2_LVPWd', 'D2_LVwall', 'M_IVSd', 'M_LVPWd'];
    for (const id of hcmIds) {
      if (v(currentValues[id]) > catThresh[id].max) { diagnosis = 'HCM'; break; }
    }

    if (diagnosis !== 'HCM') {
      const wallNormal = hcmIds.every(id => !v(currentValues[id]) || v(currentValues[id]) <= catThresh[id].max);
      const laAoVal = v(currentValues.LA_Ao);
      const laAoHigh = laAoVal > catThresh.LA_Ao.max;
      const eaHigh = mvEA >= 2;
      if (laAoHigh || eaHigh) {
        if (wallNormal && laAoHigh && eaHigh) diagnosis = 'RCM';
        else diagnosis = 'RCM 의심';
      }

      const lvidSHigh = v(currentValues.M_LVIDs) > catThresh.M_LVIDs.max;
      const epssHigh = v(currentValues.EPSS) > catThresh.EPSS.max;
      if (lvidSHigh && epssHigh) diagnosis = 'DCM 의심 (burned-out HCM/RCM 감별 필요)';
    }

    const samPresent = catInput.SAM === '있음';
    const mrVelHigh = v(catInput.MR_vel) >= 3;
    const isHOCM = (diagnosis === 'HCM') && (samPresent || mrVelHigh);

    let dxLabel = diagnosis;
    if (diagnosis === 'HCM') {
      const pmNote = (catInput.PM && catInput.PM !== 'Normal') ? `PM ${catInput.PM} ` : '';
      const formPrefix = (catInput.LVform.length ? catInput.LVform.join(', ') + ' ' : '') + pmNote;
      dxLabel = formPrefix + (isHOCM ? 'HOCM' : 'HCM');
    }

    const getRowStage = (id: string, val: number): string[] => {
      if (isNaN(val) || val === 0) return [];
      switch (id) {
        case 'D2_IVSd': case 'D2_LVPWd': case 'D2_LVwall':
          if (val >= 7) return ['b2', 'c'];
          if (val >= 6) return ['b1'];
          break;
        case 'M_IVSd': case 'M_LVPWd':
          if (val >= 0.7) return ['b2', 'c'];
          if (val >= 0.6) return ['b1'];
          break;
        case 'LA_len':
          return val >= 1.6 ? ['b2', 'c'] : ['b1'];
        case 'LA_Ao':
          return val >= 1.8 ? ['b2', 'c'] : ['b1'];
        case 'M_LAFS':
          return val <= 24 ? ['b2', 'c'] : ['b1'];
        case 'MV_EA':
          return val >= 1 ? ['b2', 'c'] : ['b1'];
        case 'MV_Eprime':
          if (val < 7.2) return ['b1', 'b2', 'c'];
          break;
        case 'MV_EEp':
          return val >= 8.07 ? ['b2', 'c'] : ['b1'];
      }
      return [];
    };

    const stageRows = [
      { id: 'D2_IVSd', label: '2D: IVSd', b1: '≥ 6', b2: '≥ 7', c: '≥ 7' },
      { id: 'D2_LVPWd', label: '2D: LVPWd', b1: '≥ 6', b2: '≥ 7', c: '≥ 7' },
      { id: 'D2_LVwall', label: '2D: LV wall', b1: '≥ 6', b2: '≥ 7', c: '≥ 7' },
      { id: 'M_IVSd', label: 'M: IVSd', b1: '≥ 0.6', b2: '≥ 0.7', c: '≥ 0.7' },
      { id: 'M_LVPWd', label: 'M: LVPWd', b1: '≥ 0.6', b2: '≥ 0.7', c: '≥ 0.7' },
      { id: 'LA_len', label: 'LA 길이', b1: '< 1.6', b2: '≥ 1.6', c: '≥ 1.6' },
      { id: 'LA_Ao', label: 'LA/Ao ratio', b1: '< 1.8', b2: '≥ 1.8', c: '≥ 1.8' },
      { id: 'M_LAFS', label: 'M: LAFS', b1: '> 24', b2: '≤ 24', c: '≤ 24' },
      { id: 'MV_EA', label: 'MV E/A ratio', b1: '< 1', b2: '≥ 1', c: '≥ 1' },
      { id: 'MV_Eprime', label: "MV E' wave", b1: '< 7.2', b2: '< 7.2', c: '< 7.2' },
      { id: 'MV_EEp', label: "MV E/E' ratio", b1: '< 8.07', b2: '≥ 8.07', c: '≥ 8.07' },
    ].map(r => {
      const val = v(currentValues[r.id]);
      return { ...r, measured: currentValues[r.id], thresh: catThresh[r.id], matched: getRowStage(r.id, val) };
    });

    // Aggregate final stage
    const counts = { b1: 0, b2: 0, c: 0 };
    stageRows.forEach(r => {
      r.matched.forEach(s => {
        if (s === 'b1') counts.b1++;
        if (s === 'b2') counts.b2++;
        if (s === 'c') counts.c++;
      });
    });

    let finalStage = '';
    const maxCount = Math.max(counts.b1, counts.b2, counts.c);
    if (maxCount > 0) {
      const winners = [];
      if (counts.b1 === maxCount) winners.push('B1');
      if (counts.b2 === maxCount) winners.push('B2');
      if (counts.c === maxCount) winners.push('C');
      finalStage = winners.join(' / ');
    }

    const extraRows = [
      { id: 'FS', label: 'FS (%)' }, { id: 'EPSS', label: 'EPSS' },
      { id: 'M_LVIDd', label: 'M: LVIDd' }, { id: 'M_LVIDs', label: 'M: LVIDs' },
      { id: 'MV_E', label: 'MV E wave' }, { id: 'MV_A', label: 'MV A wave' },
      { id: 'MV_Sprime', label: "MV S' wave" }, { id: 'MV_Aprime', label: "MV A' wave" },
      { id: 'MV_EAp', label: "MV E'/A' ratio" }, { id: 'MR_vel', label: 'MR 속도' },
      { id: 'MR_Frac', label: 'MR Fraction(PISA)' }, { id: 'TR_vel', label: 'TR 속도' },
      { id: 'PR_vel', label: 'PR 속도' }, { id: 'PA_vel', label: 'PV 속도' },
      { id: 'AV_vel', label: 'AV 속도' }, { id: 'ET', label: 'ET' },
      { id: 'PEP', label: 'PEP' }, { id: 'PEP_ET', label: 'PEP/ET' },
      { id: 'SV', label: 'SV (mL)' }, { id: 'CO', label: 'CO (L/min)' },
    ].map(r => ({ ...r, measured: currentValues[r.id], thresh: catThresh[r.id] }));

    setResult({
      species: 'cat',
      patientInfo,
      items: [],
      catDiagnosis: {
        label: dxLabel,
        thrombosisRisk: catInput.SEC === '있음' ? '⚠️ 혈전 발생 가능성 높음' : catInput.SEC === '없음' ? '✅ 혈전 발생 가능성 낮음' : '',
        lvotTurbulence: catInput.LVOT_turb === '있음' ? '⚠️ LVOT Turbulence 있음' : '',
        samPresent: catInput.SAM === '있음' ? '⚠️ SAM (LVOT 폐쇄) 있음' : '',
        pvTurbulence: catInput.PA_turb === '있음' ? '⚠️ PV Turbulence 있음' : '',
        finalStage
      },
      catStageRows: stageRows,
      catExtraRows: extraRows,
      date: new Date().toLocaleDateString('ko-KR')
    });
  };

  const calculateEcho = () => {
    if (species === 'dog') calculateDog();
    else calculateCat();
    
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const saveImg = () => {
    if (!resultRef.current) return;

    html2canvas(resultRef.current, { background: '#ffffff', scale: 2, useCORS: true, logging: false } as any)
      .then((canvas) => {
        saveImageFile(canvas.toDataURL('image/jpeg', 0.9), buildSaveFilename('심초음파분석', patientInfo.name));
      });
  };

  return {
    species, setSpecies,
    patientInfo, setPatientInfo,
    dogInput, setDogInput,
    catInput, setCatInput,
    result, setResult,
    resultRef, captureRef,
    calculateEcho,
    saveImg
  };
};
