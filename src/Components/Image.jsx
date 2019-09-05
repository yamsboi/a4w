import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { CSSTransitionGroup } from "react-transition-group"; // ES6

import "./style/image.scss";

const Image = props => {
  const spring = useSpring({
    to: { height: "100%" },
    from: { height: "70%" }
  });

  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <animated.div style={spring} className="image__container">
        <img alt="" src={props.src} />
      </animated.div>
    </CSSTransitionGroup>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
