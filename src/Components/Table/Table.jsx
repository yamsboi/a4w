import React from "react";
import "../style/table.scss";

const Table = props => {
  return <table>{props.children}</table>;
};

export default Table;
