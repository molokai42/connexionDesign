import React from 'react';
import './SocialMedia.css'

import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

import FaMobile from 'react-icons/lib/fa/mobile';
import FaEmail from 'react-icons/lib/fa/envelope-o';
import FaInsta from 'react-icons/lib/fa/instagram';
import FaFace from 'react-icons/lib/fa/facebook-square';

var SocialMedia = React.createClass ({

   
    render() {
        return(
            <Col className="transparent" xs={12} data-margin-top="20">
                <Col xs={12} sm={12}>
                </Col>
                <Col xs={12} sm={12} className="socialMedia">
                <Col xs={3} sm={3}>
                    <div className="icons3">
                            <FaInsta />
                            </div>
                        </Col>
                        <Col xs={3} sm={3}>
                            <div className="icons3">
                                <FaEmail />
                            </div>
                        </Col>
                        <Col xs={3} sm={3}>
                            <div className="icons3">
                                <FaFace />
                            </div>
                        </Col>
                        <Col xs={3} sm={3}>
                            <div className="icons3">
                                <FaMobile />
                            </div>
                        


      </Col>
                    </Col>
                    </Col>
        );
    }
}) 

export default SocialMedia;