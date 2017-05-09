import React from 'react';
import './Contact.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Link } from 'react-router';

// Bootstrap
import { Col } from 'react-bootstrap';

import FaMobile from 'react-icons/lib/fa/mobile';
import FaEmail from 'react-icons/lib/fa/envelope-o';
import FaInsta from 'react-icons/lib/fa/instagram';
import FaFace from 'react-icons/lib/fa/facebook-square';


var Contact = React.createClass ({
    getInitialState: function() {
        return {
                subject: "",
                name: "",
                phone: "",
                email: "",
                message: "",
        }
    },

    sendEmail: function () {
        console.log(this.state.name);
        fetch('https://connexion-design.herokuapp.com/email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: this.state.subject,
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                message: this.state.message
            })
        })
    },

    nameChange(event) {
        this.setState({name: event.target.value});
    },

    emailChange(event) {
        this.setState({email: event.target.value});
    },

    phoneChange(event) {
        this.setState({phone: event.target.value});
    },

    messageChange(event) {
        this.setState({message: event.target.value});
    },

    subjectChange(event) {
        this.setState({subject: event.target.value});
    },

    render() {
        return (
            <Col xs={12} className="Contact noPadding" id="Contact">                
                <ReactCSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionAppearTimeout={300}>

                    <Col xs={12}>
                    <h1> Contact </h1>
                        <Col xs={12} sm={8}>
                            <h4 className="contactTitle">We <b>cant</b> wait to hear from you...</h4>
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
                    <Col xs={12}>
                    <div class="container-fluid">
                        <div class="row">
                            <Col xs={12}>
                                <Col xs={12} sm={6} md={6}>
                                    <Col xs={12} className="contactElements titleFont">
                                        Subject: 
                                    </Col>
                                        <div class="row">
                                        <Col xs={12} className="contactElements">
                                            <select className="col-xs-12" id="subject" value={this.state.value} onChange={this.subjectChange}>
                                            <option>Product Information</option>
                                            <option>Prototyping</option>
                                            <option>Design</option>
                                            <option>Quote</option>
                                            <option>General Information</option>
                                            </select>
                                        </Col>
                                        </div>
                                    <Col xs={12} className="contactElements titleFont">
                                        Name 
                                    </Col>
                                    <Col xs={12} className="contactElement">
                                        <input type="text" className="col-xs-12 enterText" id="name" value={this.state.value} onChange={this.nameChange}></input>
                                    </Col>
                                    <Col xs={12} className="contactElements titleFont">
                                        Email 
                                    </Col>
                                    <Col xs={12} className="contactElements">
                                        <input type="text" className="col-xs-12 enterText" id="email" value={this.state.value} onChange={this.emailChange}></input>
                                    </Col>
                                    <Col xs={12} className="contactElements titleFont">
                                       Phone
                                    </Col>
                                    <Col xs={12} className="contactElements">
                                         <input type="text" className="col-xs-12 enterText" id="phone" value={this.state.value} onChange={this.emailChange}></input>
                                    </Col>
                                </Col>
                                <div class="row">
                                    <Col xs={12} sm={6} md={6}>
                                        <Col xs={10} className="textBox">
                                            <textarea type="textarea" className="col-xs-12 messageBox" placeholder="Enter message here..." id="message" value={this.state.value} onChange={this.messageChange}></textarea>
                                        </Col> 
                                    <Col xs={12} sm={12} smoffset={10} className="submitButton" id="submit" onClick={() => this.sendEmail()}>
                                        <Link to="/Contact">
                                            <div className="subButton">
                                                <span className="contactUsButton">Submit</span>
                                            </div>
                                        </Link>
                                    </Col> 
                                    </Col>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
            

                </ReactCSSTransitionGroup>
            </Col>
        );
    }
})

export default Contact;
