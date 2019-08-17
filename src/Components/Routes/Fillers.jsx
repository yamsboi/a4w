import React from "react";
import Button from "../Button";
import Typography from "../Typography";
import Container from "../Container";
import Card from "../Card";

import PriceTable from "../PriceTable";
import Accordion from "../Accordion/Accordion";

const FillersRoute = () => {
  return (
    <React.Fragment>
      <div className="treatment__image">
        <Card
          shadow="#bfbfbf"
          img="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div className="treatment__info">
        <Typography type="headline">
          Fyll ut dina läppar eller rynkor med biologiskt nedbrytbara sprutor.
        </Typography>
        <Button to="/" float="right" text="Boka tid" />
      </div>
      <Container>
        <div>
          <Accordion title="Fillers Juvederm liten (0.5ml)">
            <div className="accordion__info">
              <strong>Pris</strong>
              <p>420 kr</p>
            </div>
            <div className="accordion__info">
              <strong>Behandlingstid</strong>
              <p>30 min</p>
            </div>
            <Typography type="body">
              Perfekt för dig som vill testa på. Passar enstaka områden så som
              "arga rynkan" eller för att förtydliga läpparnas konturer.
            </Typography>
          </Accordion>
          <Accordion title="Fillers Juvederm stor (1ml)">
            <div className="accordion__info">
              <strong>Pris</strong>
              <p>420 kr</p>
            </div>
            <div className="accordion__info">
              <strong>Behandlingstid</strong>
              <p>30 min</p>
            </div>
            <Typography type="body">
              Passar för exempelvis nasolabialvecken eller för dig som önskar
              effekten av ökad fyllighet i läpparna.
            </Typography>
          </Accordion>
          <Accordion title="Efterbehandling">
            <PriceTable />
            <p>
              Fysisk träning rekommenderas inte det närmaste dygnet efter
              behandling.
            </p>
            <p>
              Gnugga inte på det behandlade området ett dygn efterbehandling.
            </p>
            <p>
              Avstå från smink på det behandlade området ett dygn efter
              behandling.
            </p>
          </Accordion>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FillersRoute;
