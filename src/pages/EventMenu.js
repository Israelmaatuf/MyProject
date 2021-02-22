import React from "react";

import ProductCheckbox from "../components/ProductCheckbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../css/EventMenu.css";

export default function EventMenu({
  saladsProducts,
  VegetarianProducts,
  FirstMenuFishMeet,
  SecondMenuMeet,
  ExtrasMenu,
  SpecialMenuShabat,
  VariousMenu,
}) {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <Paper className="MenuEventsGrid">
          <div className="eventsMenuDiv">
                <span>תפריט אירועים</span>
              </div>

              <div className="eventsPrice">
                <span>₪</span>
                <span>70</span>
              </div>
              <div className="eventsSpanPrice">
                <span> -החל מ</span>
              </div>
              <br />
              <ul dir="rtl" className="ulTableEventsPrice">
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      7 סלטים + 3 תוספות + 3 עיקריות
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">לחמניות</span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">מלצרות והפקה</span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">שתיה קלה</span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      כלים חד פעמיים מהודרים
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      מנה ראשונה בתוספת 10 ₪
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      כלים פורצלן (כולל מפות ומפיות) בתוספת 15 ₪
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      מיקס לחמים בתוספת 3 ₪
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      קינוח + שתיה חמה בתוספת 5 ₪
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                      בר קבלת פנים - 3 לבחירה בתוספת 15 ₪
                    </span>
                  </div>
                </li>

                <li>
                  <div className="priceTableEvents">
                    <span className="spanEventsDetails">
                      הדברים המסומנים בכוכבית הינם בתוספת 5 ₪
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <span className="spanEventsDetails">
                      הובלה בתוספת תשלום
                    </span>
                  </div>
                </li>
              </ul>
              <div className="eventsPriceBottom">
                <div className="priceEventsTableBottomFooter">
                  * שינויים בתפריט עד 48 שעות קודם האירוע.
                  <br />
                  * תינתן מקדמה בסגירה והיתרה בזמן אספקת ההזמנה.
                  <br /> * לאחר סגירת ההזמנה יש לוודא שההזמנה התקבלה.
                </div>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <div className="eventsMenuTitle">
            <h2>טופס הזמנה אירועים</h2>
          </div>

          <div>
            <ProductCheckbox
              items={
                (saladsProducts,
                VegetarianProducts,
                FirstMenuFishMeet,
                SecondMenuMeet,
                ExtrasMenu,
                SpecialMenuShabat,
                VariousMenu)
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
