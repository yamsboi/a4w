import React from "react";
import Button from "../Button";
import Typography from "../Typography";
import Container from "../Container";
import Accordion from "../Accordion/Accordion";
import Card from "../Card";
const BotoxRoute = () => {
  return (
    <React.Fragment>
      <Card
        shadow="#ff0000"
        img="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
      />
      <Container>
        <Typography type="subhead">Botox</Typography>
        <Typography type="headline">
          Idag finns det ingen bättre behandlingsform än botox för att ta bort
          eller motverka rynkor – botox kompletterar fillers på ett fantastiskt
          sätt.
        </Typography>
      </Container>
      <Button float="right" to="/" text="BOKA TID" />

      <Container>
        <div>
          <Accordion title="Botox liten (15 enheter)">
            <div className="accordion__info">
              <strong>Pris</strong>
              <p>420 kr</p>
            </div>
            <div className="accordion__info">
              <strong>Behandlingstid</strong>
              <p>30 min</p>
            </div>
            <p>
              Passar bra för mindre områden mellan ögonen eller sidan om ögonen.
            </p>
          </Accordion>
          <Accordion title="Botox stor (25 enheter)">
            <div className="accordion__info">
              <strong>Pris</strong>
              <p>420 kr</p>
            </div>
            <div className="accordion__info">
              <strong>Behandlingstid</strong>
              <p>30 min</p>
            </div>
            <p>
              Passar bra för mindre områden mellan ögonen eller sidan om ögonen.
            </p>
          </Accordion>
          <Accordion title="Efterbehandling">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Accordion>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BotoxRoute;
