import React from "react";
import "./App.css";
import Login from "./container/Login/Login";
import Top from "./container/Top/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./container/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />}></Route>
        <Route path={`/Top`} element={<Top />}></Route>
        <Route path={`/Register`} element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
