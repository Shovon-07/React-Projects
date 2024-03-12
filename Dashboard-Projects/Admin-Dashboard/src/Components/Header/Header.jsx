import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

//___ Css ___//
import "./Header.scss";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [activeDropDown, setActiveDropDown] = useState(false);

  const handleProfileDropDown = () => {
    if (activeDropDown == false) {
      setActiveDropDown(true);
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
        <img src="/images/icons/search.svg" alt="" width={24} />
        <NavLink to="/">
          <img src="/images/icons/app.svg" alt="" width={22} />
        </NavLink>
        <img src="/images/icons/expand.svg" alt="" width={19} />
        <img src="/images/icons/setting.svg" alt="" width={19} />
        <div className="notification d-flex">
          <img src="/images/icons/notifications.svg" alt="" width={25} />
          <span className="d-flex">10</span>
        </div>
        <div className="profile d-flex" onClick={handleProfileDropDown}>
          <img src="/images/users/web-page.jpg" alt="" />
          {/* <span>Shovon</span> */}
          <FaAngleDown
            style={{ marginLeft: "5px" }}
            className={activeDropDown == true ? "angleRotate" : "angle"}
          />
          <ul className={activeDropDown == true ? "dropDown" : "hideDropdown"}>
            <NavLink to="/profile" className="dropDownItem d-flex">
              <FaRegUser /> Profile
            </NavLink>
            <NavLink to="/settings" className="dropDownItem d-flex">
              <IoSettingsOutline /> Settings
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
