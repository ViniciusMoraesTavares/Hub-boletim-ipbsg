import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const splash = document.getElementById('app-splash');
if (splash) {
  // Defer removal to the next frame to avoid white flash on some WebViews
  requestAnimationFrame(() => splash.remove());
}
