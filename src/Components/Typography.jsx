import React from "react";
import PropTypes from "prop-types";
import "./style/typography.scss";

const Typography = props => {
  const DynamicTag = `${props.type}`;

  switch (props.type) {
    case "headline":
      return (
        <h2 className="headline" style={{ textAlign: props.align }}>
          {props.children}
        </h2>
      );
    case "subhead":
      return (
        <h3 className="subhead" style={{ textAlign: props.align }}>
          {props.children}
        </h3>
      );

    case "body":
      return <p className="body">{props.children}</p>;
    default:
      return (
        <DynamicTag className={props.className} style={props.style}>
          {props.children}
        </DynamicTag>
      );
  }
};

export default Typography;

Typography.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string
};
