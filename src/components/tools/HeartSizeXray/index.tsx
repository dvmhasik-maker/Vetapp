import React, { useRef } from 'react';
import { ChevronLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useHeartSizeLogic } from './useHeartSizeLogic';
import ImageCanvas, { ImageCanvasHandle } from './ImageCanvas';
import MeasurementPanel from './MeasurementPanel';
import ResultView from './ResultView';
import { GuideIntro, GuideSteps, GuideNote, GuideStyles } from '../../common/GuideKit';
import ToolArticleLink from '../../common/ToolArticleLink';
import ToolGuideSection from '../../common/ToolGuideSection';
import AdSlot from '../../common/AdSlot';
import { useSEO } from '../../common/useSEO';

const HeartSizeXray: React.FC = () => {
  useSEO(
    '심장크기평가',
    '강아지와 고양이의 흉부 외측상 방사선 사진 위에서 랜드마크를 클릭해 VHS(척추심장크기)와 VLAS(척추좌심방크기)를 자동으로 계산합니다.'
  );

  const {
    species, setSpecies,
    imageSrc, loadImage,
    mainPoints, vertebrae, step,
    canFinishVertebrae,
    locked, toggleLock, confirmPosition,
    addPoint, drawShortAxis, undoLast, resetPoints, skipVLASStep,
    updateMainPoint, updateVertebra,
    calculate, result
  } = useHeartSizeLogic();

  const canvasRef = useRef<ImageCanvasHandle>(null);

  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/" className="back-btn-prominent">
          <ChevronLeft size={18} /> 대시보드
        </Link>
      </div>

      <div className="page-header-tool-white">
        <div className="icon">📏</div>
        <div>
          <h1>심장크기평가 (흉부 방사선)</h1>
          <p>흉부 X-ray 랜드마크 클릭으로 VHS·VLAS 자동 계산</p>
        </div>
      </div>

      <ToolArticleLink
        articlePath="/articles/heart-size-xray"
        description="VHS·VLAS 측정 원리, 정상범위, 심초음파와의 관계 및 임상적 한계를 정리한 가이드입니다."
      />

      <div className="tool-content-standard hsx-page">
        <div className="tab-container-tool">
          <button className={`tab-btn-tool ${species === 'dog' ? 'active' : ''}`} onClick={() => setSpecies('dog')}>
            🐶 강아지
          </button>
          <button className={`tab-btn-tool ${species === 'cat' ? 'active' : ''}`} onClick={() => setSpecies('cat')}>
            🐱 고양이
          </button>
        </div>

        <div className="hsx-main-grid">
          <div className="hsx-canvas-col">
            {imageSrc && (
              <ImageCanvas
                ref={canvasRef}
                imageSrc={imageSrc}
                step={step}
                mainPoints={mainPoints}
                vertebrae={vertebrae}
                result={result}
                canFinishVertebrae={canFinishVertebrae}
                locked={locked}
                onToggleLock={toggleLock}
                onAddPoint={addPoint}
                onDrawShortAxis={drawShortAxis}
                onUpdateMainPoint={updateMainPoint}
                onUpdateVertebra={updateVertebra}
              />
            )}
            {imageSrc && (
              <button
                type="button"
                className="btn-secondary-action hsx-save-btn"
                onClick={() => canvasRef.current?.exportImage()}
              >
                <Download size={18} /> 분석 방사선 사진 저장
              </button>
            )}
          </div>

          <div className="hsx-panel-col">
            <MeasurementPanel
              imageSrc={imageSrc}
              step={step}
              vertebraCountPlaced={vertebrae.length}
              canFinishVertebrae={canFinishVertebrae}
              hasResult={!!result}
              onUpload={loadImage}
              onUndo={undoLast}
              onReset={resetPoints}
              onSkipVLAS={skipVLASStep}
              onCalculate={calculate}
              onConfirmPosition={confirmPosition}
            />
            {result && <ResultView result={result} />}
          </div>
        </div>

        <ToolGuideSection>
          <GuideIntro>
            <strong>VHS(Vertebral Heart Scale)</strong>는 심장의 장축(L, Carina~심첨)과 단축(S, 심장 최대 폭)을
            측정한 뒤, T4 흉추 앞쪽 경계부터 척추를 따라 두 길이를 척추 개수로 환산해 더한 값입니다.{' '}
            <strong>VLAS(Vertebral Left Atrial Size)</strong>는 Carina에서 좌심방 후벽까지의 선을 같은 방식으로
            척추 단위로 환산한 값입니다.
          </GuideIntro>

          <GuideSteps
            steps={[
              {
                icon: '🔍',
                title: '화면 위치 고정',
                desc: '방사선 사진을 확대·이동해 원하는 위치를 잡은 뒤 고정하고 측정을 시작합니다.'
              },
              {
                icon: '↕️',
                title: '장축(L) 지정 — Carina → 심첨',
                desc: '기관분기부(Carina) 아래쪽 가장자리를 클릭한 뒤, 심장의 가장 아래쪽 꼭짓점(심첨)을 클릭해 장축을 완성합니다.'
              },
              {
                icon: '↔️',
                title: '단축(S) 측정',
                desc: <>심장 최대 폭을 <strong>드래그로 한 번에</strong> 긋습니다. 장축과 수직에 가까워지면 선이 초록색으로 바뀌며 정확히 수직으로 스냅됩니다.</>
              },
              {
                icon: '🫀',
                title: '좌심방 후벽(VLAS) 지정',
                desc: '후대정맥(Caudal vena cava)이 심장 그림자와 만나는 교차점을 클릭해 Carina~교차점 선을 완성합니다.'
              },
              {
                icon: '🦴',
                title: '흉추 경계 클릭',
                desc: <>T4번 앞쪽 경계부터 시작해 T5, T6…의 앞쪽 경계를 순서대로 클릭합니다. 두 번째 점부터는 기준선과 일직선에 가까우면 초록색으로 표시되며 자동 정렬됩니다. 찍은 점은 <strong>드래그로 위치 조정</strong>이 가능합니다.</>
              }
            ]}
          />

          <GuideNote>
            견종·개체별 흉곽 형태 편차가 있으므로, 본 도구의 결과는 스크리닝 참고용입니다.
          </GuideNote>

          <GuideStyles />
        </ToolGuideSection>

        <AdSlot className="mt-8" />
      </div>

      <style>{`
        .tool-content-standard { margin: 0 auto; }

        .tab-container-tool { display: flex; gap: 10px; margin-bottom: 1.5rem; }
        .tab-btn-tool {
          flex: 1;
          padding: 14px;
          font-size: 1rem;
          font-weight: 700;
          background: #e2e8f0;
          color: #4a5568;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tab-btn-tool.active { background: #3498db; color: #fff; box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2); }
        .tab-btn-tool:hover:not(.active) { background: #cbd5e1; }

        .hsx-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.6fr) minmax(280px, 1fr);
          gap: 1.5rem;
          align-items: start;
        }
        .hsx-save-btn { margin-top: 12px; }

        @media (max-width: 900px) {
          .hsx-main-grid { grid-template-columns: 1fr; }
          .hsx-panel-col { display: contents; }
          .hsx-panel, .hsx-upload { order: 1; }
          .hsx-canvas-col { order: 2; }
          .hsx-result { order: 3; }
        }
      `}</style>
    </div>
  );
};

export default HeartSizeXray;
