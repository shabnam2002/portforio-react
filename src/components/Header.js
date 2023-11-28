import React , {useState} from 'react';
import { Link } from "react-router-dom";
import Menu from "../components/svg/bars-solid.svg";
import Close from "../components/svg/times-solid.svg";


function Header() {


 const [menu, setMenu] = useState(false);

 const toggleMenu = () => {
   setMenu(!menu);
 };

 const styleMenu = {
   right: menu ? 0 : "-100%",
 };



 return (
   <header className="headerMain">
     <div className="logo">shabnam</div>
     <div className="menu">
       <ul style={styleMenu}>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="">Works</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
         <li>
           <img
             src={Close}
             width="20"
             onClick={toggleMenu}
             className="menum "
             alt="menu"
           />
         </li>
       </ul>
     </div>
     <Link to="/contact">
       <button className="talk">Let's talk</button>
     </Link>
     <div className="menum" onClick={toggleMenu}>
       <img src={Menu} width="30" alt="menu" />
     </div>
   </header>
 );
}

export default Header;