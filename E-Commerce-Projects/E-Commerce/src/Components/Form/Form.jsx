import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

//___ CSS ___//
import "./Form.scss";
// import "../../Styles/App.scss";

const Form = ({ title, url, inputFields, loginOrSingupUrl, loginOrSingup }) => {
  const [showHide, setShowHide] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FormContainer d-flex">
      <div className="formCard">
        <div className="titleBar d-flex">
          <h3>Welcome to Daraz! Please {title}</h3>
          <p>
            New member? <Link>{loginOrSingup}</Link> here.
          </p>
        </div>
        <form className="d-flex" onSubmit={handleForm}>
          <div className="left">
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
                    <RiEyeCloseLine
                      size={20}
                      className={showHide == true ? "d-none" : ""}
                    />
                  </div>
                </div>
              );
            })}
            <div className="resetPass">
              <Link>Reset Your Password</Link>
            </div>
          </div>
          <div className="right">
            {/* <NavLink to={url} className="button">
              <input type="submit" value={title} />
            </NavLink> */}
            <button type="submit" className="button d-flex login">
              {title}
            </button>
            <p style={{ fontSize: "12px", margin: "10px 0" }}>
              Or, {title} with
            </p>
            <Link to="" className="button d-flex blue">
              <FaFacebookF size={20} className="icon" />
              Facebook
            </Link>
            <Link
              to=""
              className="button d-flex red"
              style={{ marginTop: "20px" }}
            >
              <FaGooglePlusG size={30} className="icon" />
              Google
            </Link>
            {/* <button type="submit">next</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
