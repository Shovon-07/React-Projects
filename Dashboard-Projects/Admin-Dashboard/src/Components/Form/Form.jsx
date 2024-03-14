import { React, useState } from "react";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ CSS ___//
import "./Form.scss";
import { NavLink } from "react-router-dom";

const Form = ({ title, url, inputFields, loginOrSingupUrl, loginOrSingup }) => {
  const [showHide, setShowHide] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FormContainer d-flex">
      {/* <form className="d-flex" onSubmit={handleForm}>
        <h3>{title}</h3>
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
          <NavLink to="/dashboard" className="button">
            next
          </NavLink>
        </div>
        <div className="form-bottom d-flex">
          <NavLink to={loginOrSingupUrl}>{loginOrSingup}</NavLink>
          <span>|</span>
          <NavLink to="forgot-password">Forgot password</NavLink>
        </div>
      </form> */}

      <form className="d-flex" onSubmit={handleForm}>
        <h3>{title}</h3>
        {inputFields.map((items, index) => {
          return (
            <div className={items.className} key={index}>
              <input type={items.type} placeholder={items.placeholder} />

              <div
                className={`showHide d-flex ${
                  items.field !== "password" ? "d-none" : ""
                }`}
                onClick={() => {
                  if (showHide == false) {
                    setShowHide(true);
                    items.type = "text";
                  } else if (showHide == true) {
                    setShowHide(false);
                    items.type = "password";
                  }
                }}
              >
                <FaEye
                  size={20}
                  className={showHide == false ? "d-none" : ""}
                />
                <FaEyeSlash
                  size={20}
                  className={showHide == true ? "d-none" : ""}
                />
              </div>
            </div>
          );
        })}
        <div>
          <NavLink to={url} className="button">
            next
          </NavLink>
        </div>
        <div className="form-bottom d-flex">
          <NavLink to={loginOrSingupUrl}>{loginOrSingup}</NavLink>
          <span>|</span>
          <NavLink to="forgot-password">Forgot password</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Form;
