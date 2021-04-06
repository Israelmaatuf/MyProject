import Home from "../pages/Home";
import About from "../pages/About";
import GrilledCatering from "../pages/GrilledCatering";
import CateringBasic from "../pages/CateringBasic";
import EventsCatering from "../pages/EventsCatering";
import Contact from "../pages/Contact";
import Recommendations from "../pages/Recommendations";
import BasicMenu from "../pages/BasicMenu";
import EventMenu from "../pages/EventMenu";
import GrilledMenu from "../pages/GrilledMenu";
import Order from "../pages/Order";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown , Image } from "react-bootstrap";
import Logo from "../images/LogoChefPinchas.png";
import { BsJustify } from "react-icons/bs";
import React from "react";

import "../css/Top.css";

const Top = () => {
        const MenueBtn = () =>{     document.querySelector('.menu-btn').addEventListener
          ('click' , () => document.querySelector('.main-menu')
          .classList.toggle('show'));
        }
        
  return (
    <Router>
      <div className="Top">
        <div className="menu-btn">
        <BsJustify onClick={MenueBtn}></BsJustify>
        </div>
        <div className="container">
          {/* nav */}
          <nav className="main-nav">
            <Link to="/">
              <Image className="logo" src={Logo}></Image>
            </Link>
            <ul dir="rtl" className="main-menu">
              <li>
                <Link to="/" className="navigationLink">
                  ראשי
                </Link>
              </li>
              <li>
                <Link to="/About" className="navigationLink">
                  אודות
                </Link>
              </li>
              <Dropdown  alignRight >
              <Dropdown.Toggle variant="warning" className="DropDownCatering">קייטרינג</Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item className="menuDrop" href="/CateringBasic">
                  קייטרינג בייסיק
                </Dropdown.Item>
                <Dropdown.Item className="menuDrop" href="/EventsCatering">
                  קייטרינג אירועים
                </Dropdown.Item>
                <Dropdown.Item className="menuDrop" href="/Grilled">בשרים על האש</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown alignRight>
              <Dropdown.Toggle variant="warning" className="DropDownMenu" >תפריט והזמנה</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="menuDrop" href="/BasicMenu">תפריט בייסיק</Dropdown.Item>
                <Dropdown.Item className="menuDrop" href="/EventMenu">תפריט אירועים</Dropdown.Item>
                <Dropdown.Item className="menuDrop" href="/GrilledMenu"> על האש</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              <li>
                <Link to="/Recommendations" className="navigationLink">
                  המלצות
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="navigationLink">
                  צור קשר
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
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
          <GrilledCatering />
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
