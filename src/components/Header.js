import React from "react";
import "./Header.css";
import Logo from "../images/around_logo_header.svg";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={Logo}
        alt="Around the U.S. text logo"
      />
    </div>
  );
}

export default Header;
