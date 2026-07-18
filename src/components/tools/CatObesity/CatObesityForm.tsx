interface CatObesityFormProps {
  chestInput: string;
  setChestInput: (v: string) => void;
  legInput: string;
  setLegInput: (v: string) => void;
}

const CatObesityForm: React.FC<CatObesityFormProps> = ({
  chestInput, setChestInput, legInput, setLegInput
}) => {
  return (
    <div className="cat-obesity-form-container">
      <div className="tool-card-container">
        <div className="tool-card-title">📏 체형 측정값 입력</div>

        <div className="input-group-cat">
          <label className="input-label-cat">
            ① 몸통(가슴) 둘레
            <small>9번째 갈비뼈 위치의 둘레</small>
          </label>
          <div className="input-wrap-cat-large">
            <input
              type="number"
              inputMode="decimal"
              value={chestInput}
              onChange={(e) => setChestInput(e.target.value)}
              placeholder="0.0"
              step="0.1"
              autoFocus
            />
            <span className="unit">cm</span>
          </div>
        </div>

        <div className="input-group-cat">
          <label className="input-label-cat">
            ② 뒷다리 길이
            <small>무릎에서 뒷발꿈치까지</small>
          </label>
          <div className="input-wrap-cat-large">
            <input
              type="number"
              inputMode="decimal"
              value={legInput}
              onChange={(e) => setLegInput(e.target.value)}
              placeholder="0.0"
              step="0.1"
            />
            <span className="unit">cm</span>
          </div>
        </div>
      </div>

      <style>{`
        .cat-obesity-form-container { height: 100%; min-width: 0; }
        .cat-obesity-form-container > .tool-card-container {
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 0;
        }

        .input-group-cat { margin-bottom: 1rem; }
        .input-group-cat:last-child { margin-bottom: 0; }
        .input-label-cat {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-weight: 700;
          color: #1e293b;
          font-size: 0.88rem;
          margin-bottom: 0.45rem;
        }
        .input-label-cat small { font-weight: 500; color: #94a3b8; font-size: 0.72rem; }

        .input-wrap-cat-large {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.35rem 0.9rem;
          transition: all 0.2s;
        }
        .input-wrap-cat-large:focus-within { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); background: #fff; }
        .input-wrap-cat-large input {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          outline: none;
          padding: 0.4rem 0;
          font-size: 1.3rem;
          font-weight: 800;
          color: #2563eb;
          text-align: center;
        }
        .input-wrap-cat-large .unit { font-weight: 700; color: #64748b; font-size: 0.85rem; flex-shrink: 0; }
      `}</style>
    </div>
  );
};

export default CatObesityForm;
