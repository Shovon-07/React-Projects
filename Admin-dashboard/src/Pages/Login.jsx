import React from "react";
import { NavLink } from "react-router-dom";

//___ CSS ___//
import "../assets/css/form.css";

//___ Icons ___//
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form">
        <h4 className="title">SIGN IN</h4>
        <div className="inputBox">
          <MdOutlineEmail size={20} className="leftIcon" />
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="inputBox">
          <RiLockPasswordLine size={20} className="leftIcon" />
          <input type="password" placeholder="Enter your password" />
          <div className="eye d-flex-full">
            <FaRegEyeSlash size={20} className="eyeClose" />
            <FiEye size={20} className="eyeOpen" />
          </div>
        </div>
        <div className="buttonDiv">
          {/* <button type="submit" className="button" id="login">
            <NavLink to={"/dashboard"}>NEXT</NavLink>
          </button> */}
          <NavLink to={"/dashboard"}>
            <button type="submit" className="button">
              NEXT
            </button>
          </NavLink>
        </div>
        <div className="formBottom">
          <a href="">Sign Up</a> <span>|</span> <a href="">Forgot password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
