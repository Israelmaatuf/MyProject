import React from "react";
// import { Linking } from 'react-native'
import { useState } from "react";
import { MdEmail  } from "react-icons/md";
import { FaFacebookF , FaPhone , FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ContactImage from "../images/contactImage.jpg";
import { Form, Col, Button } from "react-bootstrap";
import "../css/Contact.css";

function Contact() {
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
    <div className="headerContact">
      <div className="contactConteiner">
        <div className="contactTitle">
        <h2>צרו קשר</h2>
        </div>
          <div >
            <Image className="contactImage" src={ContactImage}></Image>
          </div>
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
        <Link to="/mailto:ymbaku@gmail.com" className="iconsContact" >
          <MdEmail />                      
        </Link>
      </div>
      <div>
        <Link className="iconsContact">
          <FaFacebookF />                      
        </Link>
      </div>
      <div>
        <Link className="iconsContact" >
          <FaPhone />                      
        </Link>
      </div>
      <div>
        <Link className="iconsContact" >
          <FaWhatsapp />                      
        </Link>
      </div>
      <div className="contactDetails">
      <h3>להזמנות: 053-7302276</h3>
      <h3>כתובת: צמח צדק 10/1, לוד</h3>
      </div>
      </div>
      
    </div>
  );
}

export default Contact;
