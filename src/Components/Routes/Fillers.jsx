import React, { useState, useRef, useLayoutEffect } from "react";

import Typography from "../Typography";
import Image from "../Image";
import Accordion from "../Accordion/Accordion";
import { useSpring, useTrail, animated } from "react-spring";
import { useScrollPosition } from "../hooks/useScrollPosition";

const FillersRoute = () => {
  const [elementPosition, setElementPosition] = useState();
  const elementRef = useRef();
  const config = { mass: 5, tension: 2000, friction: 200 };
  const words = [
    "Fyll",
    "ut",
    "dina",
    "läppar",
    "eller",
    "rynkor",
    "med",
    "biologiskt",
    "nedbrytbara",
    "sprutor"
  ];
  const trail = useTrail(words.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 }
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

      <div className="treatment__catchphrase">
        <Typography type="headline">
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.span
              key={words[index]}
              style={{
                ...rest
              }}>
              &nbsp;{words[index]}
            </animated.span>
          ))}
        </Typography>
      </div>
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
    </React.Fragment>
  );
};

export default FillersRoute;
