import App from "app/index.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/tailwindcss.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
