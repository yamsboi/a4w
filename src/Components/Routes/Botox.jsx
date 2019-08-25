import React from "react";

import Typography from "../Typography";
import Accordion from "../Accordion/Accordion";
import Image from "../Image";

const BotoxRoute = () => {
  return (
    <React.Fragment>
      <div className="treatment__image">
        <Image
          className="image"
          src="https://photographymag.tn/wp-content/uploads/2017/08/portrait-photography-inspiration-woman-portrait-redhead-joanna-kustra.jpg"
        />
      </div>

      <div className="treatment__info">
        <Typography type="headline">
          Botox används för att ta bort eller motverka rynkor – botox
          kompletterar fillers på ett fantastiskt sätt.
        </Typography>
      </div>

      {/*
      <Quote>
        <Typography type="body">
          Behandling med Botox används inom både sjukvård och skönhetsvård för
          estetisk rynkbehandling. Den baseras på Botulinumtoxins egenskap att
          blockera frisättning av muskelsammandragande signalsubstans från nerv
          till muskel. Därmed slappnar muskeln av och statiska rynkor slätas ut
          samt dynamiska kan förebyggas. Denna effekt håller i sig ca 3 månader.
          Behandlingsresultatet syns inom en vecka.
        </Typography>
      </Quote>
      */}
      <Typography type="body">
        Botulinumtoxin är ett kraftigt muskelförlamande ämne som har använts
        inom medicinen sedan 1970-talet i många olika sammanhang. Sedan mer än
        tio år tillbaka används det även för korrektion av rynkor i ansiktet
        samt för att motverka arm- och handsvett. När botox sprutas in i
        muskulaturen försvagas mimiken eftersom musklerna inte kan dra ihop sig
        lika mycket. Det medför att veck eller så kallade vredes- eller
        bekymmersrynkor inte uppstår – och att de försvinner på framför allt
        yngre patienter. Behandlingen är snabb, tämligen smärtfri och tar inte
        mer än några minuter att utföra.
      </Typography>
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
