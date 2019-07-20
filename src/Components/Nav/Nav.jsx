import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTrail, animated } from "react-spring";
import Hamburger from "./Hamburger";
import "../style/nav.scss";

function Nav() {
  const [state, setState] = useState(false);

  function toggle() {
    state ? setState(false) : setState(true);
  }

  function closeMenu() {
    setState(false);
  }

  const links = [
    {
      to: "/",
      title: "Home",
      exact: true
    },
    {
      to: "/about/",
      title: "About"
    },
    {
      to: "/components/",
      title: "Components"
    }
  ];
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
      <Hamburger state={state} toggleState={toggle} />
      <div
        className={
          "menu-container " + (state ? "menu-expanded" : "menu-collapsed")
        }
      />
      <ul>
        {trail.map(({ x, height, ...rest }, index) => (
          <li>
            <animated.div
              key={links[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}>
              <animated.div>
                <NavLink
                  style={{ height }}
                  key={links[index]}
                  exact={links[index].exact}
                  activeClassName="route-active"
                  onClick={closeMenu}
                  to={links[index].to}>
                  {links[index].title}
                </NavLink>
              </animated.div>
            </animated.div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
