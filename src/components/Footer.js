import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">shabnam</div>
      <div className="footermenu">
        <div className="menu">
          <ul>
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
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
