import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default class Faq extends Component {
    render() {
        return (
            <div className="container mb-5">
                <h2 className="text-center pb-3 pt-2 fs-2">Frequently Asked Questions</h2>

                <Accordion defaultActiveKey={['0']}  alwaysOpen>
                    <Accordion.Item eventKey="0" style={{border:'none'}}>
                        <Accordion.Header>What Is Your Location?</Accordion.Header>
                        <Accordion.Body>
                        Number 264 Oron road.The top floor of pharmablaze building
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{border:'none', borderTop:'1px solid #CCCCCC'}}>
                        <Accordion.Header>  What are the courses you offer?</Accordion.Header>
                        <Accordion.Body>
                            <h4>We offer the following</h4>
                            <ul>
                                <li>Introduction To Web Development</li>
                                <li> Javascript</li>
                                <li>Android</li>
                                <li>React</li>
                                <li> Python</li>
                                <li>Social Media Marketing</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{border:'none', borderTop:'1px solid #CCCCCC'}}>
                        <Accordion.Header>What is the Price Range?</Accordion.Header>
                        <Accordion.Body>
                        For more information on that kndly contact us on +2349090009216
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}