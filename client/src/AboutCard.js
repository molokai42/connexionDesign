import React, { Component } from 'react';
import './AboutCard.css';

// Bootstrap
import { Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router';
import './AboutCard.css';

class Consulting extends Component {
  render() {
    return (
        <Col xs={12} className="AboutCard noPadding">
            <Col xs={12}>
                <div className="subTitle titleFont">
                    Connexion Design
                </div>
                <Col xs={12} xsOffset={0} sm={8} smOffset={2} className="consultingText subDescription">
                 Years of experience providing the Entertainment Industry with power.
                </Col>
            </Col>
            <Col xs={12} md={10} mdOffset={1} className="carouselSteps noPadding">
                <Carousel>
                    <Carousel.Item>
                        <div className="step1">

                        </div>
                        <Carousel.Caption>
                            <h3 className="black">Providing Solutions for all your power related needs.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="step2">
                        </div>
                        <Carousel.Caption>
                            <h3>Over 25 years experience involved in Broadcasting and Production.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="step3">
                        </div>
                        <Carousel.Caption>
                            <h3>Tried and True method of delivering quality products that can be customized to meet all your needs.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
          

           <Col xs={12} xsOffset={0} sm={8} smOffset={2} className="consultingText subDescription">
                <Link to="/About"><u>Learn More</u>
                </Link>
                </Col>
        </Col>
    );
  }
}

export default Consulting;
