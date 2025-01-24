// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import "./global_styles.css";
import MainAppContainer from "./MainAppContainer";

ReactDOM.render(
  <React.StrictMode>
    <MainAppContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
