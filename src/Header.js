import React from "react";
import "./Header.css";
import imglogo from "./images/logo.webp";

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={imglogo} alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a onClick={() => handleScroll("commander")}>طلب المنتوج</a>
          </li>
          <li>
            <a onClick={() => handleScroll("about-us")}>تقديم المنتوج</a>
          </li>
          <li>
            <a onClick={() => handleScroll("utilisation")}>مكونات المنتوج</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
