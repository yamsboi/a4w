import React, { useState, useRef, useLayoutEffect } from "react";

import Typography from "../Typography";
import Image from "../Image";
import PriceTable from "../PriceTable";
import Accordion from "../Accordion/Accordion";
import { useSpring, animated } from "react-spring";
import { useScrollPosition } from "../hooks/useScrollPosition";

const FillersRoute = () => {
  const [elementPosition, setElementPosition] = useState();
  const elementRef = useRef();
  const opacity = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setElementPosition(currPos.y.toFixed());
      console.log(currPos.y);
    },
    [],
    elementRef,
    true
  );

  useLayoutEffect(
    () =>
      setElementPosition(
        elementRef.current.getBoundingClientRect().y.toFixed()
      ),
    []
  );

  return (
    <React.Fragment>
      <div className="treatment__image">
        <Image
          className="image"
          src="https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div className="treatment__image">
        <Image
          className="image"
          src="https://images.pexels.com/photos/1778821/pexels-photo-1778821.jpeg?cs=srgb&dl=attractive-beautiful-beauty-1778821.jpg&fm=jpg"
        />
      </div>

      <animated.div style={opacity} className="treatment__catchphrase">
        <Typography type="headline">
          Fyll ut dina läppar eller rynkor med biologiskt nedbrytbara sprutor.
        </Typography>
      </animated.div>
      <div
        ref={elementRef}
        style={{
          marginTop: `${elementPosition / 5}px`
        }}>
        <Typography type="body">
          Behandlingen ger en omedelbar utfyllnad av rynkor eller konturer i
          ditt ansikte. Vi använder oss av gelen Restylane/Juvederm för att
          temporärt fylla ut dina rynkor eller läppar. Gelen är som sagt
          biologiskt nedbrytbar och orsakar inga allergiska reaktioner utan
          anpassar sig efter dina naturliga vävnader. Juvederm är ett erkänt och
          ledande varumärke ur ett globalt perspektiv och har använts vid över
          16 miljoner fillerbehandlingar för ansiktet. Med fillers kan du
          reducera och släta ut ansiktslinjer, rynkor och veck men även skapa
          tydligare definition av munnen och ansiktsformen.
        </Typography>
      </div>
      <div className="treatment__accordion">
        <Accordion>
          <div title="Före behandling">
            <Typography type="body">
              Kom osminkad. Undvik att ta preparat som ökar
              blödningsbenägenheten före behandlingen (ex Treo, Voltaren). Dessa
              preparat ökar risken att du får blåmärken efter injektionen.
            </Typography>
          </div>
          <div title="Efter behandling">
            <Typography type="body">
              Fysisk träning rekommenderas inte det närmaste dygnet efter
              behandling. Gnugga inte på det behandlade området ett dygn
              efterbehandling. Avstå från smink på det behandlade området ett
              dygn efter behandling.
            </Typography>
          </div>
          <div title="Eventuella biverkningar">
            <Typography type="body">
              De vanligaste biverkningarna är huvudvärk, hudrodnad och svullnad.
              Biverkningar kommer oftast de första dagarna efter injektionen och
              är övergående. Kontakta mig eller din läkare vid tecken på oönskad
              effekt.
            </Typography>
          </div>
        </Accordion>
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
