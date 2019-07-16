import React from "react";

const Hamburger = props => {
  return (
    <div onClick={props.toggleState} className="hamburger">
      {props.state ? "CLOSE" : "MENU"}
    </div>
  );
};

export default Hamburger;
