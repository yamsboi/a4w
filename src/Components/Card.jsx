import React, { useState } from "react";
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
          <img src={props.img} alt={props.alt} />
        </div>
      </div>

      <div className="bottom">
        <div className="body">
          <Typography type="h3"> Subtitle </Typography>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
