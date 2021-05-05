/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/GrilledCatering.css";

function GrilledCatering(props) {
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
    <div dir="rtl" className="GrilledCatering">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="titleGrilled">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              בשרים על האש
            </h2>

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
            <div data-aos="fade-up" data-aos-duration="1000">
              <Link to="/GrilledMenu" className="buttonGrilled">
                לתפריט והזמנה
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className="grilledPic1" src="images/grilledpic1.jpg"></img>
        </Grid>
        <Grid item xs={12}>
          <div dir="ltr" className="CarouselImagesGrilled">
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
            >
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic1.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic2.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic3.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic4.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic5.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic6.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic7.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic8.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic9.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic10.jpeg"
              ></img>
              <img
                className="imgGrilled"
                src="images/Carousel/carouselgrilledpic11.jpeg"
              ></img>
            </Carousel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default GrilledCatering;
