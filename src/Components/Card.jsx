import React, { useState, useRef, useLayoutEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import "./style/card.scss";
import Image from "./Image";

function Card(props) {
  const [elementPosition, setElementPosition] = useState();
  const [offSet, setOffset] = useState(0);
  const elementRef = useRef();

  useLayoutEffect(
    () => (
      setElementPosition(
        elementRef.current.getBoundingClientRect().y.toFixed()
      ),
      setOffset(elementRef.current.offsetTop)
    ),
    []
  );

  //won't work if html tag has overflow: hidden;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      setElementPosition(currPos.y.toFixed());
    },
    [],
    elementRef
  );

  return (
    <div className="card-container" onClick={() => console.log(elementRef)}>
      <h1
        ref={elementRef}
        className="card__title"
        style={{
          transform: `translate( ${elementPosition - offSet - offSet}px, -50% )`
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
