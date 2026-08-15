import React, { useState, useRef } from 'react';
import { CushingMode, PatientInfo, CushingValues, CushingResult } from './types';
import html2canvas from 'html2canvas';
import { saveImageFile, buildSaveFilename } from '../../common/saveImageFile';

const initialPatientInfo: PatientInfo = { name: '', breed: '', sex: '', age: '' };
const initialValues: CushingValues = { food: null, pupd: null, cortisol: '' };

export const useCushingLogic = () => {
  const [mode, setMode] = useState<CushingMode>('acth');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>(initialPatientInfo);
  const [values, setValues] = useState<CushingValues>(initialValues);
  const [result, setResult] = useState<CushingResult | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPatientInfo({ ...patientInfo, [e.target.id.replace('pt_', '')]: e.target.value });
  };

  const setToxValue = (type: keyof CushingValues, val: any) => {
    setValues({ ...values, [type]: val });
  };

  const executeAnalysis = () => {
    const { food, pupd, cortisol: cortisolStr } = values;
    const cortisol = parseFloat(cortisolStr);

    if (!food) { alert('식욕 상태를 선택해 주세요.'); return; }
    if (!pupd) { alert('다음다뇨 여부를 선택해 주세요.'); return; }
    if (isNaN(cortisol) || cortisol < 0) { alert('코르티솔 값을 입력해 주세요.'); return; }

    const foodLabels = { dec: '감소', norm: '정상', inc: '증가' };
    const pupdLabels = { no: '없음', yes: '있음' };
    const rawSymptomLabel = `식욕: ${foodLabels[food]}, PU/PD: ${pupdLabels[pupd]}`;

    let clinCat: 'poor' | 'well' | 'hc';
    if (food === 'dec') {
      clinCat = 'poor';
    } else if (food === 'norm' && pupd === 'no') {
      clinCat = 'well';
    } else {
      clinCat = 'hc';
    }

    const today = new Date().toLocaleDateString('ko-KR');
    let analysisResult: CushingResult;

    if (mode === 'acth') {
      const clinLabelMap = {
        poor: `이상 증상 (${rawSymptomLabel})`,
        well: `잘 조절됨 (${rawSymptomLabel})`,
        hc: `Cushing 증상 잔존 (${rawSymptomLabel})`
      };
      
      let banner: CushingResult['banner'];
      if (clinCat === 'poor') {
        if (cortisol < 1.5) {
          banner = { theme: 'red', icon: '🚨', label: 'Trilostane 중단 (2~4주) · 부신피질기능저하증 가능성',
            actions: ['2~4주간 Trilostane 중단', '요독증 또는 고칼륨혈증 존재 시 0.9% NaCl IV + Glucocorticoid 투여', '한 달 후 재검사'],
            note: 'Post cortisol < 1.5 ug/dL + over-dosing signs → Discontinue trilostane 2-4 weeks; give 0.9% NaCl IV + glucocorticoid if azotemia/hyperkalemia present; recheck in 1 month',
            recheckTable: [
              { range: '< 1.5 ug/dL', action: '부신괴사', theme: 'red' },
              { range: '1.5–10 ug/dL', action: '투약 중단 → 1달 후 재검사, 이후 3달마다 재검사', theme: 'blue' },
              { range: '> 10 ug/dL', action: '식욕증가/PU·PD 확인 → 복용량 25~50% 감량 후 재투약', theme: 'orange' }
            ] };
        } else {
          banner = { theme: 'purple', icon: '🔍', label: 'Trilostane 중단 (5~7일) · 다른 원인 감별 필요',
            actions: ['5~7일간 Trilostane 중단', '부신피질기능저하증(Addison\'s disease) 가능성은 낮음', '다른 질환 및 합병증 감별 진단 시행 (합병증 가능성 있음)', '재검사'],
            note: 'Post cortisol ≥ 1.5 ug/dL + over-dosing signs → Discontinue trilostane 5-7 days; hypoadrenocorticism unlikely; investigate other diseases, possible complications; recheck' };
        }
      } else if (clinCat === 'well') {
        if (cortisol >= 1.5 && cortisol <= 5.5) {
          banner = { theme: 'green', icon: '✅', label: '현재 용량 유지',
            actions: ['현재 Trilostane 용량 유지', 'Post cortisol이 목표 범위 내 (1.5~5.5 ug/dL)', '증상 재발 여부 정기 모니터링 권장'],
            note: 'Well controlled + cortisol target range → Dosage unchanged' };
        } else if (cortisol < 1.5) {
          banner = { theme: 'orange', icon: '⚠️', label: '용량 감량 고려 (5~7일 휴약 후 25~50% 감량)',
            actions: ['임상적으로 잘 조절되고 있으나 cortisol이 목표보다 낮음 (과억제 가능성)', '5~7일간 Trilostane 휴약', '이후 25~50% 감량하여 2~4주 재투약', '2~4주 후 재검사'],
            note: 'Well controlled + cortisol < 1.5 ug/dL → Hold 5-7 days, then reduce dose 25-50%, recheck in 2-4 weeks',
            recheckTable: [
              { range: '< 1.5 ug/dL', action: '투약 중단 → 1달 후 재검사, 이후 3달마다 재검사', theme: 'blue' },
              { range: '1.5–5.5 ug/dL', action: '용량 그대로', theme: 'green' },
              { range: '> 5.5 ug/dL', action: '용량 그대로 · 재발여부(임상증상) 주의깊게 모니터', theme: 'orange' }
            ] };
        } else {
          banner = { theme: 'orange', icon: '⚠️', label: '용량 유지 · 재발 모니터링',
            actions: ['임상적으로 잘 조절되고 있으나 cortisol이 목표보다 높음', '현재 용량 유지', '증상 재발 여부 주의 깊게 모니터링', '증상 재발 시 용량 25~50% 증량 고려'],
            note: 'Well controlled + cortisol > 5.5 ug/dL → Dosage unchanged, monitor for recurrence' };
        }
      } else {
        if (cortisol <= 5.5) {
          banner = { theme: 'yellow', icon: '🔎', label: '증량 대신 재평가 · 작용시간 부족 가능성',
            actions: ['Cushing 증상은 잔존하나 cortisol은 목표 범위 이내 → 용량 증량은 권장되지 않음 (과억제 위험)', 'Trilostane 작용 시간이 짧을 가능성', 'Pre-trilostane ACTH 검사 또는 Pre-trilostane UCCR 검사 고려', '하루 용량을 나누어(BID) 투여하는 방법 고려', '2~4주 후 재평가'],
            note: 'HC signs + post cortisol ≤ 5.5 ug/dL → Do NOT increase dose; suspect short duration of action, consider split (BID) dosing or further testing' };
        } else {
          banner = { theme: 'red', icon: '🔺', label: '용량 증량 필요 (25~50%)',
            actions: ['Cushing 증상 잔존 + cortisol 목표 범위 초과', 'Trilostane 용량 25~50% 증량', '2~4주 후 재평가', '단, 바로 다음 재검에서는 추가 증량하지 말 것'],
            note: 'HC signs + post cortisol > 5.5 ug/dL → Increase dosage 25-50%, recheck in 2-4 weeks; do not increase further at the very next recheck' };
        }
      }

      analysisResult = { mode, patientInfo: { ...patientInfo }, clinCat, clinLabel: clinLabelMap[clinCat], cortisol, banner, date: today };
    } else {
      // Pre-Pill Mode
      const clinLabelMap = {
        poor: `이상 증상 (${rawSymptomLabel})`, // Handle if value remained from ACTH mode
        well: `Cushing 증상 소실 (${rawSymptomLabel})`,
        hc: `Cushing 증상 잔존 (${rawSymptomLabel})`
      };
      
      const pClinCat = (food === 'norm' && pupd === 'no') ? 'well' : (food === 'dec' ? 'poor' : 'hc');
      let banner: CushingResult['banner'];

      if (pClinCat === 'hc') {
        if (cortisol >= 5.5) {
          banner = { theme: 'red', icon: '🔺', label: '투여 빈도 또는 용량 증량 (25~50%)',
            actions: ['Cushing 증상이 잔존하고 Pre-pill cortisol ≥ 5.5 ug/dL', '투여 빈도 증가(SID→BID) 또는 용량 25~50% 증량 검토', '증량하여 10일 후 재평가'],
            note: 'HC signs present + pre-pill cortisol ≥ 5.5 ug/dL → Increase dosing frequency or increase dosage' };
        } else if (cortisol >= 1.5 && cortisol < 5.5) {
          banner = { theme: 'orange', icon: '🔄', label: '재평가 · 소량 증량 고려 (10~25%)',
            actions: ['Cushing 증상 잔존, cortisol이 중간 범위 (1.5 ~ 5.5 ug/dL)', '재평가 후 10~25% 소량 증량 고려', '증량하여 10일 후 재평가'],
            note: 'HC signs + pre-pill cortisol 1.5 ~ 5.5 ug/dL → Re-evaluate. Consider a small dosage increase' };
        } else {
          banner = { theme: 'purple', icon: '🔍', label: '재평가 · 소량 감량 고려 (10~25%)',
            actions: ['Cushing 증상이 있으나 Pre-pill cortisol이 낮음 (< 1.5 ug/dL)', '과용량 가능성 재평가', '10~25% 소량 감량 고려', '감량하여 10일 후 재평가'],
            note: 'HC signs + pre-pill cortisol < 1.5 ug/dL → Re-evaluate. Consider lower dosage' };
        }
      } else if (pClinCat === 'poor') {
        banner = { theme: 'purple', icon: '🔍', label: 'Trilostane 중단 · 다른 원인 감별 필요',
          actions: ['Trilostane 중단', '식욕 부진 등 이상 증상에 대한 정밀 검사 시행', '부신피질기능저하증 가능성 확인'],
          note: 'Poor sign + Pre-pill cortisol evaluation needed' };
      } else {
        if (cortisol === 0) {
          banner = { theme: 'red', icon: '🚨', label: '즉각적인 재평가 필요',
            actions: ['Pre-pill cortisol = 0 ug/dL', 'ACTH Stimulation Test (Pre & Post) 즉시 시행', 'Trilostane 중단 및 부신피질기능저하증 처치 고려'],
            note: 'pre-pill cortisol = 0 → Trilostane stop & ACTH stimulation test' };
        } else if (cortisol > 0 && cortisol <= 1.5) {
          banner = { theme: 'yellow', icon: '⚠️', label: '재평가 · 감량 고려 (10~25%)',
            actions: ['Cushing 증상 소실되었으나 Pre-pill cortisol이 낮음 (0 < Cortisol ≤ 1.5 ug/dL)', '과용량 가능성 평가', '10~25% 소량 감량 고려', '감량하여 10일 후 재평가'],
            note: 'HC resolved + pre-pill cortisol 0 < Cortisol ≤ 1.5 ug/dL → Re-evaluate. Consider lower dosage' };
        } else if (cortisol > 1.5 && cortisol <= 5.5) {
          banner = { theme: 'green', icon: '✅', label: '현재 용량 유지',
            actions: ['Cushing 증상 소실 + Pre-pill cortisol 목표 범위 내 (1.5 ~ 5.5 ug/dL)', '현재 Trilostane 용량 유지', '3개월 후 재평가'],
            note: 'HC resolved + pre-pill cortisol 1.5 ~ 5.5 ug/dL → Continue at current dosage' };
        } else {
          banner = { theme: 'orange', icon: '📈', label: '소량 증량 고려 (10~25%)',
            actions: ['Cushing 증상은 소실되었으나 Pre-pill cortisol이 목표보다 높음 (> 5.5 ug/dL)', '10~25% 소량 증량 고려', '증량하여 10일 후 재평가'],
            note: 'HC resolved + pre-pill cortisol > 5.5 ug/dL → Re-evaluate. Consider a small dosage increase' };
        }
      }

      analysisResult = { mode, patientInfo: { ...patientInfo }, clinCat: pClinCat, clinLabel: clinLabelMap[pClinCat], cortisol, banner, date: today };
    }

    setResult(analysisResult);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const saveImg = () => {
    if (!resultRef.current) return;
    html2canvas(resultRef.current, { background: '#f8fafc', scale: 2 } as any).then(canvas => {
      saveImageFile(canvas.toDataURL('image/jpeg', 0.9), buildSaveFilename('쿠싱분석', patientInfo.name));
    });
  };

  return {
    mode, setMode, patientInfo, setPatientInfo, values, setValues, result, setResult,
    resultRef, captureRef, handlePatientChange, setToxValue, executeAnalysis, saveImg
  };
};
