import React from "react";

//___ CSS ___//
import "../assets/css/header.css";

//___ Images ___//
import UserPic from "../assets/images/web-page.jpg";

//___ Icons ___//
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="main-panel">
          <div className="container">
            <div className="searchBox">
              <CiSearch size={25} className="searchIcon" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="headerRight">
              <div className="icons">
                <AiFillMessage size={25} />
              </div>
              <div className="icons">
                <IoNotifications size={25} />
              </div>
              <div id="dropParent" className="profileBox">
                <div className="profile">
                  {/* <span id="imgParent"></span> */}
                  <img src={UserPic} alt="" />
                  <span className="userName">shovon</span>
                </div>
                {/* <ul className="dropdown display">
          <li className="d-flex">
            <a href="{{route('profile.view')}}">
              <i className="fa-regular fa-user leftIcon"></i> Profile
            </a>
          </li>
          <li className="d-flex">
            <a href="{{route('logout')}}" className="logout">
              <i className="fa-solid fa-right-from-bracket leftIcon"></i>{" "}
              Log out
            </a>
          </li>
        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
