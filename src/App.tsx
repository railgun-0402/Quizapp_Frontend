import React from "react";
import "./App.css";
import Login from "./container/Login/Login";
import Top from "./container/Top/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />}></Route>
        <Route path={`/Success`} element={<Top />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
