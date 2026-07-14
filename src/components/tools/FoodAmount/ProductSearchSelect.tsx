import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Product } from './types';

interface ProductSearchSelectProps {
  products: Product[];
  value: Product | null;
  onChange: (product: Product) => void;
  placeholder?: string;
}

const ProductSearchSelect: React.FC<ProductSearchSelectProps> = ({ products, value, onChange, placeholder }) => {
  const [query, setQuery] = useState(value?.name || '');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value?.name || '');
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery(value?.name || '');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value]);

  const filtered = query.trim()
    ? products.filter(p => {
        const q = query.trim().toLowerCase();
        return p.name.toLowerCase().includes(q) || p.englishName?.toLowerCase().includes(q);
      })
    : products;

  const handleSelect = (product: Product) => {
    onChange(product);
    setQuery(product.name);
    setIsOpen(false);
  };

  return (
    <div className="product-search-select" ref={containerRef}>
      <div className="product-search-input-wrap">
        <Search size={16} className="product-search-icon" />
        <input
          type="text"
          className="product-search-input"
          value={query}
          placeholder={placeholder}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => { setQuery(''); setIsOpen(true); }}
        />
      </div>
      {isOpen && (
        <div className="product-search-dropdown">
          {filtered.length > 0 ? (
            filtered.map((p, idx) => (
              <button
                type="button"
                key={idx}
                className={`product-search-option ${value?.name === p.name ? 'active' : ''}`}
                onMouseDown={(e) => { e.preventDefault(); handleSelect(p); }}
              >
                {p.name}
              </button>
            ))
          ) : (
            <div className="product-search-empty">검색 결과가 없습니다.</div>
          )}
        </div>
      )}

      <style>{`
        .product-search-select {
          position: relative;
        }
        .product-search-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .product-search-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }
        .product-search-input {
          width: 100%;
          padding: 11px 12px 11px 36px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          font-size: 0.95rem;
          color: #1e293b;
          outline: none;
          transition: all 0.2s;
        }
        .product-search-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .product-search-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          max-height: 260px;
          overflow-y: auto;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
          z-index: 20;
          padding: 6px;
        }
        .product-search-option {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 10px;
          border: none;
          background: transparent;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #1e293b;
          cursor: pointer;
        }
        .product-search-option:hover {
          background: #f1f5f9;
        }
        .product-search-option.active {
          background: #eff6ff;
          color: #1d4ed8;
          font-weight: 700;
        }
        .product-search-empty {
          padding: 14px 10px;
          text-align: center;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        @media (max-width: 640px) {
          .product-search-dropdown {
            max-height: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSearchSelect;
