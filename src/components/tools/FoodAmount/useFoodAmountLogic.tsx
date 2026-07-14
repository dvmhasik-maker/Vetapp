import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { ResultData, Product } from './types';
import { statusConfig, brandProductPreset } from './data';
import { saveImageFile, buildSaveFilename } from '../../common/saveImageFile';

const formatFeedingUnitCount = (count: number, unit: string): string => {
  const quarters = Math.round(count * 4);
  if (quarters <= 0) return `0${unit}`;
  const whole = Math.floor(quarters / 4);
  const remainder = quarters % 4;
  const fractionText: Record<number, string> = { 1: '1/4', 2: '1/2', 3: '3/4' };
  if (remainder === 0) return `${whole}${unit}`;
  if (whole === 0) return `${fractionText[remainder]}${unit}`;
  return `${whole}과 ${fractionText[remainder]}${unit}`;
};

export const useFoodAmountLogic = () => {
  const [species, setSpecies] = useState<'dog' | 'cat'>('dog');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petStatus, setPetStatus] = useState<number>(1.6);
  const [brand, setBrand] = useState('royal_canin');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);

  const captureZoneRef = useRef<HTMLDivElement>(null);
  const resultColRef = useRef<HTMLDivElement>(null);

  const visibleProducts = brandProductPreset[species][brand] || [];

  useEffect(() => {
    setPetStatus(species === 'dog' ? 1.6 : 1.2);
  }, [species]);

  useEffect(() => {
    const products = brandProductPreset[species][brand] || [];
    setSelectedProduct(products[0] || null);
  }, [species, brand]);

  const calculateNutrition = () => {
    const weight = parseFloat(petWeight);
    if (isNaN(weight) || weight <= 0) {
      alert("반려동물의 체중을 정확하게 입력해 주십시오.");
      return;
    }

    if (!selectedProduct) {
      alert("유효한 사료 제품을 선택해 주십시오.");
      return;
    }

    const productKcal = selectedProduct.kcal;
    const rer = species === 'dog' ? (weight * 30) + 70 : weight * 40;
    const der = rer * petStatus;
    const totalFoodG = der / productKcal;

    const activeStatusText = statusConfig[species].find(s => s.val === petStatus)?.text || "기타";
    const activeProductName = selectedProduct.name;
    const brandNameMap: Record<string, string> = {
      natural_balance: "내추럴발란스",
      healmedix: "닥터 힐메딕스",
      royal_canin: "로얄캐닌",
      velixer: "벨릭서",
      hills: "힐스"
    };

    let feedingUnitLabel: string;
    let feedingUnitSub: string;
    let feedingUnitValue: string;

    if (selectedProduct.form === 'wet' && selectedProduct.packageSizeG) {
      const unit = selectedProduct.unit || '캔';
      const unitCount = totalFoodG / selectedProduct.packageSizeG;
      feedingUnitLabel = `${unit} 환산`;
      feedingUnitSub = `1${unit} ${selectedProduct.packageSizeG}g 기준`;
      feedingUnitValue = formatFeedingUnitCount(unitCount, unit);
    } else {
      const paperCupConvert = totalFoodG / 75;
      feedingUnitLabel = "계량컵 환산";
      feedingUnitSub = "종이컵(약 75g) 기준";
      feedingUnitValue = `약 ${paperCupConvert.toFixed(1)} 컵`;
    }

    setResult({
      name: petName || "반려동물",
      der: Math.round(der),
      kcalPerG: productKcal.toFixed(2),
      foodG: Math.round(totalFoodG),
      profile: `${species === 'dog' ? '개(Canine)' : '고양이(Feline)'} / ${petAge || '미입력'} / ${weight.toFixed(2)} kg`,
      status: `${activeStatusText} [Factor: ${petStatus.toFixed(1)}]`,
      rer: Math.round(rer),
      foodInfo: `[${brandNameMap[brand]}] ${activeProductName}`,
      feedingUnitLabel,
      feedingUnitSub,
      feedingUnitValue,
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
    });

    if (window.innerWidth < 1024) {
      setTimeout(() => {
        resultColRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const exportToImage = () => {
    if (!captureZoneRef.current) return;
    html2canvas(captureZoneRef.current, { scale: 2.5, useCORS: true, backgroundColor: '#ffffff' } as any)
      .then((canvas: HTMLCanvasElement) => {
        saveImageFile(canvas.toDataURL('image/jpeg', 0.9), buildSaveFilename('정밀급여설계', petName));
      })
      .catch(() => alert("리포트 이미지 저장 중 시스템 오류가 발생했습니다."));
  };

  return {
    species,
    setSpecies,
    petName,
    setPetName,
    petAge,
    setPetAge,
    petWeight,
    setPetWeight,
    petStatus,
    setPetStatus,
    brand,
    setBrand,
    visibleProducts,
    selectedProduct,
    setSelectedProduct,
    result,
    captureZoneRef,
    resultColRef,
    calculateNutrition,
    exportToImage
  };
};
