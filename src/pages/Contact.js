import React from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ContactImage from "../images/contactImage.jpg";
import { useState } from "react";
import { MdEmail  } from "react-icons/md";
import { FaInstagramSquare , FaPhone , FaWhatsapp } from "react-icons/fa";
import Grid from '@material-ui/core/Grid';
import "../css/Contact.css";


export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    massage: "",
  });
  const InputChange = (event) => {
    setContact((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };
  function HandleSubmit(evt) {
    evt.preventDefault();
    console.log(contact);
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          
          <div className="contactTitle">
        <h2>צרו קשר</h2>
        </div>
          
        </Grid>
        <Grid item xs={6}>
          
          <div >
            <Image className="contactImage" src={ContactImage}></Image>
          </div>
          
        </Grid>
        <Grid item xs={6}>
          
          <div className="ContactForm">
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                className="FormStyleContact"
                placeholder="שם"
                name="name"
                type = "text"
                value={contact.name}
                onChange={InputChange}
              />
            </Col>
            <Col>
              <Form.Control
                className="FormStyleContact"
                placeholder="טלפון"
                name="phone"
                type = "number"
                value={contact.phone}
                onChange={InputChange}
              />
            </Col>
            <br/>
            
            <Col>
              <Form.Control
                className="FormStyleContact"
                placeholder="אימייל"
                name="email"
                type = "text"
                value={contact.email}
                onChange={InputChange}
              />
            </Col>
          </Form.Row>
        </Form>
        <br />

        <br />
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                className="WriteAMassage"
                placeholder="הודעה"
                name="massage"
                type = "text"
                value={contact.massage}
                onChange={InputChange}
              />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <br />
        <Button onClick={HandleSubmit} type="submit" className="ButtonSendAMassage">
          שלח הודעה
        </Button>
      </div>
      <div>
        <a href="mailto:ymbaku@gmail.com" target="blank" className="iconsContact" >
          <MdEmail />                      
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/chef_pinchas/" target="blank" className="iconsContact">
          <FaInstagramSquare />                      
        </a>
      </div>
      <div>
        <a href="tel:0537302276" target="blank" className="iconsContact" >
          <FaPhone />                      
        </a>
      </div>
      <div>
        <a href="https://api.whatsapp.com/send?phone=0537302276" target="blank" className="iconsContact" >
          <FaWhatsapp />                      
        </a>
      </div>
      <br/><br/><br/>
      <div className="contactDetails">
      <h4>להזמנות: 053-7302276</h4>
      <h4>כתובת: צמח צדק 10/1, לוד</h4>
      </div>
      
          
        </Grid>

      </Grid>
    </div>
  );
}