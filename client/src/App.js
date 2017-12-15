import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import "./App.css";
import Splash from "./Splash";
import Main from "./Main";
import About from "./About/About";
import Products from "./Products";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Splash}>
          <Route path="/" component={Main} />
          <Route path="About" component={About} />
          <Route path="Products" component={Products} />
          <Route path="Contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}

export default App;
