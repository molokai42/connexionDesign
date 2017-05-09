import React, { Component } from 'react';
import './productJumbotron.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6


// Bootstrap
import { Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

class productJumbotron extends Component {
  render() {
    return (
        <Col xs={12} className="productJumboTron nopadding">
         
            <Carousel>
                <Carousel.Item>
                    <div className="prodrucTron1">

                    </div>
                    <Carousel.Caption>
                        <h3>AB Power Distribution</h3>
                       // <p>Our engineers and machinists use the latest technology to create your products as quickly and efficiently as possible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="jumboItem2">
                    </div>
                    <Carousel.Caption>
                        <h3>BNC Quad Connector</h3>
                 //       <p>Using 3D printing we can take your concept and create a solid model extremely quickly</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="jumboItem3">
                    </div>
                    <Carousel.Caption>
                        <h3>Power Caddy</h3>
                       // <p>Product not quite ready to manufacture? Let our engineers help to make your idea into a reality</p>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item>
                    <div className="jumboItem4">
                    </div>
                    <Carousel.Caption>
                        <h3>12 gig Optical Connector</h3>
                      //  <p>Product not quite ready to manufacture? Let our engineers help to make your idea into a reality</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Col>
        
    );
  }
}

export default productJumbotron;
