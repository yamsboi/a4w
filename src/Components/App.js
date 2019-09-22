import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./Routes/Index";
import Treatments from "./Routes/Treatments";
import ScrollToTop from "./Routes/ScrollToTop";

import HTTP404 from "./Routes/404";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer.jsx";

import "./style/App.scss";

const App = () => (
  <>
    <Nav />
    <ScrollToTop>
      <main>
        <Switch>
          <Route path="/" exact component={Index} title="Home" />
          <Route path="/behandlingar" component={Treatments} />
          <Route component={HTTP404} />
        </Switch>
      </main>
    </ScrollToTop>

    <Footer />
  </>
);

export default App;
