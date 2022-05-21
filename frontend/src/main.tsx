import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navbar";
import Desafio1 from "./pages/desafio1";
import Desafio2 from "./pages/desafio2";
import Desafio4 from "./pages/desafio4";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafio1" element={<Desafio1 />} />
        <Route path="/desafio2" element={<Desafio2 />} />
        <Route path="/desafio4" element={<Desafio4 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
