import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">Aboutttttt</Link>
        </li>
        <li>
          <Link to="/components/">Componentsssssssssssss</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
