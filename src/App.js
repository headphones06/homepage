import React from "react";
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Home/Home.js";
import {Info} from "./Info/Info.js";
import {Works} from "./Works/Works.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/info"} element={<Info />} />
        <Route path={"/works"} element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}
