import React from "react";

const TableCell = props => {
  if (props.component === "th") {
    return <th>{props.children}</th>;
  } else {
    return <td>{props.children}</td>;
  }
};

export default TableCell;
