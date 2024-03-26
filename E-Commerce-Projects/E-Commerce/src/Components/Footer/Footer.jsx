import React from "react";
import { Link } from "react-router-dom";

//___ Icons ___//
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

//___ Images ___//
import Logo from "/images/icons/Company_orrange.png";
import BdFlag from "/images/bd.svg";
import UsaFlag from "/images/us.svg";

//___ Css ___//
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="topFooter d-flex flex-start">
          <div>
            <img src={Logo} alt="" className="logo" />
            <p>@ 2024 shovon software Pvt. Ltd</p>
          </div>

          <div className="footerColumn">
            <h2 className="title">Company</h2>
            <Link className="links">About</Link>
            <Link className="links">Careers</Link>
            <Link className="links">Terms</Link>
          </div>

          <div className="footerColumn">
            <h2 className="title">Help & Support</h2>
            <Link className="links">Company</Link>
            <Link className="links">Partner with us</Link>
            <Link className="links">Call us</Link>
          </div>

          <div className="footerColumn">
            <h2 className="title">We delever to </h2>
            <Link className="links">
              <img src={BdFlag} alt="" /> Bangladesh
            </Link>
            <Link className="links">
              <img src={UsaFlag} alt="" /> Usa
            </Link>
            <Link className="links">
              <img src={BdFlag} alt="" /> Bangladesh
            </Link>
            <Link className="links">
              <img src={UsaFlag} alt="" /> Usa
            </Link>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerContainer">
          <span className="">&#169;</span> All right reserved by{" "}
          <span className="">COMPANY</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
