import React from "react";
import Typography from "../Typography";

function About() {
  return (
    <div>
      <h2>About</h2>
      <Typography type="h1" className="route-title">
        Components
      </Typography>
      <Typography type="h1">Header 1</Typography>
      <Typography type="h2">Header 2</Typography>
      <Typography type="h3">Header 3</Typography>
      <Typography type="h4">Header 4</Typography>
      <Typography type="h5">Header 5</Typography>
      <Typography type="h6">Header 6</Typography>
      <Typography type="p">Body</Typography>
      <Typography type="a" href="https://www.youtube.com">
        This is a link
      </Typography>
    </div>
  );
}

export default About;
