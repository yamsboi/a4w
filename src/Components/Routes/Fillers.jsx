import React from "react";

import Typography from "../Typography";
import Image from "../Image";
import PriceTable from "../PriceTable";
import Accordion from "../Accordion/Accordion";

const FillersRoute = () => {
  return (
    <React.Fragment>
      <div className="treatment__image">
        <Image
          className="image"
          src="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div className="treatment__info">
        <Typography type="headline">
          Fyll ut dina läppar eller rynkor med biologiskt nedbrytbara sprutor.
        </Typography>
      </div>

      <div className="treatment__accordion">
        <Accordion>
          <div title="Fillers Juvederm liten (0.5ml)">
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
          </div>
          <div title="Fillers Juvederm stor (1ml)">
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
          </div>
          <div title="Efterbehandling">
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
          </div>
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export default FillersRoute;
