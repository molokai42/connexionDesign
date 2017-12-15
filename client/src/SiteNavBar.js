import React, { Component } from "react";
import "./SiteNavBar.css";

// Bootstrap
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router";

import Contact from "./Contact";

import { Col } from "react-bootstrap";

class SiteNavBar extends Component {
  render() {
    return (
      <div className="SiteNavBar">
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="nav_bg">
            <Nav pullRight>
              <NavItem eventKey={1}>
                <Link to="/Products" className="transparent_grn">
                  Products
                </Link>
              </NavItem>

              <NavItem eventKey={2}>
                <Link to="/Contact" className="transparent_grn">
                  Contact
                </Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to="/About/About" className="transparent_grn">
                  About
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SiteNavBar;
