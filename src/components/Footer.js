import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../css/Footer.css";
import { Link } from 'react-router-dom';




export default function Footer() {
  

  return (
    <footer>
    <MDBFooter color="white" className="Footer">
      <MDBContainer>
        <Link className="iconsFooter">
        <MailIcon/>
        </Link>    
        <Link className="iconsFooter">
        <PhoneEnabledIcon/>
        </Link>     
        <Link className="iconsFooter">
        <WhatsAppIcon/>
        </Link>      
        <Link className="iconsFooter">
        <FacebookIcon/>
        </Link>      
      </MDBContainer>
      <div >
        <MDBContainer fluid>
        Copyright {new Date().getFullYear()} &copy; All rights Reserved. Created by Israel Maatuf
        </MDBContainer>
      </div>
    </MDBFooter>
    </footer>
  );
}


    
 
