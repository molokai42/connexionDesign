import React, { Component } from "react";
import "./Main.css";

import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

// Bootstrap
import { Col } from "react-bootstrap";

// Custom
import Services from "./Services";
import Contact from "./Contact";
import ProductIntro from "./productIntro";
import AboutCard from "./About/AboutCard";
import JumboTron from "./JumboTron";

class Main extends Component {
  render() {
    return (
      <Col xs={12} className="Main noPadding">
        <ReactCSSTransitionGroup
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionAppearTimeout={300}
        >
          <JumboTron />
          <Col xs={10} xsOffset={1} className="separator" id="JumboTron" />
          <Services className="red" />
          <Col xs={10} xsOffset={1} className="separator" id="ProductIntro" />
          <ProductIntro />
          <Col xs={10} xsOffset={1} className="separator" id="AboutCard" />
          <AboutCard />
          <Col xs={10} xsOffset={1} className="separator" id="Contact" />
          <Contact />
        </ReactCSSTransitionGroup>
      </Col>
    );
  }
}

export default Main;
