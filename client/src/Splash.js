import React, { Component, PropTypes } from 'react';
import './Splash.css';

// Custom
import SiteNavBar from './SiteNavBar';
import JumboTron from './JumboTron';

import TabBar from './TabBar';

// Bootstrap
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Splash extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (      
      <div className="Splash noPadding">        
        <SiteNavBar />
        
        <Grid>
            <Row>
                <Col xs={12} className="mainCard noPadding">
                      
                  
                  {this.props.children}           
                </Col>                
            </Row>
        </Grid>  
      </div>
    );
  }

}

export default Splash;
