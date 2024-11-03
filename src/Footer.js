import React from "react";
import "./Footer.css";
import logo from "./images/logo.webp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-contact">
        <p>Contactez-nous :</p>
        <div className="social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook Logo"
              width="30"
              height="30"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Logo"
              width="30"
              height="30"
            />
          </a>
        </div>
        <LocalPhoneIcon/>
        <p> 0689993060</p>
      </div>
    </footer>
  );
};

export default Footer;
