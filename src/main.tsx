import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  (ReactDOM as any).createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No root element found");
}
