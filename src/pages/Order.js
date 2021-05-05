/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../css/Order.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Order() {
  return (
    <div dir="rtl" className="Order">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className="OrderTitle">
            <h2>תפריט והזמנה</h2>
          </div>
        </Grid>

        <Grid
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          item
          sm={4}
          xs={12}
        >
          <Link to="./BasicMenu">
            <img className="imgLinks" src="images/cateringpic1.jpg"></img>
          </Link>
        </Grid>
        <Grid
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          item
          sm={4}
          xs={12}
        >
          <Link to="./EventMenu">
            <img className="imgLinks" src="images/eventpic1.jpg"></img>
          </Link>
        </Grid>
        <Grid
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          item
          sm={4}
          xs={12}
        >
          <Link to="./GrilledMenu">
            <img className="imgLinks" src="images/grilledpic3.jpg"></img>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
