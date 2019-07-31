import React from "react";
import "./style/container.scss";
const Container = props => {
  return (
    <div className="container" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
};

export default Container;
