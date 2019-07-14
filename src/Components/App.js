import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Index from "../Routes/Index";
import About from "../Routes/About";
import Nav from "./Nav";

const Container = styled.div`
  background: red;
`;

function App() {
  return (
    <div className="App">
      <Container />
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
