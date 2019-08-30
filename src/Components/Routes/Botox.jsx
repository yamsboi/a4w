import React, { useState, useRef, useLayoutEffect } from "react";
import Typography from "../Typography";
import Accordion from "../Accordion/Accordion";
import Image from "../Image";

import { useSpring, useTrail, animated } from "react-spring";
import { useScrollPosition } from "../hooks/useScrollPosition";
const BotoxRoute = () => {
  const [elementPosition, setElementPosition] = useState();
  const elementRef = useRef();
  const config = { mass: 5, tension: 2000, friction: 200 };

  const words = [
    "Botox",
    "används",
    "för",
    "att",
    "ta",
    "bort",
    "eller",
    "motverka",
    "rynkor",
    "-",
    "botox",
    "kompletterar",
    "fillers",
    "på",
    "ett",
    "fantastiskt",
    "sätt",
    "."
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
          src="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
        />
      </div>
      <div className="treatment__image">
        <Image
          className="image"
          src="https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?cs=srgb&dl=attractive-beautiful-beauty-2744193.jpg&fm=jpg"
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
          Botulinumtoxin är ett kraftigt muskelförlamande ämne som har använts
          inom medicinen sedan 1970-talet i många olika sammanhang. Sedan mer än
          tio år tillbaka används det även för korrektion av rynkor i ansiktet
          samt för att motverka arm- och handsvett. När botox sprutas in i
          muskulaturen försvagas mimiken eftersom musklerna inte kan dra ihop
          sig lika mycket. Det medför att veck eller så kallade vredes- eller
          bekymmersrynkor inte uppstår – och att de försvinner på framför allt
          yngre patienter. Behandlingen är snabb, tämligen smärtfri och tar inte
          mer än några minuter att utföra.
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

export default BotoxRoute;
