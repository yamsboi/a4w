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
    <table className="accordion">
      <tbody>
        {React.Children.map(children, (child, i) => (
          <tr
            className={`accordion__section ${
              activeItem === i ? "accordion__active" : ""
            }`}
            key={i}>
            <th className="accordion__title" onClick={() => setItem(i)}>
              <Typography type="subhead">{child.props.title}</Typography>
              <Chevron
                className={
                  activeItem === i
                    ? "accordion__icon rotate"
                    : "accordion__icon"
                }
                width={10}
                fill={"#000"}
              />
            </th>
            <td
              ref={content}
              className="accordion__content"
              style={{
                maxHeight:
                  activeItem === i ? `${content.current.scrollHeight}px` : "0px"
              }}>
              {child}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Accordion;
