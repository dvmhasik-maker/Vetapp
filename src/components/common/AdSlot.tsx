import { useEffect, useRef } from 'react';

interface AdSlotProps {
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSlot = ({ className, style }: AdSlotProps) => {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not yet loaded
    }
  }, []);

  return (
    <div
      className={className}
      style={{ overflow: 'hidden', margin: '0.75rem 0', minHeight: '60px', ...style }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7706535502008479"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSlot;
