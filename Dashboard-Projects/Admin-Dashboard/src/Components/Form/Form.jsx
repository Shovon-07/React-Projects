import { React, useState } from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ CSS ___//
import "./Form.scss";

const Form = ({ title, url, inputFields, loginOrSingupUrl, loginOrSingup }) => {
  const [showHide, setShowHide] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FormContainer d-flex">
      <form className="d-flex" onSubmit={handleForm}>
        <h3>{title}</h3>
        {inputFields.map((items, index) => {
          return (
            <div className={items.className} key={index}>
              <input
                type={items.type}
                name={items.field}
                placeholder={items.placeholder}
              />

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
          <NavLink to={url}>
            <button type="submit" className="button">
              next
            </button>
          </NavLink>
          {/* <button type="submit">next</button> */}
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
