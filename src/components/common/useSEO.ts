import { useEffect } from 'react';

export const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = `${title} | VETAPP - 수의학 임상 지원 플랫폼`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);
};
