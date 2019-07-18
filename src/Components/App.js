import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Index from "./Routes/Index";
import About from "./Routes/About";
import Components from "./Routes/Components";
import Nav from "./Nav/Nav";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <section className="main">
          <Nav />

          <section className="content">
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/components/" component={Components} />
          </section>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
