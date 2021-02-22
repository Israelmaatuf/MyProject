import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import OrderPic1 from "../images/cateringpic1.jpg";
import OrderPic2 from "../images/eventpic1.jpg";
import OrderPic3 from "../images/grilledpic3.jpg";
import "../css/Order.css";

export default function Order() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className="OrderTitle">
            <h2>תפריט והזמנה</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Link to="./GrilledMenu">
            <Image className="imgLinks" src={OrderPic3}></Image>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="./EventMenu">
            <Image className="imgLinks" src={OrderPic2}></Image>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="./BasicMenu">
            <Image className="imgLinks" src={OrderPic1}></Image>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
