import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ CSS ___//
import "./Form.css";

//___ Additional utility ___//
// import AuthUser from "../../assets/Js/AuthUser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Form = (props) => {
  // const navigate = useNavigate();
  // const { http, setToken } = AuthUser();

  const { title, url, inputFields, loginOrSingupUrl, loginOrSingup } = props;

  // States
  const [showHide, setShowHide] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleFormInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const data = {
      email: formInput.email,
      password: formInput.password,
    };
  };

  return (
    <div className="FormContainer d-flex">
      <form className="d-flex" onSubmit={submitForm}>
        <h3>{title}</h3>
        {inputFields.map((items, index) => {
          return (
            <div className={items.className} key={index}>
              <input
                type={items.type}
                name={items.field}
                value={formInput.name}
                placeholder={items.placeholder}
                onChange={handleFormInput}
                autoComplete="off"
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
          {/* <NavLink to={"/home"}>
            <button type="submit" className="button">
              next
            </button>
          </NavLink> */}
          <button type="submit" className="button">
            next
          </button>
        </div>
        {/* <div className="form-bottom d-flex">
          <NavLink to={loginOrSingupUrl}>{loginOrSingup}</NavLink>
          <span>|</span>
          <NavLink to="forgot-password">Forgot password</NavLink>
        </div> */}
      </form>

      {/* <button
        onClick={() => {
          console.log(auth);
          setAuth((prev) => !prev);
        }}
      >
        auth
      </button> */}

      {/* <ToastContainer position="top-center" theme="colored" /> */}
    </div>
  );
};

export default Form;
