import React from 'react';
import './Thumbnail.css';

// Bootstrap
import { Modal } from 'react-bootstrap';

const Thumbnail = React.createClass({
    
    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

  render(props) {    

    return (
      <div>
        <img src={this.props.image} alt="" onClick={this.open} className="img-thumbnail thumbnail cover thumbSize"/>
        
        <Modal show={this.state.showModal} onHide={this.close}>
            <img src={this.props.image} alt="tuscan" className="cover"/>
        </Modal>
      </div>
    );
  }
});

export default Thumbnail;
