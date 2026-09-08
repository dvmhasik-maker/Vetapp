import React from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface GuideFAQProps {
  items: FAQItem[];
}

const GuideFAQ: React.FC<GuideFAQProps> = ({ items }) => (
  <section className="guide-faq-block">
    <h4>자주 묻는 질문</h4>
    <div className="guide-faq-list">
      {items.map((item, i) => (
        <div className="guide-faq-item" key={i}>
          <p className="guide-faq-q">Q. {item.q}</p>
          <p className="guide-faq-a">A. {item.a}</p>
        </div>
      ))}
    </div>
    <style>{`
      .guide-faq-block h4 {
        font-size: 1.1rem;
        color: #1e293b;
        margin: 1.5rem 0 0.75rem;
        font-weight: 700;
      }
      .guide-faq-list {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        margin-bottom: 1.5rem;
      }
      .guide-faq-item {
        background: #f0fdf4;
        border: 1px solid #dcfce7;
        border-radius: 12px;
        padding: 0.9rem 1.1rem;
      }
      .guide-faq-q {
        font-weight: 700;
        color: #166534;
        margin: 0 0 6px;
        font-size: 0.9rem;
        line-height: 1.5;
      }
      .guide-faq-a {
        color: #475569;
        margin: 0;
        line-height: 1.6;
        font-size: 0.88rem;
      }
    `}</style>
  </section>
);

export default GuideFAQ;
