import React from "react";
import { NavLink } from "react-router-dom";
const HTTP404 = () => {
  return (
    <React.Fragment>
      <p>404 Page not found.</p>
      <NavLink to="/">Hitta Hem</NavLink>
    </React.Fragment>
  );
};

export default HTTP404;
