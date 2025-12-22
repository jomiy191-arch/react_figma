import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./images/Logo.svg";
import "../../App.css"; 
import "./Header.css";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="nav container">
        <h2 className="logo">
          <img src={Logo} alt="Logo" />
        </h2>

        <ul className={`nav__list ${menuActive ? "active" : ""}`}>
          <li><NavLink to="/" end>About Us</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/product">Services</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <button>Clone Project</button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
