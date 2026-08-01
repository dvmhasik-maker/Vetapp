import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEchoLogic } from './useEchoLogic';
import EchoForm from './EchoForm';
import EchoResultView from './EchoResultView';
import ToolArticleLink from '../../common/ToolArticleLink';
import AdSlot from '../../common/AdSlot';
import { useSEO } from '../../common/useSEO';

const Echocardiography: React.FC = () => {
  useSEO('심초음파', '강아지와 고양이 심장초음파 데이터를 입력하여 좌심방/대동맥 비율(LA/Ao) 및 주요 심장 지표를 분석합니다.');
  const {
    species,
    setSpecies,
    patientInfo,
    setPatientInfo,
    dogInput,
    setDogInput,
    catInput,
    setCatInput,
    result,
    resultRef,
    calculateEcho,
    saveImg
  } = useEchoLogic();

  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/" className="back-btn-prominent">
          <ChevronLeft size={18} /> 대시보드
        </Link>
      </div>

      <div className="page-header-tool-white">
        <div className="icon">❤️</div>
        <div>
          <h1>반려동물 심초음파 분석기</h1>
          <p>심장 초음파 지표 계산 및 해석</p>
        </div>
      </div>

      <ToolArticleLink
        articlePath="/articles/echocardiography"
        description="LA/Ao·LVIDd·FS·EPSS 정상 범위와 ACVIM MMVD·HCM 병기 결정 기준을 정리한 가이드입니다."
      />

      <div className="tool-content-standard">

        <EchoForm
          species={species}
          setSpecies={setSpecies}
          patientInfo={patientInfo}
          setPatientInfo={setPatientInfo}
          dogInput={dogInput}
          setDogInput={setDogInput}
          catInput={catInput}
          setCatInput={setCatInput}
          calculateEcho={calculateEcho}
          saveImg={saveImg}
          result={Boolean(result)}
        />

        {result && (
          <EchoResultView
            result={result}
            resultRef={resultRef}
          />
        )}

        <AdSlot className="mt-8" />
      </div>

      <style>{`
        .tool-content-standard {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Echocardiography;
