import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAtopyLogic } from './useAtopyLogic';
import AtopyForm from './components/AtopyForm';
import AtopyResultView from './components/AtopyResultView';
import ToolArticleLink from '../../common/ToolArticleLink';
import AdSlot from '../../common/AdSlot';
import { useSEO } from '../../common/useSEO';

const Atopy: React.FC = () => {
  useSEO(
    '아토피',
    '수의사를 위한 견종별 개 아토피성 피부염(CAD) 호발부위 분석기. 임상 진단 시 감별 진단 및 보호자 교육용 자료.'
  );

  const {
    sortedBreeds,
    selectedBreed,
    selectBreed,
    resultRef
  } = useAtopyLogic();

  // Scroll to result when a breed is selected
  useEffect(() => {
    if (selectedBreed && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedBreed]);

  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/" className="back-btn-prominent">
          <ChevronLeft size={18} /> 대시보드
        </Link>
      </div>

      <div className="page-header-tool-white">
        <div className="icon">🐾</div>
        <div>
          <h1>견종별 아토피 호발부위 분석기</h1>
          <p>Breed-Specific Canine Atopic Dermatitis (CAD) Predilection Sites</p>
        </div>
      </div>

      <ToolArticleLink
        articlePath="/articles/atopy"
        description="Favrot 기준, 제외 진단 프로토콜, 아포퀠·사이토포인트·면역요법 선택 전략을 정리한 가이드입니다."
      />

      <div className="tool-content">

        <AtopyForm 
          breeds={sortedBreeds}
          selectedId={selectedBreed?.id || null}
          onSelect={selectBreed}
        />

        {selectedBreed && (
          <AtopyResultView 
            breed={selectedBreed}
            resultRef={resultRef}
          />
        )}

        <AdSlot className="mt-8" />
      </div>

      <style>{`
        .tool-content {
          margin: 0 auto;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default Atopy;
