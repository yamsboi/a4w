import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.scss";
import Index from "./Routes/Index";
import Treatments from "./Routes/Treatments";
import ScrollToTop from "./Routes/ScrollToTop";
import { useSpring, animated } from "react-spring";

import HTTP404 from "./Routes/404";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer.jsx";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Nav />
          <main>
            <animated.section style={{ props }} className="content">
              <Switch>
                <Route path="/" exact component={Index} title="Home" />
                <Route path="/behandlingar" component={Treatments} />
                <Route component={HTTP404} />
              </Switch>
            </animated.section>
          </main>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
