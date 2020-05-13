import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import logo from "./imgs/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" width="100" height="100" />
      </Link>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink className="nav-link" smooth to="/#about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" smooth to="/#projects">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" smooth to="/#contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
