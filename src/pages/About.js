/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@material-ui/core/Grid";
import "../css/About.css";

function About() {
  return (
    <div dir="rtl" className="About">
      <div className="headerAbout">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className="titleAbout">
              <h2>אודותינו</h2>
            </div>
            <div className="aboutDetailsP">
              <p>חמש עשרה שנה שאנחנו בשף פנחס מספקים שירותי הסעדה</p>
              <br />
              <p>
                מקייטרינג עלום בלוד אל מרכז קולינרי שמעניק שירותי הסעדה כוללים
                ומקבל מאות פניות שבועיות
              </p>
              <br />
              <p>
                העשייה הקולינרית היא בדנ"א של הקייטרינג שלנו, על דגלנו חרטנו
                להנגיש את המטעמים הטעימים ביותר בהשגחת הכשרות המהודרת ביותר.
                וגאים לעשות זאת כבר חמש עשרה שנה
              </p>
              <br />
              <p>
                להכין אוכל ולהפיק אירועים שמרגשים ומותירים חותם באנשים, נותן לנו
                סיפוק עצום להמשיך ולמנף את פעילות הקייטרינג ולשרת כמה שיותר
                אנשים ולשפר ללא הפסק את המנות בתפריט ולחדש טעמים
              </p>
              <br />
              <p>
                משפחת הלקוחות שלנו יודעת שכשהיא ממליצה עלינו, אנחנו נתן את הכל
                בשביל שהאירוע והאוכל יצא מושלם ובכשרות המהודרת ביותר
              </p>
              <br />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img className="aboutPic" src="images/aboutpic2.jpg"></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
