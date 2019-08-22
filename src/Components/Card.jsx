import React, { useState, useRef } from "react";

import "./style/card.scss";
import Image from "./Image";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Card(props) {
  const [elementPosition, setElementPosition] = useState({ y: 500 });
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos);
      console.log(currPos.y);
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
          transform: `translate( ${elementPosition.y - 500}px, -50% )`
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
