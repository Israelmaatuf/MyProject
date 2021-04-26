import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import OrderPic1 from "../images/cateringpic1.jpg";
import OrderPic2 from "../images/eventpic1.jpg";
import OrderPic3 from "../images/grilledpic3.jpg";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../css/Order.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function Order(props) {
  const { classes } = props;
  return (
    <div dir="rtl" className={classes.root}>
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
            <Image className="imgLinks" src={OrderPic1}></Image>
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
            <Image className="imgLinks" src={OrderPic2}></Image>
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
            <Image className="imgLinks" src={OrderPic3}></Image>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
Order.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Order);
