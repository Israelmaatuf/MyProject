import React from "react";

import CheckBoxBasic from "./CheckBoxBasic";

import "./EventMenu.css";

function EventMenu() {
  return (
    <div className="headerEventsMenu">
      <div className="eventsMenuTitle">
        <div>
          <h2>טופס הזמנה אירועים</h2>
        </div>
      </div>
      
      <div className="inputEventsMenu">
        <CheckBoxBasic />
      </div>
      <div className="eventsMenuDiv">
        <span className="eventsMenuSpan">תפריט אירועים</span>
      </div>
      
      <div className="eventsPrice">
        <span>₪</span>
        <span>70</span>
      </div>
      <div className="eventsPriceSpan">
      <span> -החל מ</span>
      </div>
      <br />
      
      <ul dir="rtl" className="ulEventsTablePrice">
        <li>
          <div  className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">7 סלטים + 3 תוספות + 3 עיקריות</span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">לחמניות</span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">מלצרות והפקה</span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">שתיה קלה</span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">כלים חד פעמיים מהודרים</span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">כלים פורצלן (כולל מפות ומפיות)
בתוספת 15 ₪</span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">מיקס לחמים בתוספת 3 ₪  </span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">קינוח + שתיה חמה בתוספת 5 ₪  </span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <span className="spanEventsSalats">בר קבלת פנים - 3 לבחירה בתוספת 15 ₪</span>
          </div>
        </li>
        
        <li>
          <div className="priceEventsTable">
            <span className="spanEventsSalats">
              הדברים המסומנים בכוכבית הינם בתוספת 5 ₪
            </span>
          </div>
        </li>
        <li>
          <div className="priceEventsTable">
            <span className="spanEventsSalats">
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
      
      
    </div>
  );
}

export default EventMenu;
