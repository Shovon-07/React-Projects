import React from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//

//___ Css ___//
import "./SideNav.scss";

//___ Data ___//
import { Menus } from "../../Data";

const SideNav = () => {
  return (
    <div className="SideNav">
      {Menus.map((items) => {
        return (
          <div className="itemContainer d-flex" key={items.id}>
            <p className="title">{items.title}</p>
            {items.listItems.map((menus) => {
              return (
                <NavLink
                  to={menus.url}
                  key={menus.id}
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  {/* <AiFillHome className="icon" /> */}
                  <img src={menus.icon} alt="" className="icon" />
                  <span className="navTitle">{menus.title}</span>
                </NavLink>
              );
            })}
          </div>
        );
      })}
      {/* <div className="itemContainer d-flex">
        <p className="title">Main</p>
        <NavLink to="/" className="item d-flex">
          <AiFillHome className="icon" />
          <span className="navTitle">Home</span>
        </NavLink>
        <NavLink to="/profile" className="item d-flex">
          <FaUser className="icon" />
          <span className="navTitle">Profile</span>
        </NavLink>
      </div>

      <div className="itemContainer d-flex">
        <p className="title">Product</p>
        <NavLink to="/brands" className="item d-flex">
          <TbBrandAdobe className="icon" />
          <span className="navTitle">Brands</span>
        </NavLink>
        <NavLink to="/categories" className="item d-flex">
          <FaListUl className="icon" />
          <span className="navTitle">Categories</span>
        </NavLink>
        <NavLink to="products" className="item d-flex">
          <FaShoppingCart className="icon" />
          <span className="navTitle">Products</span>
        </NavLink>
      </div> */}
    </div>
  );
};

export default SideNav;
