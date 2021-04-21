import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import homeImage1 from "../images/homepic1.jpg";
import homeImage2 from "../images/homepic2.jpg";
import homeImage3 from "../images/homepic3.jpeg";
import homeImage4 from "../images/homepic4.jpeg";
import "../css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const styles = () => ({
  root: {
    flexGrow: 1,
  }
  
});

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <div className="homeTitle">
            <div className="homeTitleH1">
              <h1>שף פנחס</h1>
              <h1>קייטרינג & אירועים</h1>
              <h1>כשר למהדרין</h1>
              <div className="buttonDiv">
                <Link to="/Order" className="buttonEvents">
                  לתפריט אירועים
                </Link>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div>
            <Image
              data-aos="flip-left"
              data-aos-duration="1000"
              src={homeImage1}
              className="homePics"
            ></Image>
            <br />
            <br />
            <Image
              data-aos="flip-right"
              data-aos-duration="1000"
              src={homeImage2}
              className="homePics"
            ></Image>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="content-home">
            <div className="homeDetails">
              <h2>שף פנחס</h2>
              <h2>כל הטעמים מוזמנים</h2>
            </div>
            <div className="homeP">
              <p>
                חברת קייטרינג 'שף פנחס' מספקת שירותי הסעדה לאירועים מזה למעלה
                מחמש עשרה שנה. התפריט המגוון שמורכב מחומרי גלם טריים ואיכותיים
                ותחת השגחת כשרות מהודרת, גרם לאלפי לקוחות מרוצים לשוב ולהזמין
              </p>
              <p>
                צוות הפקה מקצועי ומלצרים מנוסים המשרתים את הקהל באדיבות, מוסיפים
                לחוויה הקולינרית חן אנושי והופכים את האירוע להפוך לחוויה בלתי
                נשכחת
              </p>
              <p>
                שף פנחס מתהדר בתפריט מגוון המוצע במחירים נוחים שיאפשרו לכם להנות
                משירותי ההסעדה המעולים במסגרת תקציב משתלמת
              </p>

              <Link className="aboutLink" to="/About">
                אודות שף פנחס
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="homeButtom">
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              className="homeButtomH2"
            >
              כשרות מהדרין
            </h2>
            <br />
            <br />

            <div className="homeButtomDiv">
              <p>
                בשף פנחס מקפידים על תעודת כשרות מהודרת של הרב יורקביץ כבר ברכישת
                חומרי הגלם. בכל שלבי ההכנה, השילוח והעריכה של האוכל מיושם פיקוח
                כשרותי הדוק
              </p>
              <br />
              <p>
                כשאתם נהנים מהמנות המשובחות של הקייטרינג אתם יכולים לסמוך בלב
                רגוע כי הוא הוכן והגש לכם בצורה המהודרת ביותר
              </p>
            </div>
          </div>
          <Image className="homePic2" src={homeImage3}></Image>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div>
            <Image className="homePic3" src={homeImage4}></Image>
          </div>

          <div className="homeButtom1">
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              className="homeButtom1H2"
            >
              לקוחות ממליצים
            </h2>
            <br />
            <br />

            <div className="homeButtomDiv">
              <p>
                חברת ‘קייטרינג גורמה’ הינה חברה וותיקה הפועלת בתחום האוכל המוכן,
                החברה מספקת אוכל כשר למהדרין ברמה הגבוהה ביותר, הן מבחינת הטעם
                המשובח
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
