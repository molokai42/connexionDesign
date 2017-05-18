import React, { Component } from 'react';
import './SiteNavBar.css';

// Bootstrap
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

import Contact from './Contact';

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


                  
      </div>      
    );
  }

}

export default SiteNavBar;
