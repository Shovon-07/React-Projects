import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

//___ Images ___//
import UserPic from "../assets/images/web-page.jpg";

const SideNav = (props) => {
  let SideBarRef = useRef();

  const togglerBtn = () => {
    SideBarRef.classList.toggle("active");
  };
  return (
    <div className="sideNav" ref={(SideBar) => (SideBarRef = SideBar)}>
      <div className="logo">
        <h4>Admin</h4>
      </div>
      <ul className="menu">
        <p className="task">Inventory</p>
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-solid fa-house leftIcon"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/brands"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-brands fa-slack leftIcon"></i> Brands
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/category"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-brands fa-dribbble leftIcon"></i>Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-solid fa-box leftIcon"></i>Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-solid fa-truck-fast leftIcon"></i>Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/customers"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-solid fa-users leftIcon"></i>Customers
          </NavLink>
        </li>

        {/* Mind map for dropdown menu */}
        <li id="dropParent">
          <a>
            <i className="fa-solid fa-file leftIcon"></i> History
            <i className="fa-solid fa-chevron-right rightIcon"></i>
          </a>
          {/* <ul className="dropdown display">
            <li>
              <a href="">Computer & accessories</a>
            </li>
            <li>
              <a href="">Men's & fashions</a>
            </li>
            <li>
              <a href="">Woman's & fashions</a>
            </li>
            <li>
              <a href="">Baby dreses & toys</a>
            </li>
          </ul> */}
        </li>
        <li>
          <NavLink
            to={"/posts"}
            className={({ isActive }) =>
              isActive ? "activeLink" : "pendingLink"
            }
          >
            <i className="fa-solid fa-pen leftIcon"></i>Posts
          </NavLink>
        </li>
      </ul>
      <div className="bottom d-flex-full">
        {/* <a href="" className="button">
          <i className="fa-solid fa-gear leftIcon"></i> Settings
        </a> */}
        <img src={UserPic} alt="" className="userPic" />
        <div>
          <h3 className="userName">Shovon</h3>
          <p className="role">
            <span>@</span>Admin
          </p>
        </div>
      </div>
      <div className="toggler" onClick={togglerBtn}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};
export default SideNav;
