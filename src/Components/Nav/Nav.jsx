import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./../style/nav.scss";

function Nav() {
  const [state, setState] = useState(false);

  function toggle() {
    state ? setState(false) : setState(true);
  }

  function closeMenu() {
    setState(false);
  }

  return (
    <nav>
      <Hamburger state={state} toggleState={toggle} />

      <div
        className={
          "menu-container " + (state ? "menu-expanded" : "menu-collapsed")
        }
      >
        <ul>
          <li>
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/about/">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/components/">
              Components
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
