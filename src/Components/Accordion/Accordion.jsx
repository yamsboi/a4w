import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "../style/accordion.scss";

function Accordion({ children }) {
  const [activeItem, setActiveItem] = useState("");
  const content = useRef(null);

  return React.Children.map(children, (child, i) => (
    <div className="accordion__section" key={i}>
      <button
        className={"accordion"}
        onClick={() => setActiveItem(child.props.title)}>
        <p className="accordion__title">{child.props.title}</p>
        <Chevron className={activeItem === child.props.title ? "accordion__icon rotate" : "accordion__icon" } width={10} fill={"#777"} />
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
  ));
}

export default Accordion;
