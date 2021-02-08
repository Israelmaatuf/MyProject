
import Home from "../pages/Home";
import About from "../pages/About";
import Grilled from "../pages/Grilled";
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
import "../css/Top.css";

const Top = () => {
  

  return (
    <Router>
      <div className="Top">
        <header className="header">
          <div  className="container">
            <Link
              className="navigationLink"
              to="/"
            >
              ראשי
            </Link>
            <Link
              
              className="navigationLink"
              to="/About"
            >
              אודות
            </Link>

            <Dropdown  className="navigationLink">
              <Dropdown.Toggle>קייטרינג</Dropdown.Toggle>

              <Dropdown.Menu className="menuDrop">
                <Dropdown.Item   href="/CateringBasic">
                  קייטרינג בייסיק
                </Dropdown.Item>
                <Dropdown.Item   href="/EventsCatering">
                  קייטרינג אירועים
                </Dropdown.Item>
                <Dropdown.Item  href="/Grilled">בשרים על האש</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown  className="navigationLink">
              <Dropdown.Toggle>תפריט והזמנה</Dropdown.Toggle>

              <Dropdown.Menu className="menuDrop">
                <Dropdown.Item  href="/BasicMenu">
                  תפריט בייסיק
                </Dropdown.Item>
                <Dropdown.Item  href="/EventMenu">
                  תפריט אירועים
                </Dropdown.Item>
                <Dropdown.Item  href="/GrilledMenu"> על האש</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link
            
              className="navigationLink"
              to="/Recommendations"
            >
             המלצות
            </Link>
            <Link
              
              className="navigationLink"
              to="/Contact"
            >
              צור קשר
            </Link>
            <Link  to="/">
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
