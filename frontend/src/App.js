import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AtestClaim from "./components/attest/Attest";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/attest/:id" component={AtestClaim} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
