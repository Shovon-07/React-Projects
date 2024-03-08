import React from "react";

//___ CSS ___//
import "./NavBar.scss";

//___ Icons ___//

//___ Images ___//
import Logo from "../../../public/images/logo.svg";
import search from "../../../public/images/search.svg";
import app from "../../../public/images/app.svg";
import view from "../../../public/images/expand.svg";
import notification from "../../../public/images/notifications.svg";
import UserImg from "../../assets/UserImg/web-page.jpg";
import settings from "../../../public/images/settings.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" className="logoImg" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src={search} alt="" className="icon" />
        <img src={app} alt="" className="icon" />
        <img src={view} alt="" className="icon" />
        <div className="notification">
          <img src={notification} alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={UserImg} alt="" />
          <span>Shovon</span>
        </div>
        <img src={settings} alt="" className="icon" />
      </div>
    </div>
  );
};

export default NavBar;
