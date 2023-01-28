import React from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "./nav.component.css";
import { SharedRoutes } from "../common/shared-routes";
import { useWindowSize } from "../hooks/use-window-size.hook";
import { TechIconsComponent } from "../components/tech-icons.component";
import { SharedText } from "../common/shared-text";
import { useKnockKnock } from "../hooks/use-knock-knock.hook";

export const NavComponent = () => {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;

  const onMobile = width < 600;
  const smallerScreen = width < 985;
  const centredOnMobile = onMobile ? "centred" : "";

  const [hasAccess] = useKnockKnock();

  const onNavBarClick = () => {
    console.log(window.location.href);
    if (
      hasAccess &&
      !window.location.href.includes(SharedRoutes.Operations.Dashboard)
    ) {
      window.location.href = SharedRoutes.Operations.Dashboard;
    } else {
      console.log(window.location.href);
      window.location.href = SharedRoutes.HomePage;
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand" onClick={onNavBarClick}>
          Rob Rendell {onMobile && <TechIconsComponent />}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/sudoku">Sudoku Project</Nav.Link>

            <Nav.Link href={SharedRoutes.Recursion.LandingPage}>
              Recursion{!smallerScreen && <>&nbsp;Project</>}
            </Nav.Link>
            <Nav.Link href={SharedRoutes.Neurochemistry.LandingPage}>
              Neurochemistry{!smallerScreen && <>&nbsp;Project</>}
            </Nav.Link>
            <Nav.Link href={SharedRoutes.Biomagnetism.LandingPage}>
              Biomagnetism{!smallerScreen && <>&nbsp;Project</>}
            </Nav.Link>
            <Nav.Link href={SharedRoutes.ClimateChange.LandingPage}>
              Climate{!smallerScreen && <>&nbsp;Change</>}
            </Nav.Link>

            <NavDropdown menuVariant="dark" title="Nature" id="nature">
              <NavDropdown.Item
                href={"/photos-ive-taken/nature/wild-flowers"}
                className={centredOnMobile}
              >
                Wild Flowers
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/photos-ive-taken/nature/insects"
                className={centredOnMobile}
                disabled
              >
                Insects
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/photos-ive-taken/nature/lichen"
                className={centredOnMobile}
              >
                Lichen
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/photos-ive-taken/nature/arachnids"
                className={centredOnMobile}
              >
                Arachnids
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/photos-ive-taken/nature/fungi"
                className={centredOnMobile}
              >
                Fungi
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Misc" id="misc" menuVariant="dark">
              <NavDropdown.Item
                href={SharedRoutes.Miscellaneous.India}
                className={centredOnMobile}
              >
                India
              </NavDropdown.Item>
              <NavDropdown.Item
                href={SharedRoutes.Miscellaneous.GiantPacificOctopus}
                className={centredOnMobile}
              >
                Giant Pacific Octopus (Alaskan)
              </NavDropdown.Item>
              <NavDropdown.Item
                className={centredOnMobile}
                href={SharedRoutes.Miscellaneous.ScotchWhisky}
              >
                Scotch Whisky
              </NavDropdown.Item>
              <NavDropdown.Item
                className={centredOnMobile}
                href={SharedRoutes.Miscellaneous.WordOfTheDay}
              >
                Word of the Day
              </NavDropdown.Item>
              <NavDropdown.Item
                className={centredOnMobile}
                href={SharedRoutes.Miscellaneous.InterestingDatesInHistory}
              >
                Interesting Dates in History
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Music Projects"
              id="musicProjectsNavbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                href="https://www.shiva-archetypes.com"
                target="_blank"
                rel="noreferrer"
                className={centredOnMobile}
              >
                Shiva Archetypes (band)
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.robcelticfiddle.co.uk"
                target="_blank"
                rel="noreferrer"
                className={centredOnMobile}
              >
                Rob Celtic Fiddle (weddings)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Tech Tests"
              id="techTestsNavbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                href="/technical-tests/291121"
                className={centredOnMobile}
              >
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
            {!onMobile && <TechIconsComponent />}
            {/* <Button variant="outline-success" disabled>Enquire</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
