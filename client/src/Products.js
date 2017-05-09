import React, { Component } from 'react';
import './Products.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

/* import Icon from 'react-icons-kit';
    import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
    import { lock } from 'react-icons-kit/fa/lock'; */

// Bootstrap
import { Col } from 'react-bootstrap';
import productJumbotron from './productJumbotron';
import Thumbnail from './Thumbnail';

class Interior extends Component {
  render() {
    return (

        <Col xs={12} className="Interior noPadding">                
            <ReactCSSTransitionGroup
                transitionName="fadein"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionAppearTimeout={300}>
                <div class="container-fluid">
                  <div class="row">
                    <Col xs={12}>
                    <productJumbotron />
                      <Col xs={12} sm={7} md={8}>
                        <Col xs={12} className="connexionProducts">
                          <h1 className="connexionProducts">
                            Products 
                          </h1>
                        </Col> 
                        <Col xs={12} sm={3} md={3}>
                          <img className="thumbnail" src="/img/IMG_2421.JPG" />
                        </Col>            
                        <Col xs={12} sm={6} md={6}>
                          <img className="thumbnail" src="/img/IMG_2379.JPG" />
                        </Col>               
                        <Col xs={12} sm={3} md={3}>
                          <img className="thumbnail"  src="/client/build/img/IMG_2380.JPG" />
                        </Col> 
                          <Col xs={12} className="orderCard">
                            <p className="orderText">With our help we can create the right product to meet any of your needs</p>
                              <button className="orderNow"> Order Now</button>
                          </Col>     
                      </Col>
                      <div class="row">          
                        <Col xs={12} sm={5} md={4}>
                          <div className="title"></div>
                            <Col xs={12}>
                              <img className="pCaddy" src="/img/powerCaddy.jpg" />
                            </Col>
                            <Col xs={12} className="pCaddyText">
                          Power Caddy
                          </Col>
                          </Col>
                        </div>
                      </Col>
                    </div>
                  </div>
                
          </ReactCSSTransitionGroup>
        </Col>
    );
  }
}

export default Interior;
