import React from "react";
import "../css/Footer.css";


const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-icons">
        <a className="linkToMail" href="mailto:ymbaku@gmail.com">
          <i alt="mail-icon" className="fas fa-envelope" />
        </a>
        <a className="phoneToChef" href="tel:0542140770">
          <i alt="phone-icon" className="fas fa-phone" />
        </a>
        <a className="whatsappToChef" href="https://api.whatsapp.com/send?phone=0542140770">
          <i alt="whatsapp-icon" className="fab fa-whatsapp" />
        </a>
        <a className="facebookToChef" href="https://www.facebook.com/israel.maatuf/">
          <i alt="facebook-icon" className="fab fa-facebook-f" />
        </a>
      </div>
      <div className="Footer-rights">
      Copyright 2021© All rights Reserved. Created by Israel Maatuf

      </div>
    </footer>
  );
};

export default Footer;