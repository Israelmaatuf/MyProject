import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import basicImage1 from "../images/BasicImg1.jpeg";
import basicCarousel1 from "../images/Carousel/carouselpic1.jpeg";
import basicCarousel2 from "../images/Carousel/carouselpic2.jpeg";
import basicCarousel3 from "../images/Carousel/carouselpic3.jpeg";
import basicCarousel4 from "../images/Carousel/carouselpic4.jpeg";
import basicCarousel5 from "../images/Carousel/carouselpic5.jpeg";
import basicCarousel6 from "../images/Carousel/carouselpic6.jpeg";
import basicCarousel7 from "../images/Carousel/carouselpic7.jpeg";
import basicCarousel8 from "../images/Carousel/carouselpic8.jpeg";
import basicCarousel9 from "../images/Carousel/carouselpic9.jpeg";
import basicCarousel10 from "../images/Carousel/carouselpic10.jpeg";
import basicCarousel11 from "../images/Carousel/carouselpic11.jpeg";
import "../css/CateringBasic.css";



export default function CateringBasic(props) {
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
    <div >
      <Grid container >
        
        <Grid item xs={6}>
          
          <div className="basicpic1">
        <Image src={basicImage1}></Image>
      </div>
          
        </Grid>
        <Grid item xs={6}>
          
          <div className="titleBasic">
        <div>
          <h2 data-aos="fade-down" data-aos-duration="1000">קייטרינג בייסיק</h2>
        </div>
          {/* <br/> */}
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
          <Link  to="/BasicMenu" className="buttonBasic">
            לתפריט והזמנה
          </Link>
        </div>
      </div>
          
        </Grid>
        <Grid item xs={12}>
          
          <div className="CarouselImagesBasic">
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
        <Image className="imgBasic" src={basicCarousel1}></Image>
        <Image className="imgBasic" src={basicCarousel2}></Image>
        <Image className="imgBasic" src={basicCarousel3}></Image>
        <Image className="imgBasic" src={basicCarousel4}></Image>
        <Image className="imgBasic" src={basicCarousel5}></Image>
        <Image className="imgBasic" src={basicCarousel6}></Image>
        <Image className="imgBasic" src={basicCarousel7}></Image>
        <Image className="imgBasic" src={basicCarousel8}></Image>
        <Image className="imgBasic" src={basicCarousel9}></Image>
        <Image className="imgBasic" src={basicCarousel10}></Image>
        <Image className="imgBasic" src={basicCarousel11}></Image>
        
      </Carousel>
      ;
      </div>
          
        </Grid>
      </Grid>
    </div>
  );
}