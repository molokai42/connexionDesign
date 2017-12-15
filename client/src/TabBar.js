import React from "react";
import "./TabBar.css";

import { Link } from "react-router";
import { Col } from "react-bootstrap";

var TabBar = React.createClass({
  getInitialState: function() {
    return {
      selected: ""
    };
  },

  setSelected: function(value) {
    this.setState({ selected: value });
  },

  isActive: function(value) {
    return value === this.state.selected
      ? "active tab leftBottomBorder"
      : "tab leftBottomBorder";
  },

  render() {
    return (
      <Col xs={12} className="TabBar noPadding" data-margin-top="50">
        <Link to="/Products">
          <Col
            xs={3}
            className={this.isActive("")}
            onClick={this.setSelected.bind(this, "")}
          >
            Products
          </Col>
        </Link>
        <Link to="/About/About">
          <Col
            xs={3}
            className={this.isActive("About")}
            onClick={this.setSelected.bind(this, "About")}
          >
            About
          </Col>
        </Link>
        <Link to="/">
          <Col
            xs={3}
            className={this.isActive("Products")}
            onClick={this.setSelected.bind(this, "Products")}
          >
            Services
          </Col>
        </Link>
        <Link to="/Contact">
          <Col
            xs={3}
            className={this.isActive("Contact")}
            onClick={this.setSelected.bind(this, "Contact")}
          >
            Contact
          </Col>
        </Link>
      </Col>
    );
  }
});

export default TabBar;
