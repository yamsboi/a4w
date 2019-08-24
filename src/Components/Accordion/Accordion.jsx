import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import Typography from "../Typography";
import "../style/accordion.scss";

function Accordion({ children }) {
  const [activeItem, setActiveItem] = useState("");
  const content = useRef(null);

  function setItem(key) {
    //Checks whether the clicked accordion is already open, if true, it will close, else a new one will open.
    if (key === activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(key);
    }
  }

  return (
    <div className="accordion__container">
      {React.Children.map(children, (child, i) => (
        <div
          className={`accordion__section ${
            activeItem === child.props.title ? "accordion__active" : ""
          }`}
          key={i}>
          <button
            className={"accordion"}
            onClick={() => setItem(child.props.title)}>
            <Typography className="accordion__title" type="headline">
              {child.props.title}
            </Typography>
            <Chevron
              className={
                activeItem === child.props.title
                  ? "accordion__icon rotate"
                  : "accordion__icon"
              }
              width={10}
              fill={"#000"}
            />
          </button>
          <div
            ref={content}
            className="accordion__content"
            style={{
              maxHeight:
                activeItem === child.props.title
                  ? `${content.current.scrollHeight}px`
                  : "0px"
            }}>
            <div className="accordion__text">
              <div className="accordion__children">{child}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
