import React from 'react';
import { BiLogoGmail, BiSolidPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
 return (
   <div className="contact-main">
     <div className="info">
       <h4>CONTACT INFO</h4>
       <div className="iconmycontact">
         <div className="mail">
           <div className="iconsocial">
             <BiLogoGmail />
           </div>
           <div className="">
             <p className="titleicon-contact">MAIL US</p>
             <p>moradishabnam22@gmail.com</p>
           </div>
         </div>

         <div className="mail">
           <div className="iconsocial">
             <BiSolidPhone />
           </div>
           <div className="descinfo">
             <p className="titleicon-contact">CONTACT US</p>
             <p>09013046602</p>
           </div>
         </div>

         <div className="mail">
           <div className="iconsocial">
             <FaLocationDot />
           </div>
           <div className="descinfo">
             <p className="titleicon-contact">LOCATION</p>
             <p>iran</p>
           </div>
         </div>
       </div>
     </div>
     <div className="form">
       <form>
         <input type="text" placeholder="Name*" />
         <input type="text" placeholder="Email*" />
         <input type="text" placeholder="Your Subject" />
         <input type="text" placeholder="Your Message" className='message' />
         <button className='button-message'>send message</button>
       </form>
     </div>
   </div>
 );
}

export default Contact;