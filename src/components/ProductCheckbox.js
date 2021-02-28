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
} from "../Consts";
import "../css/ProductCheckbox.css";

const ProductCheckbox = ({
  addItemHandler,
  addItemOfSalads,
  addItemOfVegetarian,
  addItemOfFirstMenu,
  addItemOfSecondMenu,
  addItemOfExtrasMenu,
}) => {
  const [selectedSalads, setSelectedSalads] = useState([]);
  const [selectedVegetarian, setSelectedVegetarian] = useState([]);
  const [selectedFirstMenu, setSelectedFirstMenu] = useState([]);
  const [selectedSecondMenu, setSelectedSecondMenu] = useState([]);
  const [selectedExtrasMenu, setSelectedExtrasMenu] = useState([]);
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

  addItemOfSalads = (e) => {
    let itemsArr = [...selectedSalads];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedSalads(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedSalads(itemsArr);
    }
    console.log(itemsArr);
  };
  addItemOfVegetarian = (e) => {
    let itemsArr = [...selectedVegetarian];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedVegetarian(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedVegetarian(itemsArr);
    }
    console.log(itemsArr);
  };
  addItemOfFirstMenu = (e) => {
    let itemsArr = [...selectedFirstMenu];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedFirstMenu(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedFirstMenu(itemsArr);
    }
    console.log(itemsArr);
  };
  addItemOfSecondMenu = (e) => {
    let itemsArr = [...selectedSecondMenu];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedSecondMenu(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedSecondMenu(itemsArr);
    }
    console.log(itemsArr);
  };
  addItemOfExtrasMenu = (e) => {
    let itemsArr = [...selectedExtrasMenu];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedExtrasMenu(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedExtrasMenu(itemsArr);
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
              onChange={addItemOfSalads}
              disabled={
                selectedSalads.length >= 6 && !selectedSalads.includes(index)
              }
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
              onChange={addItemOfVegetarian}
              disabled={
                selectedVegetarian.length >= 3 &&
                !selectedVegetarian.includes(index)
              }
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
              onChange={addItemOfFirstMenu}
              disabled={
                selectedFirstMenu.length >= 3 &&
                !selectedFirstMenu.includes(index)
              }
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
              onChange={addItemOfSecondMenu}
              disabled={
                selectedSecondMenu.length >= 3 &&
                !selectedSecondMenu.includes(index)
              }
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
              onChange={addItemOfExtrasMenu}
              disabled={
                selectedExtrasMenu.length >= 3 &&
                !selectedExtrasMenu.includes(index)
              }
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
  const isDisable = input.name.length === 0 || input.phone.length === 0 || input.email.length === 0 
  || input.address.length === 0 || input.NumberOfServings.length === 0 || input.date.length === 0
  || input.day.length === 0 || input.hour.length === 0 ;
  return (
    <div>
      <h6 className="productTitle">סלטים (6 לבחירה)</h6>
      <br />
      <FormGroup dir="rtl" aria-label="position" row>
        {salads}
      </FormGroup>
      <br />
      <div>
        <h6 className="productTitle">מנה ראשונה - צמחוני (3 לבחירה)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {vegetarian}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">מנה ראשונה בשרי/דגים (3 לבחירה)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {firstMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">עיקריות (3 לבחירה)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {secondMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">תוספות (3 לבחירה)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {extrasMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">המיוחדים של שבת</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {specialMenu}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">שונות (בתוספת תשלום)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {variousMenu}
        </FormGroup>
      </div>
      <br />
      <br />
      <div className="orderFormMenu">
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
                className="CommentsToOrderMenu"
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
          disabled={isDisable}
        >
          שלח
        </Button>
      </div>
    </div>
  );
};
export default ProductCheckbox;
