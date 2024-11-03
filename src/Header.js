import React, { useState } from "react";
import "./Header.css";
import imglogo from "./images/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Ferme le menu après le clic sur une section
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={imglogo} alt="Logo" />
      </div>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a onClick={() => handleScroll("commander")}>طلب المنتوج</a>
          </li>
          <li>
            <a onClick={() => handleScroll("utilisation")}>مكونات المنتوج</a>
          </li>
          <li>
            <a onClick={() => handleScroll("about-us")}>تقديم المنتوج</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
