import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Desafio1 from "./pages/desafio1";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafio1" element={<Desafio1 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
