import React from "react";

//___ Images ___//
import Logo from "/images/icons/Admin_blue.png";

//___ Css ___//
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={Logo} alt="" />
          </div>
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center cursor">
              <div className="selectDropdown">All Categories</div>
              <div className="search">
                <input type="text" placeholder="Search hear" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
