import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SmoothScrollRoot from "./components/SmoothScrollRoot.tsx";
import "./index.css";

function loadExtendedFonts() {
  const schedule =
    window.requestIdleCallback ??
    ((callback: IdleRequestCallback) => window.setTimeout(callback, 100));

  schedule(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/fonts-extended.css";
    document.head.appendChild(link);
  });
}

loadExtendedFonts();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScrollRoot>
      <App />
    </SmoothScrollRoot>
  </StrictMode>,
);
