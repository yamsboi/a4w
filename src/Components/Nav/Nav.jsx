import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTrail, animated } from "react-spring";
import Hamburger from "./Hamburger";
import Header from "../Header";
import "../style/nav.scss";

function Nav() {
  const [state, setState] = useState(false);

  function toggle() {
    setState(!state);
  }
  function closeMenu() {
    toggle(false);
  }

  const links = [
    {
      to: "/",
      title: "Hem",
      type: "NavLink",
      exact: true
    },
    {
      to: "/behandlingar/",
      title: "Behandlingar",
      type: "NavLink"
    },
    {
      to: "https://www.w3schools.com/tags/tag_i.asp",
      title: "Boka Online",
      type: "a"
    }
  ];

  //React-Spring
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(links.length, {
    config,
    opacity: state ? 1 : 0,
    x: state ? 0 : 20,
    height: state ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0, delay: 200 }
  });

  return (
    <nav>
      <Header text="A4W" />

      <Hamburger state={state} toggle={toggle} />

      <div className={"overlay " + (state ? "overlay-active" : "")} />

      <ul className={state ? "" : "no-click"}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.li
            key={links[index].title}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}>
            <animated.div style={{ height }}>
              {links[index].type === "NavLink" ? (
                <NavLink
                  exact={links[index].exact}
                  activeClassName="route-active"
                  onClick={closeMenu}
                  to={links[index].to}>
                  {links[index].title}
                </NavLink>
              ) : (
                <a href={links[index].to}>{links[index].title}</a>
              )}
            </animated.div>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
