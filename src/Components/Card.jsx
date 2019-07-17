import React from "react";
import "./style/card.scss";

import Typography from "./Typography";

function Card(props) {
  return (
    <div className="card-container">
      <div className="top">
        <Typography
          type="h1"
          style={{ backgroundColor: props.bg, color: props.text }}
        >
          {props.title}
        </Typography>

        <div className="img">
          <img className="" src={props.img} alt={props.alt} />
        </div>
        <Typography className="h3" type="h3">
          {props.subtitle}
        </Typography>
      </div>
      <div className="bottom">
        <div className="body">
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
