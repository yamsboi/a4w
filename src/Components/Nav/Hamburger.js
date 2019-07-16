import React from "react";

const Hamburger = props => {
  return (
    <div onClick={props.toggleState} className="hamburger">
    MENU
    </div>
  );
};

export default Hamburger;
