import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Index from "./Routes/Index";
import About from "./Routes/About";
import Components from "./Routes/Components";
import HTTP404 from "./Routes/404";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Nav />

          <section className="content">
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
              <Route path="/components/" component={Components} />
              <Route component={HTTP404} />
            </Switch>
          </section>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
