import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { Species, Point, MainPoints, MainPointKey, Step, HeartSizeResult } from './types';
import { dist, cumulativeDistances, vertebraCount, round1 } from './calc';

const initialMainPoints: MainPoints = {
  carina: null,
  apex: null,
  saStart: null,
  saEnd: null,
  laBorder: null
};

const stepSequence = (skipVLAS: boolean): Step[] => [
  'carina',
  'apex',
  'shortAxis',
  ...(skipVLAS ? [] : (['laBorder'] as Step[])),
  'vertebrae'
];

export const useHeartSizeLogic = () => {
  const [species, setSpecies] = useState<Species>('dog');
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [skipVLAS, setSkipVLAS] = useState(false);
  const [locked, setLocked] = useState(false);
  const [mainPoints, setMainPoints] = useState<MainPoints>(initialMainPoints);
  const [vertebrae, setVertebrae] = useState<Point[]>([]);
  const [step, setStep] = useState<Step>('adjust');
  const [result, setResult] = useState<HeartSizeResult | null>(null);

  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  const resetPoints = useCallback(() => {
    setMainPoints(initialMainPoints);
    setVertebrae([]);
    setSkipVLAS(false);
    setLocked(false);
    setStep('adjust');
    setResult(null);
  }, []);

  const loadImage = useCallback((file: File) => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setImageSrc(url);
    resetPoints();
  }, [resetPoints]);

  const confirmPosition = useCallback(() => {
    if (step !== 'adjust') return;
    setLocked(true);
    setStep('carina');
  }, [step]);

  const toggleLock = useCallback(() => setLocked(l => !l), []);

  const L = mainPoints.carina && mainPoints.apex ? dist(mainPoints.carina, mainPoints.apex) : null;
  const S = mainPoints.saStart && mainPoints.saEnd ? dist(mainPoints.saStart, mainPoints.saEnd) : null;
  const LA = !skipVLAS && mainPoints.carina && mainPoints.laBorder
    ? dist(mainPoints.carina, mainPoints.laBorder)
    : null;

  const requiredDistance = useMemo(() => {
    const candidates = [L, S, LA].filter((v): v is number => v !== null);
    return candidates.length > 0 ? Math.max(...candidates) : null;
  }, [L, S, LA]);

  const cumulative = useMemo(() => cumulativeDistances(vertebrae), [vertebrae]);

  const canFinishVertebrae = useMemo(() => {
    if (requiredDistance === null) return false;
    return vertebraCount(requiredDistance, cumulative) !== null;
  }, [requiredDistance, cumulative]);

  // carina/apex/laBorder 처럼 탭 한 번으로 찍는 점들 전용 (단축은 drawShortAxis로 별도 처리)
  // 주의: setStep 업데이터 함수 안에서 다른 setState를 호출하지 않는다 — StrictMode가 업데이터를
  // 이중 호출하면 그 안의 부수효과(setVertebrae 등)도 두 번 실행되어 점이 중복 추가된다.
  const addPoint = useCallback((p: Point) => {
    if (step === 'vertebrae') {
      setVertebrae(v => [...v, p]);
      return;
    }
    if (step === 'adjust' || step === 'shortAxis' || step === 'done') return;

    const seq = stepSequence(skipVLAS);
    const idx = seq.indexOf(step);
    const key = step as MainPointKey;
    setMainPoints(mp => ({ ...mp, [key]: p }));
    setStep(seq[idx + 1]);
  }, [step, skipVLAS]);

  const drawShortAxis = useCallback((start: Point, end: Point) => {
    if (step !== 'shortAxis') return;
    setMainPoints(mp => ({ ...mp, saStart: start, saEnd: end }));
    const seq = stepSequence(skipVLAS);
    setStep(seq[seq.indexOf('shortAxis') + 1]);
  }, [step, skipVLAS]);

  const skipVLASStep = useCallback(() => {
    if (step !== 'laBorder') return;
    setSkipVLAS(true);
    setStep('vertebrae');
  }, [step]);

  const undoLast = useCallback(() => {
    if (step === 'adjust') return;

    // 결과 계산 후 실행 취소: 'done'은 stepSequence에 없는 단계라 그대로 seq.indexOf를 타면
    // prevKey가 undefined가 되어 setStep(undefined)로 화면이 깨졌다 — vertebrae 단계로 되돌린다.
    if (step === 'done') {
      setResult(null);
      setStep('vertebrae');
      return;
    }

    if (step === 'carina') {
      setLocked(false);
      setStep('adjust');
      return;
    }

    if (step === 'vertebrae' && vertebrae.length > 0) {
      setVertebrae(v => v.slice(0, -1));
      return;
    }

    const seq = stepSequence(skipVLAS);
    const idx = seq.indexOf(step);
    const prevKey = seq[idx - 1];

    if (prevKey === 'shortAxis') {
      setMainPoints(mp => ({ ...mp, saStart: null, saEnd: null }));
    } else if (prevKey !== 'vertebrae') {
      setMainPoints(mp => ({ ...mp, [prevKey as MainPointKey]: null }));
    }
    setStep(prevKey);
  }, [step, skipVLAS, vertebrae.length]);

  const invalidateResult = useCallback(() => {
    setResult(null);
    setStep(s => (s === 'done' ? 'vertebrae' : s));
  }, []);

  const updateMainPoint = useCallback((key: MainPointKey, p: Point) => {
    setMainPoints(mp => ({ ...mp, [key]: p }));
    invalidateResult();
  }, [invalidateResult]);

  const updateVertebra = useCallback((index: number, p: Point) => {
    setVertebrae(v => v.map((pt, i) => (i === index ? p : pt)));
    invalidateResult();
  }, [invalidateResult]);

  const calculate = useCallback(() => {
    if (L === null || S === null || requiredDistance === null) return;
    const lVertebrae = vertebraCount(L, cumulative);
    const sVertebrae = vertebraCount(S, cumulative);
    if (lVertebrae === null || sVertebrae === null) return;

    const vhs = round1(lVertebrae + sVertebrae);
    let vlas: number | null = null;
    if (LA !== null) {
      const laVertebrae = vertebraCount(LA, cumulative);
      vlas = laVertebrae !== null ? round1(laVertebrae) : null;
    }

    setResult({
      species,
      vhs,
      vlas,
      lVertebrae: round1(lVertebrae),
      sVertebrae: round1(sVertebrae),
      vertebraCount: vertebrae.length,
      date: new Date().toLocaleDateString('ko-KR')
    });
    setStep('done');
  }, [L, S, LA, requiredDistance, cumulative, species, vertebrae.length]);

  return {
    species, setSpecies,
    imageSrc, loadImage,
    skipVLAS, skipVLASStep,
    locked, toggleLock, confirmPosition,
    mainPoints, vertebrae,
    step,
    L, S, LA,
    requiredDistance, cumulative, canFinishVertebrae,
    addPoint, drawShortAxis, undoLast, resetPoints,
    updateMainPoint, updateVertebra,
    calculate, result
  };
};
