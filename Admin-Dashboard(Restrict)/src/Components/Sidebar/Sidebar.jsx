import React from "react";

//___ Images ___//
import Logo from "../../assets/Images/squre_dots.png";

//___ Css ___//
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Logo">
        <img src={Logo} alt="" />
        <span>Mart</span>
      </div>
    </div>
  );
};

export default Sidebar;
