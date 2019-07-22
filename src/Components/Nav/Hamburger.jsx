import React from "react";
import PropTypes from "prop-types";
import "../style/hamburger.scss";
import { useSpring, animated } from "react-spring";

const Hamburger = props => {

  const widthAnimation = useSpring({
    width: props.state ? 0 : 48,
  });

  return (
    <animated.button onClick={props.toggle} className="hamburger" >
      <p className="hamburger-text">{props.state ? "Close" : "Menu"}</p>
        <animated.span className="underline" style={ widthAnimation } ></animated.span> 
    </animated.button>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  state: PropTypes.bool,
  toggleState: PropTypes.func
};