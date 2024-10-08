import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import Logo from "/images/icons/Company_orrange.png";
// import LogoSky from "/images/logo-sky.png";
import BdFlag from "/images/bd.svg";
import UsFlag from "/images/us.svg";
import UserImg from "/images/users/web-page.jpg";

//___ Data ___//
// import { notificationDataLength } from "../../Data";

//___ Components ___//
// import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = (props) => {
  // Props
  const { setColor } = props;

  // States
  const [toggler, setToggler] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className={`Header ${toggler == true ? "active" : ""}`}>
      <div className="headerContainer">
        <div className="firstHeader">
          <div className="d-flex">
            <div>
              <div className="menus d-flex">
                <li>
                  <Link>Become a Seller</Link>
                </li>
                <li>
                  <Link>Donates</Link>
                </li>
                <li className="dropDownParent">
                  <Link>Help & Support</Link>
                  <div className="dropDownBox" style={{ width: "400px" }}>
                    <div className="corner"></div>
                    <Link className="d-flex gap-10 dropDownItem">
                      <FaUserAlt className="icon" />
                      Help Center
                    </Link>
                    <Link className="d-flex gap-10 dropDownItem">
                      <FaHeadphonesAlt className="icon" />
                      Chat with Us
                    </Link>
                    <Link className="d-flex gap-10 dropDownItem">
                      <FaCartShopping className="icon" /> Order
                    </Link>
                    <Link className="d-flex gap-10 dropDownItem">
                      <FaTruckFast className="icon" /> Shipping & Delivery
                    </Link>
                    <Link className="d-flex gap-10 dropDownItem">
                      <FaShield className="icon" /> CCMS- Central Complain
                      Management System
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to="/learn-react">Learn React</Link>
                </li>
              </div>
            </div>
            <div className="appBtn d-flex gap-10">
              <img src={UsFlag} alt="" />
              <p>Save More on App</p>
            </div>
          </div>
          <div className="additionalSecondHeader">
            <div className="logo d-flex">
              <img src={Logo} alt="" />
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
            <img src={Logo} alt="" />
          </div>
          <div className="searchBox">
            <div className="searchItem">
              <input type="text" placeholder="Search here" />
              <div className="searchBtn d-flex">
                <IoSearch size={20} />
              </div>
            </div>
          </div>
          <div className="menus d-flex gap-10">
            <li>
              {isAuthenticated == false ? (
                <Link to="/login" className="d-flex">
                  <FaUserAlt className="icon" size={17} />
                  <p>Login</p>
                </Link>
              ) : (
                <div className="d-flex">
                  <img src={UserImg} alt="" className="userImg" />
                  <p>Al jubair shovon</p>
                </div>
              )}
            </li>
            <li className={isAuthenticated == true ? "d-none" : ""}>
              <Link to="/signup" className="">
                <p>Signup</p>
              </Link>
            </li>
            <li className="country dropDownParent d-flex">
              <Link className="">
                <IoEarth className="icon" size={20} />
              </Link>
              <p>BD</p>
              <FaAngleDown className="angle" />
              <div className="dropDownBox" style={{ width: "120px" }}>
                <div className="corner"></div>
                <Link className="d-flex gap-10 dropDownItem">
                  <img src={BdFlag} alt="" /> BD
                </Link>
                <Link className="d-flex gap-10 dropDownItem">
                  <img src={UsFlag} alt="" /> US
                </Link>
              </div>
            </li>
            <li>
              <Link to="/cart" className="d-flex cart">
                <FaCartShopping className="icon" size={20} />
                <span className="d-flex">10</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
