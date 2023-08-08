import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router"; // 변경된 파일 경로
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
