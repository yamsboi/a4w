import React from "react";
import Typography from "../Typography";
import Card from "../Card";

function Components() {
  return (
    <div>
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
      <Card
        img="https://www.apiaviation.com/wp-content/uploads/professionalism-in-aviation-personnel.jpg"
        title="Professionalism"
        alt="Placeholder"
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Card>
    </div>
  );
}

export default Components;
