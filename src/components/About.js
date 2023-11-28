import React from 'react';
import profileImg from "./svg/pro.jpg";


function About() {
 return (
   <div className="mainabout">
     {/* first section */}
     <div className="firstabout">
       <div className="aboutimg">
         <img src={profileImg} />
       </div>
       <div>
         <div>
           <h1 className="SELFSUMMARY">SELF-SUMMARY</h1>
         </div>
         <div className="selfsummerytext">
           <h3>Shabnam Moradi</h3>
           <p>
             I am a 21 year old girl who is currently studying at the University
             of Informatics. I love learning and experience in the field of
             programming.
           </p>
         </div>
       </div>
     </div>

     {/* second section */}

     <div className="secondabout">
       <div className="EXPERIENCE">
         <h3>EXPERIENCE</h3>
         <ul>
           <li>
             <p class="date">2021 - 2023</p>
             <h2>Graphic designer</h2>
             <p class="type"> Television school</p>
           </li>
           <li>
             <p class="date">2020 - 2021</p>
             <h2>Web designer</h2>
             <p class="type">freelancer</p>
           </li>
         </ul>
       </div>

       <div className="EDUCATION">
         <h3>EDUCATION</h3>
         <ul>
           <li>
             <p class="date">2019 - 2021</p>
             <h2>Associate IT</h2>
             <p class="type"> Valiasr University</p>
           </li>
           <li>
             <p class="date">2022 - 2023</p>
             <h2>Bachelor of web programming</h2>
             <p class="type">Applied science of informatics</p>
           </li>
         </ul>
       </div>
     </div>
   </div>
 );
}

export default About;