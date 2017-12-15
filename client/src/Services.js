import React, { Component } from "react";
import "./Services.css";
import { Link } from "react-router";

// Bootstrap
import { Col } from "react-bootstrap";

class Services extends Component {
  render() {
    return (
      <Col xs={12} className="Services noPadding">
        <Col xs={12}>
          <h2 className="subTitle titleFont ">Services</h2>
        </Col>
        <a href="#Products" className="hoverColor">
          <Col xs={12} md={3}>
            <Col xs={12} className="serviceCard">
              <h4 className="serviceTitle">Power Supplies</h4>
              <Col
                xs={8}
                xsOffset={2}
                md={12}
                mdOffset={0}
                className="powerSupply"
              />
              <Col xs={12} className="serviceDescription">
                Providing different size power supplies for all occasions.
              </Col>
            </Col>
          </Col>
        </a>
        <a href="#Contact" className="hoverColor">
          <Col xs={12} md={3}>
            <Col xs={12} className="serviceCard">
              <h4 className="serviceTitle">Prototyping</h4>
              <Col
                xs={8}
                xsOffset={2}
                md={12}
                mdOffset={0}
                className="prototyping"
              />
              <Col xs={12} className="serviceDescription">
                We can help to create a solution for any of your needs.
              </Col>
            </Col>
          </Col>
        </a>
        <a href="#Contact" className="hoverColor">
          <Col xs={12} md={3}>
            <Col xs={12} className="serviceCard">
              <h4 className="serviceTitle">Custom Rack Units</h4>
              <Col
                xs={8}
                xsOffset={2}
                md={12}
                mdOffset={0}
                className="microCircle"
              />
              <Col xs={12} className="serviceDescription">
                Customized electronic rack units made to any specifications.
              </Col>
            </Col>
          </Col>
        </a>
        <Link to="/Products" className="hoverColor">
          <Col xs={12} md={3}>
            <Col xs={12} className="serviceCard ">
              <h4 className="serviceTitle">View All Products</h4>
              <Col
                xs={8}
                xsOffset={2}
                md={12}
                mdOffset={0}
                className="exampleProducts"
              />

              <Col xs={12} className="serviceDescription">
                See what Connexion has to offer.
              </Col>
            </Col>
          </Col>
        </Link>
      </Col>
    );
  }
}

export default Services;
