import React from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "./nav.component.css";
import logo from "../resources/logo.svg";
import nodeJsLogo from "../resources/nodejs-logo.png";
import tsLogo from "../resources/ts-logo.png";
import awsLogo from "../resources/aws-logo.png";
import { SharedRoutes } from "../common/shared-routes";

export const NavComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Rob Rendell</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/sudoku">Sudoku Project</Nav.Link>

            <Nav.Link href={SharedRoutes.Recursion.LandingPage}>Recursion Project</Nav.Link>
            <Nav.Link href={SharedRoutes.Neurochemistry.LandingPage}>Neurochemistry Project</Nav.Link>
            <Nav.Link href={SharedRoutes.Biomagnetism.LandingPage}>Biomagnetism Project</Nav.Link>
            <Nav.Link href={SharedRoutes.ClimateChange.LandingPage}>Climate Change</Nav.Link>

            <NavDropdown title="Nature" id="nature">
              <NavDropdown.Item href={"/photos-ive-taken/nature/wild-flowers"}>
                Wild Flowers
              </NavDropdown.Item>
              <NavDropdown.Item href="/photos-ive-taken/nature/insects">
                Insects
              </NavDropdown.Item>
              <NavDropdown.Item href="/photos-ive-taken/nature/lichen">
                Lichen
              </NavDropdown.Item>
              <NavDropdown.Item href="/photos-ive-taken/nature/arachnids">
                Arachnids
              </NavDropdown.Item>
              <NavDropdown.Item href="/photos-ive-taken/nature/fungi">
                Fungi
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Misc" id="misc">
              <NavDropdown.Item href="/miscellaneous/india">
                India
              </NavDropdown.Item>
              <NavDropdown.Item href="/miscellaneous/giant-pacific-octopus">
                Giant Pacific Octopus (Alaskan)
              </NavDropdown.Item>
              <NavDropdown.Item disabled>Scotch Whisky</NavDropdown.Item>
              <NavDropdown.Item disabled>Word of the Day</NavDropdown.Item>
              <NavDropdown.Item disabled>
                Interesting Dates in History
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Music Projects"
              id="musicProjectsNavbarScrollingDropdown"
            >
              <NavDropdown.Item
                href="https://www.shiva-archetypes.com"
                target="_blank"
                rel="noreferrer"
              >
                Shiva Archetypes (band)
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.robcelticfiddle.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                Rob Celtic Fiddle (weddings)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Tech Tests"
              id="techTestsNavbarScrollingDropdown"
            >
              <NavDropdown.Item href="/technical-tests/291121">
                29/11/21 - University data visualiser
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              // href={`${config.backend}/cv`}
              // target="_blank"
              disabled
            >
              Download CV
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <img src={logo} width="40" height="40" alt="React" />
            <img
              src={tsLogo}
              className="tech-icons"
              width="30"
              height="30"
              alt="TypeScript"
            />
            <img
              src={nodeJsLogo}
              className="tech-icons nodejs-icon"
              width="30"
              height="30"
              alt="nodeJs"
            />
            <div className="tech-icons aws-icon-bg">
              <img
                src={awsLogo}
                className="aws-icon"
                width="30"
                height="20"
                alt="nodeJs"
              />
            </div>
            {/* <Button variant="outline-success" disabled>Enquire</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
