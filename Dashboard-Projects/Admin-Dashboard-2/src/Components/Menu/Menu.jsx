import React from "react";
import { Link } from "react-router-dom";

//___ CSS ___//
import "./Menu.scss";

//___ Icons ___//
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

import { FaSlack, FaInbox } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";

//___ Components ___//
import { menu } from "../../Data.ts";
// import logo from "../../assets/images/home.svg";

const Menu = () => {
  return (
    <div className="Menu">
      {menu.map((items) => {
        return (
          <div className="item" key={items.id}>
            <span className="title">{items.title}</span>

            {items.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  <img src={listItem.icon} alt="" className="icon" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
