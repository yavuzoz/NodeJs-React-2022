import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import NavbarDropsDown from "./NavbarDropsdown";
import PersonData from "../data/PersonData.json";

function NavbarComp() {
  
  return (
    <Navbar bg="primary" expand="lg">
      <Container>simdilik bu kadar yapabildim,  haftaya handleChance olayini cözerim ins, selamlar
        <Navbar.Brand href="#home">Yavuz Özbay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PersonName" id="basic-nav-dropdown">
              {PersonData.map((person) => (
                <NavbarDropsDown personInfo={person} />
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
