/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/EventsCatering.css";

function EventsCatering(props) {
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
    <div dir="rtl" className="EventsCatering">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="titleEvents">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              קייטרינג אירועים
            </h2>

            <div className="eventsP">
              <p>
                תפריט אירועים כולל את מנות התפריט שתבחרו, ובנוסף שירות ניהול
              </p>
              <p>האירוע – הפקה, עריכה והגשה בצורה מקצועית</p>
              <br />
              <p>תוכלו לבחור מנות ראשונות, מנות פתיחה, עיקריות קינוחים, שתיה</p>
              <p>אלכוהול ולהתאים תפריט ברמת תמחור ומסגרות תקציב נוחות</p>
              <br />
              <p>
                כשאתם בוחרים בשף פנחס אתם יכולים להיות בטוחים שהכל יוגש בזמן
              </p>
              <p>ולשביעות רצון קהל המוזמנים</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Link to="/EventMenu" className="buttonEvents">
                לתפריט והזמנה
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className="eventspic1" src="images/EventImg1.jpeg"></img>
        </Grid>
        <Grid item xs={12}>
          <div dir="ltr" className="CarouselImagesEvents">
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
                className="imgEvents"
                src="images/Carousel/carouseleventpic1.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic2.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic3.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic4.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic5.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic6.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic7.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic8.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic9.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic10.jpeg"
              ></img>
              <img
                className="imgEvents"
                src="images/Carousel/carouseleventpic11.jpeg"
              ></img>
            </Carousel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default EventsCatering;
