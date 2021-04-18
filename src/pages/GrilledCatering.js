import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import grilledpic1 from "../images/grilledpic1.jpg";
import grilledCarousel1 from "../images/Carousel/carouselgrilledpic1.jpeg";
import grilledCarousel2 from "../images/Carousel/carouselgrilledpic2.jpeg";
import grilledCarousel3 from "../images/Carousel/carouselgrilledpic3.jpeg";
import grilledCarousel4 from "../images/Carousel/carouselgrilledpic4.jpeg";
import grilledCarousel5 from "../images/Carousel/carouselgrilledpic5.jpeg";
import grilledCarousel6 from "../images/Carousel/carouselgrilledpic6.jpeg";
import grilledCarousel7 from "../images/Carousel/carouselgrilledpic7.jpeg";
import grilledCarousel8 from "../images/Carousel/carouselgrilledpic8.jpeg";
import grilledCarousel9 from "../images/Carousel/carouselgrilledpic9.jpeg";
import grilledCarousel10 from "../images/Carousel/carouselgrilledpic10.jpeg";
import grilledCarousel11 from "../images/Carousel/carouselgrilledpic11.jpeg";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../css/GrilledCatering.css";

const styles = () => ({
  root: {
    flexGrow: 1,
  }
  
});

function GrilledCatering(props) {

  const { classes } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
          
            <Image className="grilledPic1" src={grilledpic1}></Image>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="titleGrilled">
            
              <h2 data-aos="fade-down" data-aos-duration="1000">בשרים על האש</h2>
            
            
            <div className="grilledP">
              <p>
                תפריט בשרים איכותיים הנצלים על גריל במקום האירוע, מסופקים עם
              </p>
              <p>
                תוספות, סלטים, ירקות וקינוחים שיהפכו את האירוע שלכם לחגיגה בוערת
              </p>
              <br />
              <p>
                אירוע על האש מתאים לגיבוש צוות עובדים, אירועי קונספט, בר מצווה
              </p>
              <p>
                ובת מצווה, סעודת שבע ברכות, חגיגת תספורת, יום הולדת וכל מצב בו
                בא
              </p>
              <p>לכם להתפנק בבשרים איכותיים ועסיסיים</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" >
              <Link to="/GrilledMenu" className="buttonGrilled">
                לתפריט והזמנה
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="CarouselImagesGrilled">
            <Carousel
              swipeable={false}
              centerMode={true}
              showDots={true}
              responsive={responsive}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-10-px"
            >
              <Image className="imgGrilled" src={grilledCarousel1}></Image>
              <Image className="imgGrilled" src={grilledCarousel2}></Image>
              <Image className="imgGrilled" src={grilledCarousel3}></Image>
              <Image className="imgGrilled" src={grilledCarousel4}></Image>
              <Image className="imgGrilled" src={grilledCarousel5}></Image>
              <Image className="imgGrilled" src={grilledCarousel6}></Image>
              <Image className="imgGrilled" src={grilledCarousel7}></Image>
              <Image className="imgGrilled" src={grilledCarousel8}></Image>
              <Image className="imgGrilled" src={grilledCarousel9}></Image>
              <Image className="imgGrilled" src={grilledCarousel10}></Image>
              <Image className="imgGrilled" src={grilledCarousel11}></Image>
            </Carousel>
            ;
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
GrilledCatering.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(GrilledCatering);
