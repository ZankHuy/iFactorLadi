import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// SPA redirect handler: GitHub Pages 404.html converts unknown paths into
// `?/<path>` query strings. Rewrite window.location to restore the original
// pathname so React Router / page anchors behave normally.
(() => {
  const search = window.location.search;
  if (search && search.startsWith('?/')) {
    const inner = search.slice(2).split('&').map(s => s.replace(/~and~/g, '&')).join('&');
    const newUrl = window.location.pathname.replace(/\/$/, '') + '/' + inner +
      (window.location.hash || '');
    window.history.replaceState({}, '', newUrl);
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
