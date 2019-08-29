import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../Card";
import Typography from "../Typography";

import { useSpring, animated } from "react-spring";

function Index() {
  const spring = useSpring({
    to: { opacity: 1, transform: "translateY(0px)" },
    from: { opacity: 0, transform: "translateY(50px)" }
  });

  return (
    <React.Fragment>
      <animated.section style={spring} className="intro">
        <Typography align="left" type="body">
          Behandlingar med Botox och fillers som utförs av en legitimerad
          sjuksköterska som är certifierad av MyBeautyAcademy. Hembesök är
          möjligt och kan diskuteras via email eller telefon.
        </Typography>
      </animated.section>
      <Card
        img="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Fillers"
        alt="Placeholder"
        subtitle="Fillers">
        <NavLink to="/behandlingar/fillers">
          <Typography type="headline" style={{ display: "flex" }}>
            Fyll dina
            <ul className="fillers__treatments__list">
              <li>läppar</li>
              <li>nasalbialväck</li>
              <li>rynkor</li>
            </ul>
          </Typography>
        </NavLink>
      </Card>
      <Card
        img="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
        title="Botox"
        alt="Botox"
        subtitle="Botox">
        <NavLink to="/behandlingar/botox">
          <Typography type="headline">
            Slappna av i ansiktet med Botox
          </Typography>
        </NavLink>
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
