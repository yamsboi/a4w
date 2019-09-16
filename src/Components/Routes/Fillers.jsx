import React, {
  /* useState, useRef, useLayoutEffect, */ useEffect
} from "react";

import Typography from "../Typography";
import Image from "../Image";
import Accordion from "../Accordion/Accordion";
// import { useScrollPosition } from "../hooks/useScrollPosition";
import posed from "react-pose";

const FillersRoute = () => {
  // const [elementPosition, setElementPosition] = useState();
  // const elementRef = useRef();
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
  const sentence = words.map(word => <span key={word}>{word}&nbsp;</span>);

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     setElementPosition(currPos.y.toFixed());
  //     console.log(currPos.y);
  //   },
  //   [],
  //   elementRef,
  //   true
  // );

  // useLayoutEffect(
  //   () =>
  //     setElementPosition(
  //       elementRef.current.getBoundingClientRect().y.toFixed()
  //     ),
  //   []
  // );

  useEffect(() => {
    console.log("Fillers mounted");
  }, []);

  const P = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        default: { duration: 500 }
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        default: { duration: 700 }
      }
    }
  });

  const Fade = posed.div({
    enter: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  });

  return (
    <React.Fragment>
      <div className="treatment__image">
        <Image
          transition={true}
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
        <P>
          <Typography type="headline">{sentence}</Typography>
        </P>
      </div>
      <Fade
      // ref={elementRef}
      // style={{
      //   marginTop: `${elementPosition / 6}px`
      // }}
      >
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
      </Fade>
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
