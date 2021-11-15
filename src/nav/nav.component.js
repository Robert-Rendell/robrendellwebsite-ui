import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './nav.component.css';
import logo from '../resources/logo.svg';
import nodeJsLogo from '../resources/nodejs-logo.png';
import tsLogo from '../resources/ts-logo.png';
import awsLogo from '../resources/aws-logo.png';

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
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Rob Rendell</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/robert-rendell/">LinkedIn</Nav.Link>
            <Nav.Link href="/sudoku" disabled>Sudoku Project</Nav.Link>
            <Nav.Link href="/strava-api" disabled>Strava API (OAuth2.0)</Nav.Link>
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
            <img src={logo} width="40" height="40" alt="React" />
            <img src={tsLogo} class="tech-icons" width="30" height="30" alt="TypeScript" />
            <img src={nodeJsLogo} class="tech-icons nodejs-icon" width="30" height="30" alt="nodeJs" />
            <div class="tech-icons aws-icon-bg" width="40" height="40">
              <img src={awsLogo} class="aws-icon" width="30" height="20" alt="nodeJs" />
            </div>
            <Button variant="outline-success" disabled>Enquire</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    );
  }
}

export default NavComponent;