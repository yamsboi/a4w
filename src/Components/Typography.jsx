import React from "react";
import PropTypes from "prop-types";

function Typography(props) {
  const DynamicTag = `${props.type}`;

  return props.type === "a" ? (
    <DynamicTag href={props.href}>{props.children}</DynamicTag>
  ) : (
    <DynamicTag>{props.children}</DynamicTag>
  );
}

export default Typography;

Typography.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string
};
