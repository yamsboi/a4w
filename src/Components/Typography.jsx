import React from "react";
import PropTypes from "prop-types";
import "./style/typography.scss";

const Typography = props => {
  const DynamicTag = `${props.type}`;

  switch (props.type) {
    case "title":
      return <h3 className="h3-title">{props.children}</h3>;

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
