import React from "react";

//___ CSS ___//
import "./NavBar.scss";

//___ Icons ___//
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { GoScreenFull } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

//___ Images ___//
import Logo from "../../assets/images/squre_dots.png";
import UserImg from "../../assets/UserImg/web-page.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <CiSearch size={25} className="icon" />
        <IoGridOutline size={25} className="icon" />
        <GoScreenFull size={25} className="icon" />
        <div className="notification">
          {<IoMdNotificationsOutline size={25} className="icon" />}
          <span>1</span>
        </div>
        <div className="user">
          <img src={UserImg} alt="" />
          <span>Shovon</span>
        </div>
        {<IoSettingsOutline size={25} className="icon" />}
      </div>
    </div>
  );
};

export default NavBar;
