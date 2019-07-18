import React from "react";
import PropTypes from "prop-types";
import "../style/hamburger.scss";

const Hamburger = props => {
  return (
    <div onClick={props.toggleState} className="hamburger">
      <p className="hamburger-text">{props.state ? "CLOSE" : "MENU"}</p>
    </div>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  state: PropTypes.bool,
  toggleState: PropTypes.func
};
