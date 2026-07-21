import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, ChevronRight, Wrench } from 'lucide-react';
import { useSEO } from '../common/useSEO';

const articles = [
  {
    path: '/articles/fluid-therapy',
    title: '수의 수액 요법 완전 가이드',
    description: '탈수량·유지량·지속 소실량 계산 원칙, 전해질 보충, 과수액 예방까지',
    tag: '내과',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    border: '#bae6fd',
  },
  {
    path: '/articles/cushing',
    title: '개 쿠싱 증후군 진단과 치료 가이드',
    description: 'PDH vs AT 감별, LDDST·ACTH 자극 검사 전략, 트릴로스탄 모니터링 프로토콜',
    tag: '내분비',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
  {
    path: '/articles/hypothyroidism',
    title: '개 갑상선기능저하증 진단·치료 가이드',
    description: 'TT4·fT4·TSH 복합 지표 해석, ESS 감별, Levothyroxine 투여 프로토콜',
    tag: '내분비',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
  {
    path: '/articles/atopy',
    title: '개 아토피성 피부염 진단과 관리 전략',
    description: 'Favrot 기준, 제외 진단, 아포퀠·사이토포인트·면역요법 선택 가이드',
    tag: '피부과',
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    path: '/articles/echocardiography',
    title: '소동물 심초음파 지표 해석 가이드',
    description: 'LA/Ao·LVIDd·FS·EPSS 정상 범위와 ACVIM MMVD·HCM 병기 결정 기준',
    tag: '심장',
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    path: '/articles/neurological',
    title: '소동물 신경계 질환 국소화 가이드',
    description: 'UMN vs LMN 감별, 척수 해부학적 위치 국소화, 심부통증 응급 판단 기준',
    tag: '신경',
    color: '#06b6d4',
    bg: '#ecfeff',
    border: '#a5f3fc',
  },
  {
    path: '/articles/parasites',
    title: '반려동물 기생충 예방과 치료 가이드',
    description: '심장사상충·지알디아·트리코모나스·외부기생충의 특징과 CAPC 기반 프로토콜',
    tag: '기생충',
    color: '#10b981',
    bg: '#ecfdf5',
    border: '#a7f3d0',
  },
  {
    path: '/articles/poisoning',
    title: '반려동물 중독 응급 처치 가이드',
    description: '구토 유발 금기 사항, 초콜릿·포도·자일리톨 등 주요 독성 물질별 처치 원칙',
    tag: '응급',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    path: '/articles/food-amount',
    title: '반려동물 사료량 계산과 영양 관리 가이드',
    description: 'RER·DER 공식, 생애 단계별 에너지 계수, BCS 기반 급여량 조정 원칙',
    tag: '영양',
    color: '#84cc16',
    bg: '#f7fee7',
    border: '#d9f99d',
  },
  {
    path: '/articles/heart-size-xray',
    title: '흉부 방사선 심장크기평가(VHS·VLAS) 완전 가이드',
    description: '척추심장크기·척추좌심방크기 측정 원리, 정상범위, 심초음파와의 관계 및 한계',
    tag: '영상진단',
    color: '#0d9488',
    bg: '#f0fdfa',
    border: '#99f6e4',
  },
  {
    path: '/articles/cat-obesity',
    title: '고양이 비만도(FBMI) 완전 가이드',
    description: '체지방률 측정 원리, BCS와의 관계, 저체중 감별 진단과 비만 관리 프로토콜',
    tag: '영양',
    color: '#84cc16',
    bg: '#f7fee7',
    border: '#d9f99d',
  },
];

const tools = [
  { path: '/fluid-therapy', title: '수의학 수액 요법 계산기' },
  { path: '/cushing', title: '강아지 쿠싱 증후군 모니터링 도구' },
  { path: '/hypothyroidism', title: '강아지 갑상선 기능 저하증 진단 도구' },
  { path: '/atopy', title: '견종별 아토피 호발부위 분석' },
  { path: '/echocardiography', title: '수의학 심장초음파 계산기' },
  { path: '/neurological', title: '수의학 신경계 검사 도구' },
  { path: '/parasites', title: '반려동물 외부 기생충 및 구충 관리 도구' },
  { path: '/poisoning', title: '반려동물 독성 물질 중독 위험도 분석기' },
  { path: '/food-amount', title: '반려동물 일일 에너지 요구량(DER) 계산기' },
  { path: '/heart-size-xray', title: '심장크기평가(VHS·VLAS) 계산기' },
  { path: '/cat-obesity', title: '고양이 비만도(FBMI) 계산기' },
];

const ArticlesIndex: React.FC = () => {
  useSEO(
    '수의학 임상 가이드',
    '수의사를 위한 수액 요법, 쿠싱, 갑상선기능저하증, 아토피, 심초음파, 심장크기평가(VHS·VLAS), 신경계 질환, 기생충, 중독, 영양 관리, 고양이 비만도(FBMI) 임상 가이드 모음'
  );

  return (
    <div className="tool-page">
      <div className="tool-nav">
        <Link to="/" className="back-btn-prominent">
          <ChevronLeft size={18} /> 대시보드
        </Link>
      </div>

      <div className="articles-hero">
        <div className="articles-hero-tag">
          <BookOpen size={14} /> 수의학 임상 가이드
        </div>
        <h1>수의학 가이드 모음</h1>
        <p>주요 질환별 임상 지식을 체계적으로 정리한 수의사 전용 가이드입니다.<br />최신 학술 가이드라인을 기반으로 작성되었습니다.</p>
      </div>

      <div className="tool-card-container">
        <div className="articles-grid">
          {articles.map((article) => (
            <Link key={article.path} to={article.path} className="article-card">
              <div className="article-card-tag" style={{ color: article.color, background: article.bg, borderColor: article.border }}>
                {article.tag}
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-card-arrow">
                읽기 <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="tool-card-container">
        <div className="tools-section-header">
          <Wrench size={18} />
          <h2>관련 임상 계산 도구</h2>
        </div>
        <div className="tools-grid">
          {tools.map((tool) => (
            <Link key={tool.path} to={tool.path} className="tool-link-item">
              {tool.title}
              <ChevronRight size={15} />
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        /* ── 히어로 ── */
        .articles-hero {
          text-align: center;
          padding: 2rem 1rem 2.5rem;
        }
        .articles-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          color: #3b82f6;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 1rem;
          border: 1px solid #bfdbfe;
        }
        .articles-hero h1 {
          font-size: 1.65rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
          word-break: keep-all;
        }
        .articles-hero p {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.7;
          word-break: keep-all;
        }

        /* ── 카드 그리드: 모바일 1열 → 태블릿 2열 → PC 3열 ── */
        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .articles-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .articles-grid { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
          .articles-hero { padding: 2.5rem 1rem 3rem; }
          .articles-hero h1 { font-size: 2rem; }
          .articles-hero p { font-size: 1rem; }
        }

        /* ── 카드 ── */
        .article-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .article-card:hover {
          border-color: #94a3b8;
          box-shadow: 0 6px 20px rgba(0,0,0,0.09);
          transform: translateY(-2px);
        }
        .article-card-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid;
          margin-bottom: 0.75rem;
          align-self: flex-start;
        }
        .article-card h3 {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
          line-height: 1.45;
          word-break: keep-all;
          flex: 1;
        }
        .article-card p {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 0.75rem;
          word-break: keep-all;
        }
        .article-card-arrow {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #3b82f6;
          margin-top: auto;
        }

        /* ── 모바일 보정 ── */
        @media (max-width: 480px) {
          .articles-hero h1 { font-size: 1.35rem; }
          .articles-hero p { font-size: 0.875rem; }
          .article-card { padding: 1rem 1.125rem; }
        }

        /* ── 도구 바로가기 섹션 ── */
        .tools-section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 2.5rem 0 1rem;
          color: #0f172a;
        }
        .tools-section-header h2 {
          font-size: 1.1rem;
          font-weight: 800;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }
        @media (min-width: 640px) {
          .tools-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .tool-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          word-break: keep-all;
          transition: all 0.2s;
        }
        .tool-link-item:hover {
          border-color: #94a3b8;
          background: #f1f5f9;
          color: #0f172a;
        }
        .tool-link-item svg {
          flex-shrink: 0;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default ArticlesIndex;
