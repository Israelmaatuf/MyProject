import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Grilled from "./Grilled";
import CateringBasic from "./CateringBasic";
import EventsCatering from "./EventsCatering";
import Contact from "./Contact";
import Recommendations from "./Recommendations";
import BasicMenu from "./BasicMenu";
import EventMenu from "./EventMenu";
import GrilledMenu from "./GrilledMenu";
import Order from "./Order";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown , Image } from "react-bootstrap";
import Logo from "../images/LogoChefPinchas.png";
import "./Top.css";

const Top = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Router>
      <div className="Top">
        <header className="header">
          <div expanded={navbar} className="container">
            <Link
              onClick={() => setNavbar(false)}
              className="navigationLink"
              to="/"
            >
              ראשי
            </Link>
            <Link
              onClick={() => setNavbar(false)}
              className="navigationLink"
              to="/About"
            >
              אודות
            </Link>

            <Dropdown onClick={() => setNavbar(false)} className="navigationLink">
              <Dropdown.Toggle>קייטרינג</Dropdown.Toggle>

              <Dropdown.Menu className="menuDrop">
                <Dropdown.Item onClick={() => setNavbar(false)} href="/CateringBasic">
                  קייטרינג בייסיק
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setNavbar(false)} href="/EventsCatering">
                  קייטרינג אירועים
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setNavbar(false)} href="/Grilled">בשרים על האש</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown onClick={() => setNavbar(false)} className="navigationLink">
              <Dropdown.Toggle>תפריט והזמנה</Dropdown.Toggle>

              <Dropdown.Menu className="menuDrop">
                <Dropdown.Item onClick={() => setNavbar(false)} href="/BasicMenu">
                  תפריט בייסיק
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setNavbar(false)} href="/EventMenu">
                  תפריט אירועים
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setNavbar(false)} href="/GrilledMenu"> על האש</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link
              onClick={() => setNavbar(false)}
              className="navigationLink"
              to="/Recommendations"
            >
             המלצות
            </Link>
            <Link
              onClick={() => setNavbar(false)}
              className="navigationLink"
              to="/Contact"
            >
              צור קשר
            </Link>
            <Link onClick={() => setNavbar(false)} to="/">
            <Image className="logo" src={Logo}></Image>
            </Link>
          </div>
        </header>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
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
      
      <Route exact path="/Recommendations">
          <Recommendations />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/BasicMenu">
          <BasicMenu />
        </Route>
        <Route exact path="/EventMenu">
          <EventMenu />
        </Route>
        <Route exact path="/GrilledMenu">
          <GrilledMenu />
        </Route>
        <Route exact path="/Order">
          <Order />
        </Route>
        </Switch>
    </Router>
  );
};

export default Top;
