import React from "react";
import PropTypes from "prop-types";
import "../style/hamburger.scss";
import { useSpring, animated } from "react-spring";

const Hamburger = props => {
  const widthAnimation = useSpring({
    width: props.state ? 5 : 48
  });

  return (
    <animated.button onClick={props.toggle} className="hamburger">
      <h2 className="hamburger-text">{props.state ? "Close" : "Menu"}</h2>
      <animated.span className="underline" style={widthAnimation} />
    </animated.button>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  state: PropTypes.bool,
  toggleState: PropTypes.func
};
