import React, { Component } from "react";
import "./productIntro.css";
import { Link } from "react-router";

// Bootstrap
import { Col } from "react-bootstrap";
import Thumbnail from "./Thumbnail";

class productIntro extends Component {
  render() {
    return (
      <Col xs={12} className="productIntro noPadding">
        <Col xs={12} md={4}>
          <div className="subTitle titleFont">Need Resources?</div>
          <div className="subDescription padding">
            We have developed a wide range of products to meet all of your power
            related needs.
          </div>

          {/*<Link to="/Exterior">
                    <div className="subButton"><span className="pastProjectsButton">Past Projects</span></div>
                </Link>*/}
          <Link to="#Contact">
            <div className="subButton padding">
              <span className="contactUsButton">Contact Us</span>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={8}>
          <Col xs={12} md={6} l={6}>
            <Thumbnail image="/img/cd_products/powerCaddyOrig.jpg" />
          </Col>
          <Col xs={12} md={6} l={6}>
            <Thumbnail image="/img/cd_products/bncQuad1.jpg" />
          </Col>
          <Col xs={12} md={6} l={6}>
            <Thumbnail image="/img/cd_products/abPowerDIst2.jpg" />
          </Col>
          <Col xs={12} md={6} l={6}>
            <Thumbnail image="/img/cd_products/OEMbatteryMount.jpg" />
          </Col>
        </Col>
      </Col>
    );
  }
}

export default productIntro;
