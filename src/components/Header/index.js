import React from "react";
import "../../styles/components/Header.css";

function Header() {
  return (
    <nav className="firstnav">
      <div className="logo">MNTN</div>
      <ul>
        <li>
          <a href="#"></a>Equipment
        </li>
        <li>
          <a href="#"></a>About us
        </li>
        <li>
          <a href="#"></a>Blog
        </li>
      </ul>

      <div className="account">
        <img className="user" src="/assets/userIcon.png" />
        <span>Account</span>
      </div>
    </nav>
  );
}

export default Header;
