import React from "react";
import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Form, Col } from "react-bootstrap";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import {
  saladsProducts,
  VegetarianProducts,
  FirstMenuFishMeet,
  SecondMenuMeet,
  ExtrasMenu,
  SpecialMenuShabat,
  VariousMenu,
  TypesOfBreads,
  TypesOfGrilled,
  ExtrasOfGrilled,
} from "../Consts";
import "../css/ProductCheckbox.css";

const ProductCheckbox = ({ addItemHandler }) => {
  const [items , setItems] = useState([]);
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    NumberOfServings: "",
    date: "",
    day: "",
    hour: "",
    Comments: "",
  });
  const InputChange = (event) => {
    setInput((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };
  function HandleSubmit(evt) {
    evt.preventDefault();
    console.log(input);
  }
  addItemHandler = (e) => {
    let itemsArr = [...items];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setItems(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setItems(itemsArr);
    }
    console.log(itemsArr);
  };

  const salads = saladsProducts.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const vegetarian = VegetarianProducts.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const firstMenu = FirstMenuFishMeet.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const secondMenu = SecondMenuMeet.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const extrasMenu = ExtrasMenu.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const specialMenu = SpecialMenuShabat.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const variousMenu = VariousMenu.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const typeBreads = TypesOfBreads.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const typeGrilled = TypesOfGrilled.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });
  const extrasGrilled = ExtrasOfGrilled.map((index) => {
    return (
      <div key={index} className="ProductCheckbox">
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              key={index}
              value={index}
              control={<Checkbox color="primary" />}
              label={index}
              onChange={addItemHandler}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });

  return (
    <div>
      <h6 className="saladsTitle">סלטים (6 לבחירה)</h6>
      <br />
      <FormGroup aria-label="position" row>
        {salads}
      </FormGroup>
      <br />
      <div>
        <h6 className="saladsTitle">מנה ראשונה - צמחוני (3 לבחירה)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {vegetarian}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">מנה ראשונה בשרי/דגים (3 לבחירה)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {firstMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">עיקריות (3 לבחירה)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {secondMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">תוספות (3 לבחירה)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {extrasMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">המיוחדים של שבת</h6>
        <br />
        <FormGroup aria-label="position" row>
          {specialMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">שונות (בתוספת תשלום)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {variousMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">מספר סוגי לחמים (ללא הגבלה)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {typeBreads}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">בשרים על האש (ללא הגבלה)</h6>
        <br />
        <FormGroup aria-label="position" row>
          {typeGrilled}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="saladsTitle">תוספות</h6>
        <br />
        <FormGroup aria-label="position" row>
          {extrasGrilled}
        </FormGroup>
      </div>
      <br />
      <br />
      <div className="orderFormBasicMenu">
        <Form onSubmit={HandleSubmit}>
          <Form.Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                value={input.name}
                onChange={InputChange}
                className="FormStyle"
                placeholder="שם"
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                name="phone"
                value={input.phone}
                onChange={InputChange}
                className="FormStyle"
                placeholder="טלפון"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="email"
                value={input.email}
                onChange={InputChange}
                className="FormStyle"
                placeholder="אימייל"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="address"
                value={input.address}
                onChange={InputChange}
                className="FormStyle"
                placeholder="כתובת"
              />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <Form onSubmit={HandleSubmit}>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                name="NumberOfServings"
                value={input.NumberOfServings}
                onChange={InputChange}
                className="FormStyle"
                placeholder="מספר מנות"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="date"
                value={input.date}
                onChange={InputChange}
                className="FormStyle"
                placeholder="תאריך"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="day"
                value={input.day}
                onChange={InputChange}
                className="FormStyle"
                placeholder="יום"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="hour"
                value={input.hour}
                onChange={InputChange}
                className="FormStyle"
                placeholder="שעה"
              />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <Form onSubmit={HandleSubmit}>
          <Form.Row>
            <Col>
              <Form.Control
                type="text"
                name="Comments"
                value={input.Comments}
                onChange={InputChange}
                className="CommentsToOrderBasicMenu"
                placeholder="הערות להזמנה"
              />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <br />
        <Button
          onClick={HandleSubmit}
          type="submit"
          className="buttonSendOrder"
        >
          שלח
        </Button>
      </div>
    </div>
  );
};
export default ProductCheckbox;
