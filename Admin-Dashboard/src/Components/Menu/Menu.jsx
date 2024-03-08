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
import { menu } from "../../Data";

const Menu = () => {
  return (
    <div className="Menu">
      {/* <div className="item">
        <span className="title">MAIN</span>

        <Link to="/" className="listItem">
          <IoMdHome size={20} />
          <span className="listItemTitle">Home</span>
        </Link>

        <Link to="/profile" className="listItem">
          <FaRegUser size={20} />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/brand" className="listItem">
          <FaSlack size={20} />
          <span className="listItemTitle">Brand</span>
        </Link>

        <Link to="/category" className="listItem">
          <CiViewList size={20} />
          <span className="listItemTitle">Category</span>
        </Link>

        <Link to="/product" className="listItem">
          <FaInbox size={20} />
          <span className="listItemTitle">Product</span>
        </Link>
      </div> */}

      {menu.map((items) => {
        return (
          <div className="item" key={items.id}>
            <span className="title">{items.title}</span>

            {items.listItems.map((listItem) => {
              return (
                <Link to="/" className="listItem" key={listItem.id}>
                  <IoMdHome size={20} />
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
