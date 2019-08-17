import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  return <img className="image" src={props.src} alt={props.alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
