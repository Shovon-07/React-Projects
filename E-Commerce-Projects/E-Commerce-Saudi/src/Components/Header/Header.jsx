import React, { useState } from "react";
import { Link } from "react-router-dom";

//___ Icons ___//

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

  return (
    <header>
      <div className="container d-flex">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menus d-flex gap-30">
          <li>
            <Link to="/customize">Customize</Link>
          </li>
          <li>
            <Link to="/update-inventory">Update Inventory</Link>
          </li>
          <li>
            <Link to="/sell">Sell</Link>
          </li>
          <li>
            <Link to="/pending-orders">Pending Orders</Link>
          </li>
          <li>
            <Link to="/History">History</Link>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
