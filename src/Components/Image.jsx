import React from "react";
import PropTypes from "prop-types";
import "./style/image.scss";

import { useSpring, animated } from "react-spring";

const Image = props => {
  const spring = useSpring({
    to: { height: "100%" },
    from: { height: "70%" }
  });

  return (
    <animated.div style={spring} className="image__container">
      <img className="image" src={props.src} alt={props.alt} />
    </animated.div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
