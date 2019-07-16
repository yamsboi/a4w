import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Index from "./Routes/Index";
import About from "./Routes/About";
import Components from "./Routes/Components";
import Nav from "./Nav/Nav";
import Typography from "./Typography";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />

          <section className="content">
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/components/" component={Components} />
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
