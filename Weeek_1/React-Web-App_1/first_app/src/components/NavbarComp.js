import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";
// import Home from "./Home";




export default class NavbarComp extends Component {
  render() {
    return (
      // <Router>
        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#logo">LOGO</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">
                  Home
                </Nav.Link>
                <Nav.Link href="#about">
                  About
                </Nav.Link>
                <Nav.Link href="contact">
                  Contakt
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        /* <div>
          <Switch>
          <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router> */
    );
  }
}
