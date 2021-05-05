/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/CateringBasic.css";

function CateringBasic(props) {
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
    <div dir="rtl" className="CateringBasic">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="titleBasic">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              קייטרינג בייסיק
            </h2>

            <div className="basicP">
              <p>תפריט מנות מגוון לבחירה לאירועים ומסיבות ללא הפקה</p>
              <br />
              <p>באפשרות זו תוכלו להנות מהתפריט המשובח של שף הבית ללא עלויות</p>
              <p>הפקת האירוע, לבחור כרצונכם לפי אמות מידה מותאמות את הכמויות</p>
              <p>
                וסוגי המנות ולקבל את האוכל ארוז ביסודיות ובבטחה, טרי ומוכן להגשה
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Link to="/BasicMenu" className="buttonBasic">
                לתפריט והזמנה
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className="basicpic1" src="images/BasicImg1.jpeg"></img>
        </Grid>
        <Grid item xs={12}>
          <div dir="ltr" className="CarouselImagesBasic">
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
                className="imgBasic"
                src="images/Carousel/carouselpic1.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic2.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic3.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic4.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic5.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic6.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic7.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic8.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic9.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic10.jpeg"
              ></img>
              <img
                className="imgBasic"
                src="images/Carousel/carouselpic11.jpeg"
              ></img>
            </Carousel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CateringBasic;
