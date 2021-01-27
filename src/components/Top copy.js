import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Grilled from "./Grilled";
import CateringBasic from "./CateringBasic";
import EventsCatering from "./EventsCatering";
import Catering from "./Catering";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav , NavDropdown } from "react-bootstrap";
import "./Top.css";

const Top = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Router>
      <div className="Top">
        <header className="header">
        <Navbar expanded={navbar} bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={() =>setNavbar(false)} href="/">ראשי</Nav.Link>
      <Nav.Link onClick={() =>setNavbar(false)} href="/About">אודות</Nav.Link>
      <NavDropdown onClick={() =>setNavbar(false)} href="/Catering" title="קייטרינג" id="basic-nav-dropdown">
        <NavDropdown.Item href="/CateringBasic">קייטרינג בייסיק</NavDropdown.Item>
        <NavDropdown.Item href="/EventsCatering">קייטרינג אירועים</NavDropdown.Item>
        <NavDropdown.Item href="/grilled">בשרים על האש</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

        </header>
        
          </div>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Catering">
            <Catering />
          </Route>
          <Route exact path="/CateringBasic">
            <CateringBasic />
          </Route>
          <Route exact path="/EventsCatering">
            <EventsCatering />
          </Route>
          <Route exact path="/Grilled">
            <Grilled />
          </Route>
        </Switch>
    </Router>
  );
};

export default Top;
