import React from "react";
import Logo from "../images/Logo.png";

const navbar = () => {
  return (
    <div>
      <ul className="menu">
        <img  src={Logo} alt="" height="40px" />
        <h3 className="logo" >NUMIA</h3>
        <li className="home">Home</li>
        <li className="home">About</li>
        <a
          className="contact"
          target="blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRYxYUtbgLPMdEMB6_ao05S56hxUwpK6-KUS6O73lST49-Vg/viewform"
        >
          <li className="home">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default navbar;
