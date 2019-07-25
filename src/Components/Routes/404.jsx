import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";

const HTTP404 = () => {
  return (
    <div>
      <Header text="Company Name" />

      <p>404 Page not found.</p>
      <NavLink to="/">Hitta Hem</NavLink>
    </div>
  );
};

export default HTTP404;
