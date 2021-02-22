import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import { FaInstagramSquare, FaPhone, FaWhatsapp } from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=0537302276"
          target="blank"
          className="iconsFooter"
        >
          <FaWhatsapp />
        </a>
        <a href="tel:0537302276" target="blank" className="iconsFooter">
          <FaPhone />
        </a>
        <a
          href="https://www.instagram.com/chef_pinchas/"
          target="blank"
          className="iconsFooter"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="mailto:ymbaku@gmail.com"
          target="blank"
          className="iconsFooter"
        >
          <MailIcon />
        </a>
      </div>

      <div>
        Copyright {new Date().getFullYear()} &copy; All rights Reserved. Created
        by Israel Maatuf
      </div>
    </footer>
  );
}
