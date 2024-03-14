import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

//___ Css ___//
import "./Header.scss";

//___ Components ___//
import Notification from "../Notification/Notification";

const Header = () => {
  const [notificationDropDown, setNotificationDropDown] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(false);

  const handleNotificationDropDown = () => {
    if (notificationDropDown == false) {
      setNotificationDropDown(true);
      // Hide profile
      setActiveDropDown(false);
    } else if (notificationDropDown == true) {
      setNotificationDropDown(false);
    }
  };

  const handleProfileDropDown = () => {
    if (activeDropDown == false) {
      setActiveDropDown(true);
      // Hide Notification
      setNotificationDropDown(false);
    } else if (activeDropDown == true) {
      setActiveDropDown(false);
    }
  };

  return (
    <div className="Header d-flex">
      <div className="logo">
        <img src="/images/icons/Admin_blue.png" alt="" />
      </div>
      <div className="icons d-flex">
        <img src="/images/icons/search.svg" alt="" />
        <NavLink to="/dashboard">
          <img src="/images/icons/app.svg" alt="" width={22} />
        </NavLink>
        <NavLink to="/">
          <img src="/images/icons/expand.svg" alt="" width={18} />
        </NavLink>
        <NavLink to="/dashboard/settings">
          <img src="/images/icons/setting.svg" alt="" />
        </NavLink>
        <div
          className="notification d-flex"
          onClick={handleNotificationDropDown}
        >
          <img src="/images/icons/notifications.svg" alt="" />
          <span className="d-flex">10</span>
          <ul
            className={`dropDown ${
              notificationDropDown == true ? "showDropdown" : ""
            }`}
            style={{ width: "350px" }}
          >
            <Notification />
          </ul>
        </div>
        <div className="profile d-flex" onClick={handleProfileDropDown}>
          <img src="/images/users/web-page.jpg" alt="" />
          {/* <span>Shovon</span> */}
          <FaAngleDown
            style={{ marginLeft: "5px" }}
            className={activeDropDown == true ? "angleRotate" : "angle"}
          />
          <ul
            className={`dropDown ${
              activeDropDown == true ? "showDropdown" : ""
            }`}
            style={{ width: "150px" }}
          >
            <NavLink to="/profile" className="dropDownItem d-flex">
              <FaRegUser /> Profile
            </NavLink>
            <NavLink to="/" className="dropDownItem d-flex">
              <IoSettingsOutline /> Settings
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
