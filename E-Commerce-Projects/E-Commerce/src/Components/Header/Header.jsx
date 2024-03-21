import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//
import { FaUserAlt, FaHeadphonesAlt } from "react-icons/fa";
import {
  FaCartShopping,
  FaAngleDown,
  FaTruckFast,
  FaShield,
} from "react-icons/fa6";
import { IoEarth, IoSearch } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

//___ Css ___//
import "./Header.scss";

//___ Images ___//
import LogoSky from "/images/logo-sky.png";
import BdFlag from "/images/bd.svg";
import UsFlag from "/images/us.svg";

//___ Data ___//
// import { notificationDataLength } from "../../Data";

//___ Components ___//
// import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = (props) => {
  // Props
  const { setColor } = props;

  // States
  const [toggler, setToggler] = useState(false);

  return (
    <div className={`Header ${toggler == true ? "active" : ""}`}>
      <div className="headerContainer">
        <div className="firstHeader">
          <div className="d-flex">
            <div>
              <div className="menus d-flex">
                <li>
                  <NavLink>Become a Seller</NavLink>
                </li>
                <li>
                  <NavLink>Daraz Donates</NavLink>
                </li>
                <li className="dropDownParent">
                  <NavLink>Help & Support</NavLink>
                  <div className="dropDownBox" style={{ width: "400px" }}>
                    <div className="corner"></div>
                    <NavLink className="d-flex dropDownItem">
                      <FaUserAlt className="icon" />
                      Help Center
                    </NavLink>
                    <NavLink className="d-flex dropDownItem">
                      <FaHeadphonesAlt className="icon" />
                      Chat with Us
                    </NavLink>
                    <NavLink className="d-flex dropDownItem">
                      <FaCartShopping className="icon" /> Order
                    </NavLink>
                    <NavLink className="d-flex dropDownItem">
                      <FaTruckFast className="icon" /> Shipping & Delivery
                    </NavLink>
                    <NavLink className="d-flex dropDownItem">
                      <FaShield className="icon" /> CCMS- Central Complain
                      Management System
                    </NavLink>
                  </div>
                </li>
              </div>
            </div>
            <div className="appBtn d-flex">
              <img src={LogoSky} alt="" />
              <p>Save More on App</p>
            </div>
          </div>
          <div className="additionalSecondHeader">
            <div className="logo d-flex">
              <img src="/images/logo.png" alt="" />
            </div>
            <div
              className="toggler"
              onClick={() => setToggler((prev) => !prev)}
            >
              <HiMenu size={25} />
            </div>
          </div>
        </div>
        <div className="secondHeader d-flex">
          <div className="logo d-flex">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="searchBox">
            <div className="searchItem">
              <input type="text" placeholder="Search here" />
              <div className="searchBtn d-flex">
                <IoSearch size={20} />
              </div>
            </div>
          </div>
          <div className="menus d-flex">
            <li>
              <NavLink to="/login" className="d-flex">
                <FaUserAlt className="icon" size={17} />
                <p>Login</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="d-flex">
                <p>Signup</p>
              </NavLink>
            </li>
            <li className="country dropDownParent d-flex">
              <NavLink className="">
                <IoEarth className="icon" size={20} />
              </NavLink>
              <p>BD</p>
              <FaAngleDown className="angle" />
              <div className="dropDownBox" style={{ width: "120px" }}>
                <div className="corner"></div>
                <NavLink className="d-flex dropDownItem">
                  <img src={BdFlag} alt="" /> BD
                </NavLink>
                <NavLink className="d-flex dropDownItem">
                  <img src={UsFlag} alt="" /> US
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink className="d-flex cart">
                <FaCartShopping className="icon" size={20} />
                <span className="d-flex">10</span>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
