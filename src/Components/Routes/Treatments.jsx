import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useTrail, animated as a } from "react-spring";
import posed, { PoseGroup } from "react-pose";

import BotoxRoute from "./Botox";
import FillersRoute from "./Fillers";

const pages = [
  {
    name: "Botox",
    id: "botox",
    component: BotoxRoute
  },
  {
    name: "Fillers",
    id: "fillers",
    component: FillersRoute
  }
];

function Page({ match, ...props }) {
  const page = pages.find(({ id }) => id === match.params.pageID);
  return <page.component {...props} />;
}

function Treatments({ match }) {
  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(pages.length, {
    config,
    from: { opacity: 0.5, x: 50, height: "0", delay: 2000 },
    to: { opacity: 1, x: 0, height: "auto" }
  });

  const RoutesContainer = posed.aside({
    enter: {
      beforeChildren: true
    },
    exit: {}
  });

  return (
    <Route
      render={({ location }) => (
        <React.Fragment>
          <PoseGroup>
            <RoutesContainer key={location.key}>
              <ul className="treatments__links">
                {trail.map(({ x, height, ...rest }, index) => (
                  <a.li key={pages[index].id}>
                    <NavLink to={`${match.url}/${pages[index].id}`}>
                      <svg
                        style={{ width: "10vw", height: "10vw" }}
                        viewBox="0 0 24 24">
                        <path
                          fill="#000000"
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                        />
                      </svg>

                      <a.h1
                        style={{
                          ...rest,
                          transform: x.interpolate(
                            x => `translate(-${x}px,0px)`
                          )
                        }}>
                        {pages[index].name}
                      </a.h1>
                    </NavLink>
                  </a.li>
                ))}
              </ul>

              <Switch location={location}>
                <Route
                  path={`${match.path}/:pageID`}
                  render={routeProps => <Page {...routeProps} text=" -" />}
                />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </React.Fragment>
      )}
    />
  );
}

export default Treatments;
