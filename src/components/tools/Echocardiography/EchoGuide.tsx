import React from 'react';
import GuideFAQ from '../../common/GuideFAQ';

const EchoGuide: React.FC = () => {
  return (
    <div className="echo-guide-content">
      <section className="guide-section">
        <h4>1. 심초음파(Echocardiography)의 목적</h4>
        <p>
          심초음파는 심장의 구조와 기능을 비침습적으로 평가하는 가장 중요한 도구입니다. 심실의 크기, 벽의 두께, 수축력, 판막의 상태 등을 실시간으로 관찰하여 심장 질환의 유무와 단계를 결정합니다.
        </p>
      </section>

      <section className="guide-section">
        <h4>2. 주요 평가 지표</h4>
        <ul className="guide-list">
          <li><strong>LA/Ao Ratio:</strong> 대동맥 대비 좌심방의 크기. 좌심방 확장을 평가하는 핵심 지표입니다. (정상: 1.6 미만)</li>
          <li><strong>LVIDd (Normalized):</strong> 좌심실 확장기말 내경. 체중에 맞춰 표준화하여 심실 확장을 평가합니다.</li>
          <li><strong>FS (Fractional Shortening):</strong> 심실 중격과 후벽의 변화율을 통해 심장의 수축력을 평가합니다.</li>
          <li><strong>EPSS:</strong> 승모판 전엽과 심실 중격 사이의 거리. 좌심실 수축 기능 저하 시 이 거리가 멀어집니다.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h4>3. ACVIM 심부전 단계 (MMVD 기준)</h4>
        <ul className="guide-list">
          <li><strong>Stage A:</strong> 질환 위험군 (카발리에 킹 찰스 스패니얼 등 호발 견종).</li>
          <li><strong>Stage B1:</strong> 심잡음은 있으나 심비대 증거가 없음.</li>
          <li><strong>Stage B2:</strong> 심잡음과 심비대 증거가 있음 (치료 시작 시점).</li>
          <li><strong>Stage C:</strong> 과거 또는 현재 심부전 증상(폐수종 등)이 나타난 상태.</li>
          <li><strong>Stage D:</strong> 표준 치료에 반응하지 않는 말기 심부전.</li>
        </ul>
      </section>

      <GuideFAQ
        items={[
          {
            q: 'Stage B1과 B2를 나누는 기준이 헷갈립니다.',
            a: 'B2는 심잡음과 함께 좌심방/좌심실 확장의 방사선학적·초음파적 증거가 모두 있고, LA/Ao ≥ 1.6, 정규화 LVIDd ≥ 1.7 등 ACVIM 컨센서스의 구체적 수치 기준을 만족해야 합니다. 수치가 경계선에 있다면 단일 검사보다 추적 관찰을 통한 변화 추이가 더 중요합니다.',
          },
          {
            q: 'FS(단축률)만으로 심장 수축력을 판단해도 되나요?',
            a: 'FS는 전부하·후부하에 영향을 크게 받아 판막 질환이나 승모판 폐쇄부전이 있는 환자에서는 실제 심근 수축력보다 과대평가될 수 있습니다. EPSS, LV 벽 운동 등 다른 지표와 함께 종합적으로 해석해야 합니다.',
          },
          {
            q: '무증상 환자에서 B2 단계로 진단되면 바로 투약을 시작하나요?',
            a: 'EPIC 연구 결과에 따라 무증상 B2 단계에서도 피모벤단(Pimobendan) 투약이 심부전 발생을 지연시키는 것으로 알려져 있어, 진단 기준을 충족하면 증상 발현 전이라도 치료 시작을 고려합니다.',
          },
        ]}
      />

      <div className="guide-reference">
        <p>※ 참고 문헌: Keene BW, et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. 2019.</p>
      </div>

      <style>{`
        .echo-guide-content h4 {
          font-size: 1.1rem;
          color: #1e293b;
          margin: 1.5rem 0 0.75rem;
          font-weight: 700;
        }
        .echo-guide-content h4:first-child {
          margin-top: 0;
        }
        .guide-section p {
          margin-bottom: 1rem;
        }
        .guide-list {
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .guide-list li {
          margin-bottom: 0.5rem;
          position: relative;
        }
        .guide-reference {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.8rem;
          color: #94a3b8;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default EchoGuide;
