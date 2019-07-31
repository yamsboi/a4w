import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.scss";
import Index from "./Routes/Index";
import TreatmentsRoute from "./Routes/Treatments";
import Components from "./Routes/Components";
import BotoxRoute from "./Routes/Botox";
import FillersRoute from "./Routes/Fillers";
import ScrollToTop from "./Routes/ScrollToTop";

import HTTP404 from "./Routes/404";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Nav />
          <main>
            <section className="content">
              <Switch>
                <Route path="/" exact component={Index} title="Home" />
                <Route path="/behandlingar/" component={TreatmentsRoute} />
                <Route path="/components/" component={Components} />
                <Route path="/botox/" component={BotoxRoute} />
                <Route path="/fillers/" component={FillersRoute} />
                <Route component={HTTP404} />
              </Switch>
            </section>
          </main>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
