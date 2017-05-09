import React, { Component } from 'react';
import './About.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

// Bootstrap
import { Col } from 'react-bootstrap';

import Thumbnail from './Thumbnail';

class About extends Component {
  render() {
    return (
        <Col xs={12} className="AboutPadding">                
            <ReactCSSTransitionGroup
                transitionName="fadein"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionAppearTimeout={300}>
                <Col xs={12} className="subTitle titleFont aboutTitle">
                    About
                </Col>            
              
                <Col xs={12} sm={6} md={6} className="About">
                    <div >Connexion Design has provided the entertainment industry with power for years. We can design, prototype, and manufacture a product from start to finish.  When it comes to manufacturing, no better facilities could be asked for. </div>
                </Col>            
                
            </ReactCSSTransitionGroup>
        </Col>
    );
  }
}

export default About;
