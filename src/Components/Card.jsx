import React from "react";

import "./style/card.scss";
import Typography from "./Typography";

const Card = props => {
  return (
    <div className="card-container">
      <section className="top">
        <div
          className="card-shadow"
          style={{
            backgroundColor: props.shadow
          }}
        />

        <Typography type="h1" style={{ color: props.h1Color }}>
          {props.title}
        </Typography>
        <div className="img">
          <img className="" src={props.img} alt={props.alt} />
        </div>
        <Typography className="h3" type="h3" style={{ color: props.h3Color }}>
          {props.subtitle}
        </Typography>
      </section>

      <section className="bottom">
        <div className="body">{props.children}</div>
      </section>
    </div>
  );
};

export default Card;
