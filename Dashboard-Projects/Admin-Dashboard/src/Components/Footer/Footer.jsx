import React from "react";

//___ Icons ___//
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

//___ Css ___//
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer d-flex">
      <div className="left">
        <h3>Shoppint Mart</h3>
      </div>
      <div className="right d-flex">
        <div className="icon d-flex">
          <FaFacebook />
        </div>
        <div className="icon d-flex">
          <FaTwitter />
        </div>
        <div className="icon d-flex">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
