import React from "react";
import PropTypes from "prop-types";
import "../style/hamburger.scss";

const Hamburger = props => {
  return (
    <button onClick={props.toggleState} className="hamburger">
      <p className="hamburger-text">{props.state ? "Close" : "Menu"}</p>
    </button>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  state: PropTypes.bool,
  toggleState: PropTypes.func
};
