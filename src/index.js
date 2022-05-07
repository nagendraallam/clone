import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import { HashRouter as Routes } from "react-router-dom";
import Visit from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes>
    <Visit />
  </Routes>
);
