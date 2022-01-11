import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./Footer.css"

const Footer = () => {
 // fontawesome icon
 const copyRight = <FontAwesomeIcon icon={faCopyright} />;
 const telephone = <FontAwesomeIcon icon={faPhone} />;
 return (
   <div className="text-center footer-bg rounded p-2 pt-5">
     <h2>Contact Us</h2>
     <hr />
     <div className="row">
       <div className="col-md-6">
         <h4>CUSTOMER SUPPORT</h4>
         <p>Get in touch with your accommodation provider.</p>
         <p>{ telephone} (+880) 123 456 7890</p>
       </div>
       <div className="col-md-6">
       <h4>Email Us</h4>
         <p>travel@delight.com</p>
       </div>
     </div>
       <p className='mt-2'>Copyright {copyRight} Travel & Delight. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;