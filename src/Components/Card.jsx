import React from "react";

import "./style/card.scss";
import Typography from "./Typography";
import Image from "./Image";

const Card = props => {
  return (
    <div className="card-container">
      <h1 className="card__title">{props.title}</h1>

      <section className="top">
        <Image src={props.img} />
      </section>

      <section className="bottom">{props.children}</section>
    </div>
  );
};

export default Card;
