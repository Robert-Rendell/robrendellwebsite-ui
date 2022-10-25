import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import './nav.component.css';
import logo from '../resources/logo.svg';
import nodeJsLogo from '../resources/nodejs-logo.png';
import tsLogo from '../resources/ts-logo.png';
import awsLogo from '../resources/aws-logo.png';

type Props = {

}

class NavComponent extends React.Component {
  constructor(props: Props) {
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
            <Nav.Link href="/sudoku">Sudoku Project</Nav.Link>
            <NavDropdown title="Recursion Project" id="recursionProject">
              <NavDropdown.Item href="/recursion">Coming very soon!</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Climate Change" id="climateChange">
              <NavDropdown.Item href="/climate-change" disabled>Happening now! :(</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Music Projects" id="musicProjectsNavbarScrollingDropdown">
              <NavDropdown.Item href="https://www.shiva-archetypes.com">Shiva Archetypes (band)</NavDropdown.Item>
              <NavDropdown.Item href="https://www.robcelticfiddle.co.uk">Rob Celtic Fiddle (weddings)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="P5.js" id="processingNavbarScrollingDropdown">
              <NavDropdown.Item href="https://editor.p5js.org/Robert-Rendell/sketches/Zi4pekiUZd">Chaos Theory: Bifurcation Diagram</NavDropdown.Item>
              <NavDropdown.Item href="#action3" disabled>Fishing Game</NavDropdown.Item>
              <NavDropdown.Item href="#action4" disabled>Bomberman</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Technical Tests" id="techTestsNavbarScrollingDropdown">
              <NavDropdown.Item href="/technical-tests/291121">29/11/21 - University data visualiser</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://www.linkedin.com/in/robert-rendell/">LinkedIn</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <img src={logo} width="40" height="40" alt="React" />
            <img src={tsLogo} className="tech-icons" width="30" height="30" alt="TypeScript" />
            <img src={nodeJsLogo} className="tech-icons nodejs-icon" width="30" height="30" alt="nodeJs" />
            <div className="tech-icons aws-icon-bg">
              <img src={awsLogo} className="aws-icon" width="30" height="20" alt="nodeJs" />
            </div>
            {/* <Button variant="outline-success" disabled>Enquire</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    );
  }
}

export default NavComponent;