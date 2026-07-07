import React from 'react';
import { HeartSizeResult } from './types';
import { interpretVHS, interpretVLAS } from './calc';

interface ResultViewProps {
  result: HeartSizeResult;
}

const ResultView: React.FC<ResultViewProps> = ({ result }) => {
  const vhsVerdict = interpretVHS(result.species, result.vhs);
  const vlasVerdict = result.vlas !== null ? interpretVLAS(result.species, result.vlas) : null;

  return (
    <div className="tool-card-container hsx-result">
      <div className="tool-card-title">📊 심장 크기 측정 결과</div>

      <div className="hsx-patient-summary">
        <span>종: <strong>{result.species === 'dog' ? '강아지' : '고양이'}</strong></span>
        <span className="date">측정일: {result.date}</span>
      </div>

      <table className="result-table-echo hsx-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>측정값 (척추 단위)</th>
            <th>해석</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VHS (Vertebral Heart Scale)</td>
            <td className="hsx-val" style={{ color: vhsVerdict.color }}>{result.vhs.toFixed(1)}</td>
            <td style={{ color: vhsVerdict.color, fontWeight: 700 }}>{vhsVerdict.label}</td>
          </tr>
          {vlasVerdict && result.vlas !== null && (
            <tr>
              <td>VLAS (Vertebral Left Atrial Size)</td>
              <td className="hsx-val" style={{ color: vlasVerdict.color }}>{result.vlas.toFixed(1)}</td>
              <td style={{ color: vlasVerdict.color, fontWeight: 700 }}>{vlasVerdict.label}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="hsx-detail">
        장축(L) 환산: {result.lVertebrae.toFixed(1)}개 척추 · 단축(S) 환산: {result.sVertebrae.toFixed(1)}개 척추 ·
        척추 기준점 {result.vertebraCount}개 사용
      </div>

      <div className="ref-label-echo">
        ※ 본 측정값은 참고용 스크리닝 도구이며, 견종별 정상범위 편차가 존재할 수 있습니다.
        최종 진단은 수의사의 전문적 판단하에 결정되어야 합니다.
      </div>

      <style>{`
        .result-table-echo {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          table-layout: fixed;
        }
        .result-table-echo th, .result-table-echo td {
          padding: 10px 5px;
          font-size: 0.85rem;
          border-bottom: 1px solid #f1f5f9;
          text-align: center;
          color: #334155;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .result-table-echo th {
          background: #f8fafc;
          color: #64748b;
          font-size: 0.8rem;
          border-bottom: 1px solid #e2e8f0;
        }
        .result-table-echo tr:last-child td { border-bottom: none; }
        .ref-label-echo {
          margin-top: 2rem;
          font-size: 0.75rem;
          color: #94a3b8;
          text-align: center;
          font-style: italic;
          line-height: 1.5;
        }
        .hsx-patient-summary {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #475569;
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 16px;
        }
        .hsx-patient-summary .date { color: #94a3b8; }
        .hsx-table th:nth-child(1), .hsx-table td:nth-child(1) { width: 40%; text-align: left; padding-left: 10px; }
        .hsx-table th:nth-child(2), .hsx-table td:nth-child(2) { width: 25%; }
        .hsx-table th:nth-child(3), .hsx-table td:nth-child(3) { width: 35%; }
        .hsx-val { font-weight: 800; font-size: 1rem; }
        .hsx-detail { margin-top: 12px; font-size: 0.78rem; color: #94a3b8; }
      `}</style>
    </div>
  );
};

export default ResultView;
