import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Loaded
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Rob Rendell</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/robert-rendell/">LinkedIn</Nav.Link>
            <Nav.Link href="/sudoku">Sudoku</Nav.Link>
            <Nav.Link href="/strava-api">Strava API (OAuth2.0)</Nav.Link>
            <NavDropdown title="Processing.js" id="processingNavbarScrollingDropdown">
              <NavDropdown.Item href="https://editor.p5js.org/Robert-Rendell/sketches/Zi4pekiUZd">Chaos Theory: Bifurcation Diagram</NavDropdown.Item>
              <NavDropdown.Item href="#action3" disabled>Fishing Game</NavDropdown.Item>
              <NavDropdown.Item href="#action4" disabled>Bomberman</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Music Projects" id="processingNavbarScrollingDropdown">
              <NavDropdown.Item href="https://www.shiva-archetypes.com">Shiva Archetypes (band)</NavDropdown.Item>
              <NavDropdown.Item href="https://www.robcelticfiddle.co.uk">Rob Celtic Fiddle (weddings)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" disabled>Enquire</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    );
  }
}

export default NavComponent;