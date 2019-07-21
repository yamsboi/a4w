import React from "react";
import { NavLink } from "react-router-dom";

const HTTP404 = () => {
  return (
    <main>
      <h1>:(</h1>
      <p>404 Page not found.</p>
      <NavLink to="/">Hitta Hem</NavLink>
    </main>
  );
};

export default HTTP404;
