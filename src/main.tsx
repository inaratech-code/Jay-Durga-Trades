import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ReactLenis } from 'lenis/react';
import App from './App.tsx';
import './index.css';
import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
);
