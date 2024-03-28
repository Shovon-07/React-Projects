import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//___ Icons ___//
import { HiMenuAlt3 } from "react-icons/hi";

//___ Css ___//
import "./Header.scss";

//___ Images ___//
import Logo from "/images/icons/Company_orrange.png";

//___ Data ___//
// import { notificationDataLength } from "../../Data";

//___ Components ___//
// import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = () => {
  // Props

  // States
  const [navToggler, setNavToggler] = useState(0);

  const handleNavToggler = () => {
    setNavToggler((prev) => (prev === 0 ? 1 : 0));
  };

  // Testing
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((prev) => (prev < 200 ? prev + 1 : prev));
  // });

  return (
    <header>
      <div className={`container d-flex ${navToggler === 0 ? "" : "active"}`}>
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="toggler cursor">
            <HiMenuAlt3 onClick={handleNavToggler} />
          </div>
        </div>
        <div className="menus d-flex gap-30">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Customize
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update-inventory"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Update Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pending-orders"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Pending Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/History"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              History
            </NavLink>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
