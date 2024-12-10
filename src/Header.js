import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import imglogo from "./images/logo.webp";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Fermer le menu lorsqu'un clic est détecté en dehors
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav ref={navRef} className={`nav-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>
          &times;
        </button>
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
      <ShoppingCartRoundedIcon className="shopicon" />
    </header>
  );
};

export default Header;
