import React, { useRef, useState } from "react";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ CSS ___//
import "./Form.scss";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [showHide, setShowHide] = useState(false);
  let passwordInput = useRef();

  const handleShowHide = () => {
    if (showHide == false) {
      setShowHide(true);
      passwordInput.type = "text";
    } else if (showHide == true) {
      setShowHide(false);
      passwordInput.type = "password";
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FormContainer d-flex">
      <form className="d-flex" onSubmit={handleForm}>
        <h3>sign in</h3>
        <div className="inputBox">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="inputBox">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="inputBox d-flex">
          <input
            type="password"
            placeholder="Enter your password"
            ref={(passInp) => (passwordInput = passInp)}
          />
          <div className="showHide d-flex" onClick={handleShowHide}>
            <FaEye size={20} className={showHide == false ? "d-none" : ""} />
            <FaEyeSlash
              size={20}
              className={showHide == true ? "d-none" : ""}
            />
          </div>
        </div>
        <div>
          <NavLink to="/dashboard">
            <button type="submit"> confirm</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Form;
