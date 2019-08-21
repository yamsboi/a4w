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
      <Card
        img="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Fillers"
        alt="Placeholder"
        subtitle="Fillers">
        <Typography type="headline">
          Fyll dina läppar, nasalbialväck, ögonlock
        </Typography>

        <Button to="/fillers" float="right" text="läs mer" />
      </Card>
      <Card
        img="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
        title="Botox"
        alt="Botox"
        subtitle="Botox">
        <Typography type="headline">
          Slappna av i ansiktet med hjälp av Botox
        </Typography>
        <Button to="/botox" float="right" text="läs mer" />
      </Card>

      {/* 
      <Container>
        <PriceTable />
      </Container>
*/}
    </React.Fragment>
  );
}

export default Index;
