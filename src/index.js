import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import { HashRouter as Routes, Route } from "react-router-dom";
import App from "./App";
import Netflix from "./Routes/Netflix";
import Youtube from "./Routes/Netflix";
import Visit from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes>
    <Visit />
  </Routes>
);
