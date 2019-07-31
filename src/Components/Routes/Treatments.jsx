import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "../Typography";

const TreatmentsRoute = () => (
  <React.Fragment>
    <NavLink to="/botox">
      <h1>Botox</h1>
    </NavLink>
    <NavLink to="/fillers">
      <h1>Fillers</h1>
    </NavLink>
    <hr />
    <Typography type="h2">Header 2</Typography>
    <Typography type="h3">Header 3</Typography>
    <Typography type="h4">Header 4</Typography>
    <Typography type="h5">Header 5</Typography>
    <Typography type="h6">Header 6</Typography>
    <Typography type="p">Body</Typography>
    <Typography type="a" href="https://www.youtube.com">
      This is a link
    </Typography>
    >
  </React.Fragment>
);

export default TreatmentsRoute;
