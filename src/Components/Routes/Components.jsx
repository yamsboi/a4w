import React from "react";
import Card from "../Card";
import Button from "../Button";
import Typography from "../Typography";
import Wheel from "../Wheel";
import Container from "../Container";

function Components() {
  return (
    <React.Fragment>
      <Card
        h1Color="rgb(58, 88, 112)"
        h3Color="rgb(169, 85, 37)"
        shadow="rgb(64, 106, 127)"
        img="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
        title="Botox"
        alt="Botox"
        subtitle="Botox">
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>

        <Button to="/" float="right" text="Boka tid" />

        <Container>
          <Typography type="headline">kekek yaman is gay</Typography>
          <Typography type="subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Container>

        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Card>

      <Card
        h3Color="rgba(189, 195, 199, 1)"
        shadow="rgb(176, 176, 176)"
        img="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Futuristic"
        alt="Placeholder"
        subtitle="Artistic">
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Card>
      <Card
        h1Color="rgb(242, 190, 226)"
        h3Color="rgb(229, 128, 176)"
        shadow="rgb(243, 219, 227)"
        img="https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3342&q=80"
        title="Futuristic"
        alt="Placeholder"
        subtitle="Artistic">
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Wheel value="Certifierad av MyBeatyAcademy" />
      </Card>
    </React.Fragment>
  );
}

export default Components;
