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
      label: "Hem",
      type: "NavLink",
      exact: true
    },
    {
      to: "/behandlingar/botox",
      label: "Behandlingar",
      type: "NavLink"
    },
    {
      to: "https://www.w3schools.com/tags/tag_i.asp",
      label: "Boka tid",
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

      <div className={"overlay " + (state ? "overlay-active" : "")}>
        <div className="wave__before" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fea4a4"
            fillOpacity="1"
            d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,90.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <ul className={state ? "" : "no-click"}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.li
            key={links[index].label}
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
                  {links[index].label}
                </NavLink>
              ) : (
                <a href={links[index].to}>{links[index].label}</a>
              )}
            </animated.div>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
