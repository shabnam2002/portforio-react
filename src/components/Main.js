import React from 'react';
import profileImg from "./svg/pro.jpg";
import { Link } from "react-router-dom";
import { FaCode, FaDisplay, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { BiPalette } from "react-icons/bi";
import gfonts from "./svg/gfonts.png";




function Main() {
 return (
   <div>
     <div className="mainbio">
       <div className="profile">
         <img src={profileImg} />
         <div className="descprofile">
           <h6>A WEB DESIGNER</h6>
           <h1>ُShabnam Moradi</h1>
           <p>i am Web Designer </p>
         </div>
       </div>
       <div className="widget">
         <div className="animationbio">LATEST WORK AND FEATUREDStar</div>
         <div className="Credandpro">
           <div className="ProfileWidget">
             <Link to="/credential">
               <h2>Credentials</h2>
             </Link>
             <p>more about me</p>
           </div>
           <div className="projects">
             <h2>projects</h2>
             <p>more about me</p>
           </div>
         </div>
       </div>
     </div>
     {/* section2 */}
     <div className="secondmain">
       {/* gfonts */}
       <div className="gfonts">
         <img src={gfonts} />
         <div>
           <h4> GFonts</h4>
           <p className="title">blog</p>
         </div>
       </div>
       {/* service */}
       <div className="service">
         <div className="serviceicon">
           <div>
             <FaCode />
           </div>
           <div>
             <FaDisplay />
           </div>
           <div>
             <BiPalette />
           </div>
         </div>
         <h4>Services Offering</h4>
         <p className="title">SPECIALIZATION</p>
       </div>

       {/* profiles */}

       <div className="profilesMenu">
         <div className="profileicon">
           <div>
             <FaLinkedinIn />
           </div>
           <div>
             <a href="https://github.com/shabnam2002">
               <FaGithub />
             </a>
           </div>
         </div>
         <h4>Profiles</h4>
         <p className="title">stay with me</p>
       </div>
     </div>

     {/* section 3 */}
     <div className="sectionthird">
       <div className="numberproject">
         <div>
           <h2>01</h2>
           <p className="title">YEARS</p>
           <p className="title">EXPERIENCE</p>
         </div>
         <div>
           <h2>+125</h2>
           <p className="title">CLIENTS</p>
           <p className="title">WORLDWIDE</p>
         </div>
         <div>
           <h2>+210</h2>
           <p className="title">TOTAL</p>
           <p className="title">PROJECTS</p>
         </div>
       </div>

       <div className="worktogether">
         Let's work <span>together</span>
       </div>
     </div>
   </div>
 );
}

export default Main;