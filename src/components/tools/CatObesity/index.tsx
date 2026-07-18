import { ChevronLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCatObesityLogic } from './useCatObesityLogic';
import CatObesityForm from './CatObesityForm';
import CatObesityHeroCard from './CatObesityHeroCard';
import CatObesityGuideline from './CatObesityGuideline';
import CollapsibleInfo from '../../common/CollapsibleInfo';
import { GuideIntro, GuideSteps, GuideFormula, GuideNote, GuideStyles } from '../../common/GuideKit';
import ToolArticleLink from '../../common/ToolArticleLink';
import AdSlot from '../../common/AdSlot';
import { useSEO } from '../../common/useSEO';

const CatObesity = () => {
  useSEO('고양이 비만도(FBMI) 계산기', '몸통 둘레와 뒷다리 길이만 입력하면 고양이의 체지방률(FBMI)을 계산해 저체중·정상체중·과체중을 바로 확인할 수 있습니다.');
  const {
    chestInput, setChestInput,
    legInput, setLegInput,
    result, saveImg, resultRef
  } = useCatObesityLogic();

  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/" className="back-btn-prominent">
          <ChevronLeft size={18} /> 대시보드
        </Link>
      </div>

      <header className="page-header-tool-white">
        <div className="icon">🐱</div>
        <div>
          <h1>고양이 비만도(FBMI) 계산기</h1>
          <p>몸통 둘레·뒷다리 길이로 체지방률(FBMI)을 계산해 비만도를 평가합니다</p>
        </div>
      </header>

      <div className="tool-content-standard">
        <ToolArticleLink
          articlePath="/articles/cat-obesity"
          description="FBMI 측정 원리, BCS와의 관계, 저체중 감별 진단과 비만 관리 프로토콜을 정리한 가이드입니다."
        />

        <div className="cat-report-wrap" ref={resultRef}>
          <div className="layout-grid-cat">
            <CatObesityForm
              chestInput={chestInput}
              setChestInput={setChestInput}
              legInput={legInput}
              setLegInput={setLegInput}
            />

            <CatObesityHeroCard result={result} />
          </div>

          {result && <CatObesityGuideline result={result} />}
        </div>

        {result && (
          <button className="btn-secondary-action" onClick={saveImg}>
            <Camera size={20} /> 분석 결과 리포트 이미지 저장
          </button>
        )}

        <CollapsibleInfo title="측정 방법 안내 (FBMI)">
          <GuideIntro>
            고양이를 <strong>서 있는 자세</strong>로, 고개는 들고 네 다리 모두 바닥과 수직이 되도록 한 상태에서 측정합니다.
          </GuideIntro>

          <GuideSteps
            steps={[
              {
                icon: '📏',
                title: '몸통(가슴) 둘레 측정',
                desc: (
                  <>9번째 갈비뼈가 위치한 부위(팔꿈치 뒤쪽 부근)의 둘레를 줄자로 측정합니다. 찾기 어렵다면 가슴 중 <strong>가장 두꺼운 곳</strong>의 둘레로 대신 측정해도 됩니다.</>
                )
              },
              {
                icon: '📐',
                title: '뒷다리 길이 측정',
                desc: <><strong>무릎(슬관절)</strong>에서 시작해 <strong>뒷발꿈치(비절)</strong>까지의 길이를 측정합니다.</>
              },
              {
                icon: '🧮',
                title: 'FBMI 자동 계산',
                desc: '두 측정값을 아래 공식에 대입해 체지방률(FBMI, %)을 계산하고 등급을 판정합니다.'
              }
            ]}
          />

          <GuideFormula>
            FBMI(%) = ((몸통 둘레 ÷ 0.7062) − 뒷다리 길이) ÷ 0.9156 − 뒷다리 길이
          </GuideFormula>

          <GuideNote>
            본 도구는 참고용 스크리닝 지표이며, 최종 비만 진단은 BCS(신체충실지수) 등 다른 임상 소견과 함께 수의사가 판단해야 합니다.
          </GuideNote>

          <GuideStyles />
        </CollapsibleInfo>

        <AdSlot className="mt-8" />
      </div>

      <style>{`
        .tool-content-standard {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cat-report-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .layout-grid-cat {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .layout-grid-cat { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default CatObesity;
