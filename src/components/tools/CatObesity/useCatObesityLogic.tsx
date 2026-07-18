import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { saveImageFile, buildSaveFilename } from '../../common/saveImageFile';
import { CatObesityResult, ObesityCategory, ObesityBanner } from './types';

// FBMI(체지방률 %) = ((가슴둘레 / 0.7062) - 뒷다리길이) / 0.9156 - 뒷다리길이
function calcFbmi(chest: number, leg: number): number {
  return ((chest / 0.7062) - leg) / 0.9156 - leg;
}

function classify(fbmi: number): { category: ObesityCategory; label: string; banner: ObesityBanner } {
  if (fbmi < 15) {
    return {
      category: 'under',
      label: '저체중',
      banner: {
        theme: 'blue',
        icon: '⚠️',
        label: '저체중 (FBMI < 15%)',
        actions: [
          '급여량 및 급여 횟수 재평가, 필요 시 증량',
          '갑상선기능항진증·만성 신장질환·흡수불량·기생충 등 저체중을 유발하는 기저질환 감별 검사 고려',
          '2~4주 후 체중 및 FBMI 재측정으로 추이 확인'
        ],
        note: 'FBMI < 15% → 저체중 구간'
      }
    };
  }
  if (fbmi < 30) {
    return {
      category: 'normal',
      label: '정상체중',
      banner: {
        theme: 'green',
        icon: '✅',
        label: '정상체중 (FBMI 15~30% 미만)',
        actions: [
          '현재 급여량 및 체중 유지',
          '정기적인 체중·체형 모니터링 권장'
        ],
        note: 'FBMI 15% 이상 30% 미만 → 정상체중 구간'
      }
    };
  }
  if (fbmi < 42) {
    return {
      category: 'over',
      label: '과체중',
      banner: {
        theme: 'orange',
        icon: '📈',
        label: '과체중 (FBMI 30~42% 미만)',
        actions: [
          '체중 감량용 사료 및 급여량 조절 검토',
          '사냥 놀이 등으로 활동량 늘리기',
          '4주 간격으로 체중 및 FBMI 재측정 권장'
        ],
        note: 'FBMI 30% 이상 42% 미만 → 과체중 구간'
      }
    };
  }
  return {
    category: 'obese',
    label: '비만',
    banner: {
      theme: 'red',
      icon: '🔺',
      label: '비만 (FBMI ≥ 42%)',
      actions: [
        '목표 체중 설정 후 체중 감량 프로그램(전용 사료·급여량 산정) 시작',
        '당뇨병·관절질환·비뇨기질환 등 비만 관련 합병증 위험 적극 설명',
        '필요 시 기초 건강검진(혈액검사 등) 선행 권장',
        '2~4주 간격으로 체중 및 FBMI 재측정하며 감량 속도 모니터링'
      ],
      note: 'FBMI ≥ 42% → 비만 구간'
    }
  };
}

export const useCatObesityLogic = () => {
  const [chestInput, setChestInput] = useState('');
  const [legInput, setLegInput] = useState('');
  const [result, setResult] = useState<CatObesityResult | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chest = parseFloat(chestInput);
    const leg = parseFloat(legInput);

    if (isNaN(chest) || chest <= 0 || isNaN(leg) || leg <= 0 || leg >= chest) {
      setResult(null);
      return;
    }

    const fbmi = calcFbmi(chest, leg);
    const { category, label, banner } = classify(fbmi);

    setResult({ chest, leg, fbmi, category, categoryLabel: label, banner });
  }, [chestInput, legInput]);

  const saveImg = () => {
    if (!resultRef.current) return;
    html2canvas(resultRef.current, { background: '#f8fafc', scale: 2 } as any).then(canvas => {
      saveImageFile(canvas.toDataURL('image/jpeg', 0.9), buildSaveFilename('고양이비만도'));
    });
  };

  return {
    chestInput, setChestInput,
    legInput, setLegInput,
    result,
    resultRef, saveImg
  };
};
