import React from "react";
import logo from "./imgs/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo" width="100" height="100" />
        <nav>
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
