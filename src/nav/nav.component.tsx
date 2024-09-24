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
import { usePreferences } from "../hooks/use-preferences.hook";
import { GitHubIcon } from "../components/icons/github.icon";
import { NewTabLink } from "../components/new-tab-link.component";
import { StackOverflowIcon } from "../components/icons/stack-overflow.icon";
import { LinkedInIcon } from "../components/icons/linkedin.icon";
import { config } from "../config";
import { CalendlyIcon } from "../components/icons/calendly.icon";

export const NavComponent = () => {
  const { preferences } = usePreferences();
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;

  const onMobile = width < 600;
  const smallerScreen = !onMobile && width <= 1100;

  const isFullScreen =
    preferences?.fullscreen &&
    window.location.pathname.includes(preferences.fullscreen);

  return !isFullScreen ? (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <span
            className="pointer"
            style={{ marginRight: "5px" }}
            onClick={() => (window.location.href = "/")}
          >
            Rob Rendell
          </span>{" "}
          <span className="tech-icons pointer">
            <NewTabLink href="https://github.com/Robert-Rendell">
              <GitHubIcon />
            </NewTabLink>
          </span>
          <span className="tech-icons pointer">
            <NewTabLink href="https://stackoverflow.com/users/4529555/robert-rendell">
              <StackOverflowIcon />
            </NewTabLink>
          </span>
          <span className="tech-icons pointer">
            <NewTabLink href="https://www.linkedin.com/in/rob-rendell-a1a37126a/">
              <LinkedInIcon />
            </NewTabLink>
          </span>
          <span className="tech-icons pointer">
            <NewTabLink href="https://calendly.com/robertrendell">
              <CalendlyIcon />
            </NewTabLink>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "175px" }}
            navbarScroll
          >
            <Nav.Link href={SharedRoutes.Sudoku.Dashboard}>
              Sudoku{!smallerScreen && <>&nbsp;Project</>}
            </Nav.Link>
            {config.minimal && (
              <>
                <Nav.Link href={SharedRoutes.StravaAPI.Historical}>
                  Strava API Historical Stats
                </Nav.Link>

                <Nav.Link href={SharedRoutes.Battleships.Dashboard}>
                  Battleships{!smallerScreen && <>&nbsp;Project</>}
                </Nav.Link>

                <Nav.Link href={SharedRoutes.CustomAnalytics.LandingPage}>
                  Custom Analytics{!smallerScreen && <>&nbsp;Project</>}
                </Nav.Link>

                <NavDropdown menuVariant="dark" title="Nature" id="nature">
                  <NavDropdown.Item
                    href={"/photos-ive-taken/nature/wild-flowers"}
                  >
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

                <NavDropdown title="Misc" id="misc" menuVariant="dark">
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.WordOfTheDay}
                  >
                    Word of the Day
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.InterestingDatesInHistory}
                  >
                    Interesting Dates in History
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            {!config.minimal && (
              <>
                <Nav.Link href={SharedRoutes.Battleships.Dashboard}>
                  Battleships{!smallerScreen && <>&nbsp;Project</>}
                </Nav.Link>
                <NavDropdown
                  menuVariant="dark"
                  title="Creative Writing"
                  id="creative-projects"
                >
                  <NavDropdown.Item
                    href={SharedRoutes.ClimateChange.LandingPage}
                  >
                    Climate Change
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown menuVariant="dark" title="Nature" id="nature">
                  <NavDropdown.Item
                    href={"/photos-ive-taken/nature/wild-flowers"}
                  >
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
                <NavDropdown title="Misc" id="misc" menuVariant="dark">
                  <NavDropdown.Item href={SharedRoutes.StravaAPI.Historical}>
                    Strava Historical Stats
                  </NavDropdown.Item>
                  <NavDropdown.Divider color="grey" />
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.WordOfTheDay}
                  >
                    Word of the Day
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.InterestingDatesInHistory}
                  >
                    Interesting Dates in History
                  </NavDropdown.Item>
                  <NavDropdown.Divider color="grey" />
                  <NavDropdown.Item href={SharedRoutes.Miscellaneous.India}>
                    India
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.GiantPacificOctopus}
                  >
                    Giant Pacific Octopus (Alaskan)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.ScotchWhisky}
                  >
                    Scotch Whisky
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.Midjourney}
                  >
                    Midjourney AI
                  </NavDropdown.Item>
                  <NavDropdown.Divider color="grey" />
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.Philosophy}
                  >
                    Philosophy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.PaintingsAndArt}
                  >
                    Paintings and Art
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.NobelPrize}
                  >
                    Nobel Prize
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={SharedRoutes.Miscellaneous.JamesWebbTelescope}
                  >
                    James Webb Telescope
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
                  >
                    Shiva Archetypes (band)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.robcelticfiddle.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    disabled
                  >
                    Rob Celtic Fiddle (weddings)
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Tech Tests"
                  id="techTestsNavbarScrollingDropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/technical-tests/291121">
                    29/11/21 - University data visualiser
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://github.com/Robert-Rendell/PLT-Technical-Test-190821">
                    19/08/21 - Stock calculator
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <TechIconsComponent />
            {/* <Button variant="outline-success" disabled>Enquire</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <></>
  );
};
