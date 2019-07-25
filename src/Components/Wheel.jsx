import React from "react";
import { useScrollYPosition } from "react-use-scroll-position";

import "./style/wheel.scss";

function Wheel(props) {
  const ScrollY = useScrollYPosition();

  const Y = ScrollY / 1.5;

  var string = props.value;
  const wheel = [];

  for (var i = 0; i < string.length; i++) {
    wheel.push(string[i]);
  }

  return (
    <ul className="wheel" style={{ transform: `rotate(-${Y}deg)` }}>
      {wheel.map((letter, i) => (
        <li key={i}>{letter}</li>
      ))}
    </ul>
  );
}

export default Wheel;
