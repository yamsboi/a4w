import React from "react";
import Button from "../Button";
import Typography from "../Typography";
import Container from "../Container";
import Accordion from "../Accordion/Accordion";

const BotoxRoute = () => {
  return (
    <React.Fragment>
      <Container>
        <Typography type="subhead">Botox</Typography>
        <Typography type="headline">
          Idag finns det ingen bättre behandlingsform än botox för att ta bort
          eller motverka rynkor – botox kompletterar fillers på ett fantastiskt
          sätt.
        </Typography>
      </Container>
      <Button float="right" to="/" text="BOOK" />

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
