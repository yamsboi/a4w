import React from "react";
import "./style/quote.scss";

const Quote = props => {
  return (
    <div className="treatment__quote">
      <div className="quote__mark">“</div>
      {props.children}
      <div className="quote__mark">”</div>
    </div>
  );
};

export default Quote;
