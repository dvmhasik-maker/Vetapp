import { ChevronLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCatObesityLogic } from './useCatObesityLogic';
import CatObesityForm from './CatObesityForm';
import CatObesityHeroCard from './CatObesityHeroCard';
import CatObesityGuideline from './CatObesityGuideline';
import { GuideIntro, GuideSteps, GuideFormula, GuideNote, GuideStyles } from '../../common/GuideKit';
import GuideFAQ from '../../common/GuideFAQ';
import ToolArticleLink from '../../common/ToolArticleLink';
import ToolGuideSection from '../../common/ToolGuideSection';
import AdSlot from '../../common/AdSlot';
import { useSEO } from '../../common/useSEO';

const CatObesity = () => {
  useSEO('고양이비만도', '몸통 둘레와 뒷다리 길이만 입력하면 고양이의 체지방률(FBMI)을 계산해 저체중·정상체중·과체중을 바로 확인할 수 있습니다.');
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

        <AdSlot className="mt-8" />

        <ToolGuideSection reviewedDate="2026-09-08">
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

          <GuideFAQ
            items={[
              {
                q: 'FBMI와 BCS(신체충실지수) 중 어떤 지표를 우선해야 하나요?',
                a: 'FBMI는 줄자 측정값만으로 체지방률을 추정하는 스크리닝 도구로, 촉진 기반의 BCS보다 재현성이 높은 편입니다. 다만 근육량이 극단적으로 많거나 적은 개체에서는 오차가 커질 수 있어, 두 지표를 함께 활용하고 차이가 크면 촉진 소견(갈비뼈·허리선·복부 처짐)을 우선하는 것이 안전합니다.',
              },
              {
                q: '장모종 고양이도 정확하게 측정할 수 있나요?',
                a: '털 길이 때문에 줄자 측정 시 실제 체형보다 두껍게 측정될 수 있습니다. 털을 살짝 눌러가며 몸통 둘레를 측정하거나, 가능하다면 짧은 털 부위를 기준으로 삼는 것이 오차를 줄이는 데 도움이 됩니다.',
              },
              {
                q: '뒷다리 길이는 어느 자세에서 측정해야 하나요?',
                a: '고양이가 자연스럽게 서 있는 자세에서 무릎 관절이 과도하게 굽혀지지 않도록 측정하는 것이 중요합니다. 다리가 굽은 상태로 측정하면 실제보다 짧게 측정되어 FBMI가 과대평가될 수 있습니다.',
              },
            ]}
          />

          <GuideStyles />
        </ToolGuideSection>
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
