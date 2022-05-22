import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ErrorWindow } from "./components/error-window";
import NavBar from "./components/navbar";
import { ErrorContextProvider } from "./hooks/error-provider";
import { Desafio1, Desafio2, Desafio3, Desafio4 } from "./pages";
import Home from "./pages/home";

const logFn = (message: any) => {
  console.error(message);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorContextProvider>
      <>
        <ErrorWindow logFn={logFn} />
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desafio1" element={<Desafio1 />} />
            <Route path="/desafio2" element={<Desafio2 />} />
            <Route path="/desafio3" element={<Desafio3 />} />
            <Route path="/desafio4" element={<Desafio4 />} />
          </Routes>
        </HashRouter>
      </>
    </ErrorContextProvider>
  </React.StrictMode>
);
