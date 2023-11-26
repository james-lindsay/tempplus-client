import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo"></img>
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
    </header>
  );
};

export default Header;
