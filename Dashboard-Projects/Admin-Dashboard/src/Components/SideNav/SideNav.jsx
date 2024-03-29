import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//

//___ Css ___//
import "./SideNav.scss";

//___ Data ___//
import { Menus } from "../../Data";

const SideNav = (props) => {
  const { sideNavToggler } = props;

  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   count <= 200 ? setCount((prev) => prev + 1) : count;
  // });

  return (
    <div className={`SideNav ${sideNavToggler == true ? "smallSideNav" : ""}`}>
      {Menus.map((items) => {
        return (
          <div className="itemContainer d-flex" key={items.id}>
            <p className="title">{items.title}</p>
            {items.listItems.map((menus) => {
              return (
                <NavLink
                  to={menus.url}
                  key={menus.id}
                  // className={({ isActive }) => (isActive ? "isActive" : "")}
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
    </div>
  );
};

export default SideNav;
