import React from "react";
import "./style/header.scss";
const Header = props => {
  return (
    <header>
      <h2 className="header-title">{props.text}</h2>
      {props.children}
    </header>
  );
};

export default Header;
