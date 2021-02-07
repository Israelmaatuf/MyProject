import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="headerContact">
      <div className="contactConteiner">
        <div className="contactTitle">
        <h2>צרו קשר</h2>
        </div>
        <div className="contactForm">
            <input type="text" placeholder="שם"/>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
