import React from "react";

import Card from "../Card";
import Typography from "../Typography";
import Button from "../Button";
import Container from "../Container";
import PriceTable from "../PriceTable";

function Index() {
  return (
    <React.Fragment>
      <section className="intro">
        <h2>Aesthetic For Wellness</h2>
        <Typography align="left" type="subhead">
          Behandlingar med Botox och fillers som utförs av legitimerad
          sjuksköterska. Certifierad av MyBeautyAcademy. Hembesök är möjligt och
          kan diskuteras via email eller telefon.
        </Typography>
      </section>

      <Button float="right" to="/" text="BOKA TID" />

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
        <Button to="/botox" float="right" text="läs mer" />
      </Card>
      <Card
        h3Color="rgba(189, 195, 199, 1)"
        shadow="rgb(176, 176, 176)"
        img="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Fillers"
        alt="Placeholder"
        subtitle="Fillers">
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Button to="/fillers" float="right" text="läs mer" />
      </Card>
      <Container>
        <Typography type="headline">kekek yaman is gay</Typography>
        <Typography type="subhead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Container>
      <Typography type="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <Container>
        <PriceTable />
      </Container>
    </React.Fragment>
  );
}

export default Index;
