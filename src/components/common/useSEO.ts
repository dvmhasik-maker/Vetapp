import { useEffect } from 'react';

const setMetaByName = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setMetaByProperty = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export const useSEO = (title: string, description: string) => {
  useEffect(() => {
    const fullTitle = `VETAPP | ${title}`;
    document.title = fullTitle;

    setMetaByName('description', description);
    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', description);

    const canonicalUrl = `https://vetapp-b1i.pages.dev${window.location.pathname}`;
    setMetaByProperty('og:url', canonicalUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description]);
};
