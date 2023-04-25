import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainPage from "./Mainpage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <MainPage />
  </React.StrictMode>
);
