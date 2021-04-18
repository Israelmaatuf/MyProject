import React from "react";

import ProductCheckbox from "../components/ProductCheckbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../css/BasicMenu.css";

export default function BasicMenu({
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
          <Paper className="MenuBasicGrid">
            <div className="basicMenuDiv">
              <span>תפריט בייסיק</span>
            </div>

            <div className="basicPrice">
              <span>₪</span>
              <span>35</span>
            </div>
            <br />
            <ul dir="rtl" className="ulTablePrice">
              <li>
                <div className="priceTable">
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
                  <span className="spanSalat">6 סלטים</span>
                </div>
              </li>
              <li>
                <div className="priceTable">
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
                  <span className="spanSalat">3 תוספות</span>
                </div>
              </li>
              <li>
                <div className="priceTable">
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
                  <span className="spanSalat">3 עיקריות</span>
                </div>
              </li>
              <li>
                <div className="priceTable">
                  <span className="spanSalat"> מנה ראשונה בתוספת 10 ₪</span>
                </div>
              </li>
              <li>
                <div className="priceTable">
                  <span className="spanSalat">
                    הדברים המסומנים בכוכבית הינם בתוספת 5 ₪
                  </span>
                </div>
              </li>
            </ul>
            <div className="basicPriceBottom">
              <div className="priceTableBottomFooter">
                * שינויים בתפריט עד 48 שעות קודם האירוע.
                <br />
                * תינתן מקדמה בסגירה והיתרה בזמן אספקת ההזמנה.
                <br /> * לאחר סגירת ההזמנה יש לוודא שההזמנה התקבלה.
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <div className="basicMenuTitle">
            <h2>טופס הזמנה בייסיק</h2>
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
