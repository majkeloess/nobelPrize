import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Year from "./Year.jsx";
import Loader from "./Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>
);
