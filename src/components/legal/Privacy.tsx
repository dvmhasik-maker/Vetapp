import React from 'react';
import { ChevronLeft, ShieldCheck, Lock, Eye, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/" className="back-btn-prominent">
          <ChevronLeft size={18} /> 대시보드
        </Link>
      </div>

      <div className="legal-header">
        <div className="legal-icon"><ShieldCheck size={48} className="text-green-500" /></div>
        <h1>개인정보처리방침</h1>
        <p>VETAPP은 이용자의 개인정보를 소중하게 생각합니다.</p>
      </div>

      <div className="tool-card-container">
        <div className="legal-prose">
          <p className="intro-text">
            본 VETAPP(이하 '서비스')은 이용자의 개인정보를 보호하고 관련 법령을 준수하기 위해 다음과 같은 방침을 가지고 있습니다.
          </p>

          <div className="legal-grid">
            <section className="legal-box">
              <div className="box-title">
                <Lock size={18} />
                <span>1. 수집 항목 및 방법</span>
              </div>
              <p>
                본 서비스는 원칙적으로 회원가입 없이 이용 가능합니다. 서버는 개인정보를 저장하지 않으며, 이용자가 입력하는 '환자 이름' 및 '체중' 등은 브라우저 내 휘발성 메모리에서만 일시적으로 처리됩니다.
              </p>
            </section>

            <section className="legal-box">
              <div className="box-title">
                <Eye size={18} />
                <span>2. 이용 목적</span>
              </div>
              <p>
                제공되는 수의학적 계산 도구의 결과 산출 및 서비스 개선을 위한 통계적 분석 이외의 어떠한 목적이나 제3자 제공을 하지 않습니다.
              </p>
            </section>

            <section className="legal-box">
              <div className="box-title">
                <ShieldCheck size={18} />
                <span>3. 데이터 저장 및 파기</span>
              </div>
              <p>
                입력된 모든 데이터는 세션 종료와 함께 자동으로 삭제됩니다. 이미지 생성 데이터는 이용자의 기기에만 저장되며 서버로 전송되지 않습니다.
              </p>
            </section>

            <section className="legal-box">
              <div className="box-title">
                <Bell size={18} />
                <span>4. 구글 광고 및 쿠키 정책</span>
              </div>
              <p>
                본 서비스는 구글 애드센스를 게재합니다. 구글은 쿠키를 사용하여 사용자의 방문 기록 기반으로 맞춤 광고를 제공하며, 사용자는 <strong>'광고 설정' 페이지</strong>를 통해 개인화된 광고를 거부할 수 있습니다.
              </p>
            </section>
          </div>

          <div className="legal-footer">
            <p>운영 책임자: VETAPP 기술 운영팀</p>
            <p>문의: yeouidoah@naver.com</p>
            <p>시행 일자: 2026년 5월 29일</p>
          </div>
        </div>
      </div>

      <style>{`
        .legal-header { text-align: center; padding: 2rem 0 3rem; }
        .legal-icon { margin-bottom: 1rem; display: flex; justify-content: center; }
        .legal-header h1 { font-size: 1.75rem; font-weight: 800; color: #0f172a; margin: 0; }
        .legal-header p { color: #64748b; margin-top: 0.5rem; font-weight: 500; }

        .intro-text { font-size: 1rem; color: #475569; margin-bottom: 2rem; text-align: center; line-height: 1.6; }

        .legal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .legal-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; }
        .box-title { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; color: #1e293b; font-weight: 700; }
        .legal-box p { font-size: 0.9rem; line-height: 1.6; color: #475569; margin: 0; }
        .legal-box strong { color: #10b981; }

        .legal-footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #f1f5f9; color: #94a3b8; font-size: 0.8rem; text-align: center; }
        .legal-footer p { margin: 4px 0; }

        @media (max-width: 768px) {
          .legal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Privacy;
