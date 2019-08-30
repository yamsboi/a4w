import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

import "./style/image.scss";

const Image = props => {
  const spring = useSpring({
    to: { height: "100%" },
    from: { height: "70%" }
  });

  const zoom = useSpring({
    to: { transform: "scale(1)" },
    from: { transform: "scale(1.2)" }
  });

  return (
    <animated.div style={spring} className="image__container">
      <img className="image" style={zoom} src={props.src} alt="" />
    </animated.div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
