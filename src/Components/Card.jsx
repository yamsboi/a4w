import React, { useState, useRef } from "react";

import "./style/card.scss";
import Image from "./Image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Card(props) {
  const [elementPosition, setElementPosition] = useState(300);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) => {
      console.log(currPos);
      setElementPosition(currPos.y / 2);
    },
    [],
    elementRef
  );

  return (
    <div className="card-container">
      <h1
        ref={elementRef}
        className="card__title"
        style={{
          transform: `translate( ${elementPosition - 300}px, -50% )`
        }}>
        {props.title}
      </h1>

      <section className="top">
        <Image src={props.img} />
      </section>

      <section className="bottom">{props.children}</section>
    </div>
  );
}

export default Card;
