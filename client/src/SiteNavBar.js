import React, { Component } from 'react';
import './SiteNavBar.css';

// Bootstrap
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

import Contact from './Contact';

import FaMobile from 'react-icons/lib/fa/mobile';
import FaEmail from 'react-icons/lib/fa/envelope-o';
import FaInsta from 'react-icons/lib/fa/instagram';
import FaFace from 'react-icons/lib/fa/facebook-square';
import { Col } from 'react-bootstrap';



class SiteNavBar extends Component {

  render() {
    return (
      <div className="SiteNavBar">  
        <Navbar collapseOnSelect fixedTop >
            <Navbar.Header>
                <Navbar.Brand>
                <Link to="/"></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              
            </Navbar.Header>
        <Navbar.Collapse>
                <Nav pullRight>
               
                    <NavItem eventKey={1}><Link to="/Products">Products</Link></NavItem>
                    
                    <NavItem eventKey={2}><Link to="/Contact">Contact</Link></NavItem>
                    <NavItem eventKey={3}><Link to="/About">About</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
              </Navbar> 
           <Col className="transparent" xs={12} data-margin-top="50">
                <Col xs={12} sm={8}>
                </Col>
                <Col xs={3} sm={1}>
                    <div className="icons3">
                            <FaInsta />
                            </div>
                        </Col>
                        <Col xs={3} sm={1}>
                            <div className="icons3">
                                <FaEmail />
                            </div>
                        </Col>
                        <Col xs={3} sm={1}>
                            <div className="icons3">
                                <FaFace />
                            </div>
                        </Col>
                        <Col xs={3} sm={1}>
                            <div className="icons3">
                                <FaMobile />
                            </div>
                        


      </Col>
                    </Col>

                  
      </div>      
    );
  }

}

export default SiteNavBar;
