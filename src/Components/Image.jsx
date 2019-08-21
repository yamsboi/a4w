import React from "react";
import PropTypes from "prop-types";
import "./style/image.scss";

const Image = props => {
  return (
    <div className="image__container">
      <img className="image" src={props.src} alt={props.alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
