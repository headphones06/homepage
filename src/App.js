import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home.js";
import { Info } from "./Pages/Info.js";
import { Works } from "./Pages/Works.js";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/info"} element={<Info />} />
        <Route path={"/works"} element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}
