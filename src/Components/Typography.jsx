import React from "react";
import PropTypes from "prop-types";
import "./style/typography.scss";

const Typography = props => {
  const DynamicTag = `${props.type}`;

  return (
    <DynamicTag className={props.className} style={props.style}>
      {props.children}
    </DynamicTag>
  );
};

export default Typography;

Typography.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string
};
