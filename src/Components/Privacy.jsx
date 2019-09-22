import React, { useState } from "react";
import posed from "react-pose";

const PrivacyBar = posed.div({
  open: { y: "0%", opacity: 1 },
  closed: { y: "100%", opacity: 0 }
});

const Privacy = () => {
  const [state, setState] = useState(true);
  console.log(state);
  return (
    <PrivacyBar pose={state ? "open" : "closed"} className="privacy">
      <p>we value your privacy</p>
      <div onClick={() => setState(!state)}>X</div>
    </PrivacyBar>
  );
};

export default Privacy;
