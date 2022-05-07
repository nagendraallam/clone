import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Netflix from "./Netflix";
import Youtube from "./Youtube";

export default function index() {
  return (
    <Routes>
      <Route excat path="/" element={<App />} />
      <Route path="netflix" element={<Netflix />} />
      <Route path="youtube" element={<Youtube />} />
    </Routes>
  );
}
