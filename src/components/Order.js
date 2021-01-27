import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import OrderPic1 from "../images/cateringpic1.jpg";
import OrderPic2 from "../images/eventpic1.jpg";
import OrderPic3 from "../images/grilledpic3.jpg";
import "./Order.css";

function Order() {
  return (
    <div className="headerOrder">
      <div className="OrderTitle">
        <div>
          <h2>תפריט והזמנה</h2>
        </div>
      </div>
      <div className="orderDetails">
        <div className="LinksOrder">
          <Link to="./BasicMenu" className="LinkBasic">
            <Image className="imgLink1" src={OrderPic1}></Image>
          </Link>

          <Link to="./EventMenu" className="LinkEvent">
            <Image className="imgLink1" src={OrderPic2}></Image>
          </Link>

          <Link to="./GrilledMenu" className="LinkGrilled">
            <Image className="imgLink1" src={OrderPic3}></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
