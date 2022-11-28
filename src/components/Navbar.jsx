import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class ExampleNav extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SIH Training</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Trainings Offered</Nav.Link>
              <Nav.Link href="#pricing">Questions</Nav.Link>
              <Nav.Link href="#pricing">Instructors</Nav.Link>
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

