import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ فعّلي AOS هون قبل الـ render
AOS.init({
  duration: 1000, // مدة الأنيميشن بالميلي ثانية
  once: true, // بيشتغل مرة وحدة بس لما يظهر العنصر
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance tool
reportWebVitals();
