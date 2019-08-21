import React from "react";
import { NavLink, Route } from "react-router-dom";
import { useTrail, animated } from "react-spring";
import BotoxRoute from "./Botox";
import FillersRoute from "./Fillers";

// styling in nav.scss
const treatments = [
  {
    name: "Botox",
    id: "botox",
    component: <BotoxRoute />
  },
  {
    name: "Fillers",
    id: "fillers",
    component: <FillersRoute />
  }
];

function Treatment({ match }) {
  const treatment = treatments.find(
    ({ id }) => id === match.params.treatmentId
  );

  return <React.Fragment>{treatment.component}</React.Fragment>;
}

function Treatments({ match }) {
  //React-Spring
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(treatments.length, {
    config,
    from: { opacity: 0.5, x: 40, height: "0", delay: 2000 },
    to: { opacity: 1, x: 0, height: "auto" }
  });

  return (
    <React.Fragment>
      <ul className="treatments__links">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.li key={treatments[index].id}>
            <NavLink to={`${match.url}/${treatments[index].id}`}>
              <svg
                style={{ width: "10vw", height: "10vw" }}
                viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>

              <animated.h1
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                }}>
                {treatments[index].name}
              </animated.h1>
            </NavLink>
          </animated.li>
        ))}
      </ul>

      <Route path={`${match.path}/:treatmentId`} exact component={Treatment} />
    </React.Fragment>
  );
}

export default Treatments;
