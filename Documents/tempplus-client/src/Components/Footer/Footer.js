import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Logo"></img>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/PostJob">Post Job</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom__text">
          &copy; 2023 TempPlus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
