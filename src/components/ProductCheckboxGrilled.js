import React from "react";
import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Form, Col } from "react-bootstrap";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import {
  saladsProducts,
  TypesOfBreads,
  TypesOfGrilled,
  ExtrasOfGrilled,
} from "../Consts";
import "../css/ProductCheckbox.css";

const ProductCheckboxGrilled = ({
  addItemHandler,
  addItemOfSalads,
  addItemOfBreads,
  addItemOfGrilled,
  addItemOfExtras,
}) => {
  const [selectedSalads, setSelectedSalads] = useState([]);
  const [selectedBreads, setSelectedBreads] = useState([]);
  const [selectedGrilled, setSelectedGrilled] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
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
  addItemOfBreads = (e) => {
    let itemsArr = [...selectedBreads];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedBreads(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedBreads(itemsArr);
    }
    console.log(itemsArr);
  };
  addItemOfGrilled = (e) => {
    let itemsArr = [...selectedGrilled];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedGrilled(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedGrilled(itemsArr);
    }
    console.log(itemsArr);
  };
  addItemOfExtras = (e) => {
    let itemsArr = [...selectedExtras];
    if (e.target.checked) {
      itemsArr.push(e.target.value);
      setSelectedExtras(itemsArr);
    } else {
      itemsArr = itemsArr.filter((value) => value !== e.target.value);
      setSelectedExtras(itemsArr);
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
              onChange={addItemOfBreads}
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
              onChange={addItemOfGrilled}
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
              onChange={addItemOfExtras}
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  });

  return (
    <div>
      <h6 className="productTitle">סלטים (6 לבחירה)</h6>
      <br />
      <FormGroup dir="rtl" aria-label="position" row>
        {salads}
      </FormGroup>
      <br />
      <div>
        <h6 className="productTitle">מספר סוגי לחמים (ללא הגבלה)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {typeBreads}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">בשרים על האש (ללא הגבלה)</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {typeGrilled}
        </FormGroup>
      </div>
      <br />
      <div>
        <h6 className="productTitle">תוספות</h6>
        <br />
        <FormGroup dir="rtl" aria-label="position" row>
          {extrasGrilled}
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
        >
          שלח
        </Button>
      </div>
    </div>
  );
};
export default ProductCheckboxGrilled;
