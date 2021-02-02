import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import homeImage1 from "../images/homepic1.jpg";
import homeImage2 from "../images/homepic2.jpg";
import homeImage3 from "../images/homepic3.jpeg";
import homeImage4 from "../images/homepic4.jpeg";
import React from "react";

import "../css/Home.css";

function Home() {
  return (
    <div className="headerHome">
      <div className="titleHome">
        <div>
          <h1>שף פנחס</h1>
          <h1>קייטרינג & אירועים</h1>
          <h1>כשר למהדרין</h1>
        </div>
      </div>
      <div className="buttonDiv">
        <Link
          to="/Order"
          className="buttonEvents"
        >
          לתפריט אירועים
        </Link>
      </div>
      <div className="homeChef">
        <h2>שף פנחס</h2>
        <h2>כל הטעמים מוזמנים</h2>

        <p className="homeP">
          חברת קייטרינג 'שף פנחס' מספקת שירותי הסעדה לאירועים מזה למעלה מחמש
          עשרה שנה. התפריט המגוון שמורכב מחומרי גלם טריים ואיכותיים ותחת השגחת
          כשרות מהודרת, גרם לאלפי לקוחות מרוצים לשוב ולהזמין
        </p>
        <p className="homeP">
          צוות הפקה מקצועי ומלצרים מנוסים המשרתים את הקהל באדיבות, מוסיפים
          לחוויה הקולינרית חן אנושי והופכים את האירוע להפוך לחוויה בלתי נשכחת
        </p>
        <p className="homeP">
          שף פנחס מתהדר בתפריט מגוון המוצע במחירים נוחים שיאפשרו לכם להנות
          משירותי ההסעדה המעולים במסגרת תקציב משתלמת
        </p>
        <Link className="aboutLink" to="/About">
          אודות שף פנחס
        </Link>
      </div>

      <div className="pic1">
        <Image src={homeImage1}></Image>
        <br />
        <br />
        <Image src={homeImage2}></Image>
      </div>
      <div className="homeButtom">
        <h2 className="homeButtomH2">כשרות מהדרין</h2>
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
            כשאתם נהנים מהמנות המשובחות של הקייטרינג אתם יכולים לסמוך בלב רגוע
            כי הוא הוכן והגש לכם בצורה המהודרת ביותר
          </p>
        </div>
      </div>
      <div className="pic2">
        <Image src={homeImage3}></Image>
      </div>

      <br />
      <div className="pic3">
        <Image src={homeImage4}></Image>
      </div>
      <div className="homeButtom1">
        <h2 className="homeButtom1H2">לקוחות ממליצים</h2>
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
    </div>
  );
}

export default Home;
