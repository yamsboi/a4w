import React from "react";
import PropTypes from "prop-types";
import posed from "react-pose";

import "./style/image.scss";

const ImgContainer = posed.img({
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 500 }
    }
  },
  exit: {
    scale: 1.2,
    opacity: 0,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 700 }
    }
  }
});

function Image({ src, transition }) {
  return transition ? (
    <div className="image__container">
      <ImgContainer alt="" src={src} />
    </div>
  ) : (
    <div className="image__container">
      <img alt="" src={src} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
