import React from "react";
import PropTypes from "prop-types";

const Hamburger = props => {
  return (
    <div onClick={props.toggleState} className="hamburger">
      {props.state ? "CLOSE" : "MENU"}
    </div>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  state: PropTypes.bool,
  toggleState: PropTypes.func
};
