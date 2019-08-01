import React from "react";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <header>
      <NavLink to="/">
        <h2 className="header-title">{props.text}</h2>
        {props.children}
      </NavLink>
    </header>
  );
};

export default Header;
