import React from "react";

import Card from "../Card";
import Typography from "../Typography";

import { useSpring, animated as a } from "react-spring";
import posed from "react-pose";

function Index() {
  const welcome = [
    "Behandlingar med Botox och fillers som utförs av en",
    "legitimerad sjuksköterska som är certifierad av",
    "MyBeautyAcademy. Hembesök är möjligt och kan",
    "diskuteras via email eller telefon."
  ];
  const DescContainer = posed.div({
    enter: { staggerChildren: 50, delayChildren: 300, staggerDirection: -1 }
  });

  const Description = posed.span({
    enter: {
      y: 0,
      opacity: 1,

      transition: {
        y: { type: "spring", stiffness: 1000, damping: 40 },
        default: { duration: 400 }
      }
    },
    exit: { y: 20, opacity: 0 }
  });
  const sentence = welcome.map(word => (
    <Description key={word}>{word}</Description>
  ));

  const spring = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(50px)" }
  });
  return (
    <React.Fragment>
      <a.section style={spring} className="intro">
        <DescContainer key={"welcome"}>
          <Typography type="body">{sentence}</Typography>
        </DescContainer>
      </a.section>

      {/* CARD 1  */}
      <Card
        img="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Fillers"
        alt="Placeholder"
        subtitle="Fillers"
        to="/behandlingar/fillers">
        <Typography type="headline">
          Fyll dina
          <ul className="fillers__treatments__list">
            <li>läppar</li>
            <li>nasalbialväck</li>
            <li>rynkor</li>
          </ul>
        </Typography>
        <Typography type="body">
          Fyll ut dina läppar eller rynkor med biologiskt nedbrytbara sprutor
        </Typography>
      </Card>

      {/* CARD 2 */}
      <Card
        img="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
        title="Botox"
        alt="Botox"
        subtitle="Botox"
        to="/behandlingar/botox">
        <Typography type="headline">Slappna av i ansiktet med Botox</Typography>
        <Typography type="body">
          Botox används för att ta bort eller motverka rynkor - botox
          kompletterar fillers på ett fantastiskt sätt
        </Typography>
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
