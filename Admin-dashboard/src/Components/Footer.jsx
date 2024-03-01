import React from "react";

//___ CSS ___//
import "../assets/css/footer.css";

//___ Images ___//
import BkashImg from "../assets/images/bkash-icon-png.webp";
import NagadImg from "../assets/images/nagad.png";
import RoketImg from "../assets/images/roket.png";
import VisaImg from "../assets/images/visa.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="main-panel">
          <div className="">
            <div className="footer-top">
              <div>
                <div className="brand">
                  <h3 className="footer-title">SHOPPING MART</h3>
                </div>
                <div className="d-flex">
                  <i className="fa-solid fa-headset"></i>
                  <div>
                    <p>Got Questions? Call us 24/7</p>
                    <p>01790238340</p>
                  </div>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <p className="boldTxt" style={{ fontSize: "20px" }}>
                    Contact Info
                  </p>
                  <p className="address">
                    Hetemkhan,TomizuddinRoad,Kalabagan,Rajshahi
                  </p>
                  <div className="footer-icons">
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" className="link-hovered">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="footer-title">Find It Fast</h3>
                <ul>
                  <li>
                    <a href="">Laptop & Computers</a>
                  </li>
                  <li>
                    <a href="">Cameras & Photography</a>
                  </li>
                  <li>
                    <a href="">Smartphones & Tablets</a>
                  </li>
                  <li>
                    <a href="">Video Games & Consoles</a>
                  </li>
                  <li>
                    <a href="">Tv & Audio</a>
                  </li>
                  <li>
                    <a href="">Gadgets</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title">Customer Care</h3>
                <ul>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">My Account</a>
                  </li>
                  <li>
                    <a href="">Track Your Order</a>
                  </li>
                  <li>
                    <a href="">Customer Services</a>
                  </li>
                  <li>
                    <a href="">Returns/Exchenges</a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">Product Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-item">
                <div>
                  <p>
                    <i className="fa-regular fa-copyright"></i>{" "}
                    <span className="boldTxt">Shopping Mart</span>-All Right
                    Reserved
                  </p>
                </div>
                <div className="payment-img d-flex-full">
                  <img src={BkashImg} />
                  <img src={NagadImg} />
                  <img src={RoketImg} />
                  <img src={VisaImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
