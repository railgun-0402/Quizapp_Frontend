import React from "react";
import "./App.css";
import Login from "./container/Login/Login";
import Top from "./container/Top/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./container/Register/Register";
import Header from "./container/Common/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Top />}></Route>
        <Route path={`/Login`} element={<Login />}></Route>
        <Route path={`/Register`} element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
