import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // Titleを押下した場合、Topページへ戻る
  const handleTitle = () => {
    navigate("/");
  };
  return (
    <>
      <header>
        <h2 className="header-h2" onClick={handleTitle}>
          クイズアプリ
        </h2>

        <nav>
          <ul className="nav_links">
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Project</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
