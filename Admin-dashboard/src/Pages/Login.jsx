import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

//___ CSS ___//
import "../assets/css/form.css";

//___ Icons ___//
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let passInputField = useRef();

  // Get input value
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  // Show & hide password
  const showHidePass = () => {
    // passInputField.style.backgroundColor = "red";
    if (passInputField.type === "password") {
      passInputField.type = "text";
    } else {
      passInputField.type = "password";
    }
  };

  const login = () => {
    // alert("login");
  };

  return (
    <div className="form-container">
      <div className="form">
        <h4 className="title">SIGN IN</h4>
        <div className="inputBox">
          <MdOutlineEmail size={20} className="leftIcon" />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
          />
        </div>
        <div className="inputBox">
          <RiLockPasswordLine size={20} className="leftIcon" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={(passInput) => (passInputField = passInput)}
            onChange={handleInput}
          />
          <div className="eye d-flex-full" onClick={showHidePass}>
            <FaRegEyeSlash size={20} className="eyeClose" />
            <FiEye size={20} className="eyeOpen" />
          </div>
        </div>
        <div className="buttonDiv">
          <NavLink to={"/dashboard"}>
            <button type="submit" className="button" onClick={login}>
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
