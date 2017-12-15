import React, { Component } from "react";
import "./JumboTron.css";
import ReactRevealText from "react-reveal-text";
// Bootstrap
import { Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

class JumboTron extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }
  render() {
    return (
      <Col xs={12} className="JumboTron nopadding">
        <div>
          <div className="title2" />
          <div className="describe">
            <ReactRevealText show={this.state.show}>
              Providing packaging for the entertainment industry.
            </ReactRevealText>
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <div className="jumboItem1" />
            <Carousel.Caption>
              <h3>5 Axis Machining</h3>
              <p>
                Our engineers and machinists use the latest technology to create
                your products as quickly and efficiently as possible.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="jumboItem2" />
            <Carousel.Caption>
              <h3>Rapid Prototyping</h3>
              <p>
                Using 3D printing we can take your concept and create a solid
                model extremely quickly
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="jumboItem3" />
            <Carousel.Caption>
              <h3>Design</h3>
              <p>
                Product not quite ready to manufacture? Let our engineers help
                to make your idea into a reality
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    );
  }
}

export default JumboTron;
