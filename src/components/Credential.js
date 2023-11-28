import React from 'react';
import profileImg from "./svg/pro.jpg";
import { FaCode, FaDisplay, FaLinkedinIn, FaGithub } from "react-icons/fa6";



function Credential() {
 return (
   <div className="credential">
     {/* first */}
     <div className="credential-sidebar">
       <img src={profileImg} />
       <div className="serviceiconcer">
         <div>
           <FaLinkedinIn />
         </div>
         <div>
           <FaGithub />
         </div>
         <div></div>
       </div>
         <button>Contact me</button>
 
     </div>

     {/* second */}
     <div className="credential-content">
       <h4 className="title-credential">ABOUT ME</h4>
       <p className="text-credential">
         Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
         porttitor rhoncus dolor purus non enim praesent in elementum sahas
         facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
         dignissim diam quis enim lobortis viverra orci sagittis eu volutpat
         odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in
         ornare quam sisd sit amet luctussd fav venenatis, lectus magna
         fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz
         elementum sahas facilisis leot
       </p>
       <h4 className="title-credential">EXPERIENCE</h4>
       <p class="date">2021 - 2023</p>
       <h3>Graphic designer</h3>
       <p class="type"> Television school</p>
       <p class="text-credential">
         Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
         porttitor rhoncus dolor purus non enim praesent in elementum sahas
         facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
         dignissim diam quis enim lobortis viverra orci sagittis eu volutpat
         odio facilisis mauris sit.
       </p>

       <p class="date">2020 - 2021</p>
       <h3>Web designer</h3>
       <p class="type">freelancer</p>
       <p class="text-credential">
         Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
         porttitor rhoncus dolor purus non enim praesent in elementum sahas
         facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
         dignissim diam quis enim lobortis viverra orci sagittis eu volutpat
         odio facilisis mauris sit.
       </p>

       <h4 className="title-credential">EDUCATION</h4>
       <p class="date">2019 - 2021</p>
       <h3>Associate IT</h3>
       <p class="type"> Valiasr University</p>
       <p class="text-credential">
         Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
         porttitor rhoncus dolor purus non enim praesent in elementum sahas
         facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
         dignissim diam quis enim lobortis viverra orci sagittis eu volutpat
         odio facilisis mauris sit.
       </p>

       <p class="date">2022 - 2023</p>
       <h3>Bachelor of web programming</h3>
       <p class="type">Applied science of informatics</p>
       <p class="text-credential">
         Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
         porttitor rhoncus dolor purus non enim praesent in elementum sahas
         facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
         dignissim diam quis enim lobortis viverra orci sagittis eu volutpat
         odio facilisis mauris sit.
       </p>

       <h4 className="title-credential">SKILLS</h4>
       <div className="skill">
         <div>
           <h3> JavaScript</h3>
           <p class="date">50%</p>
         </div>
         <div>
           <h3> Figma</h3>
           <p class="date">50%</p>
         </div>
         <div>
           <h3> React</h3>
           <p class="date">50%</p>
         </div>
         <div>
           <h3> WordPress</h3>
           <p class="date">80%</p>
         </div>
         <div>
           <h3> Adobe XD</h3>
           <p class="date">80%</p>
         </div>
         <div>
           <h3> Adobe illustrator</h3>
           <p class="date">80%</p>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Credential;