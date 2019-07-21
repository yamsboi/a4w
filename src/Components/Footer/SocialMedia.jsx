import React from "react";

const SocialMedia = props => {
  return (
    <li>
      <a href={props.href}>
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path fill={props.fill} d={props.d} />
        </svg>
      </a>
    </li>
  );
};

export default SocialMedia;
