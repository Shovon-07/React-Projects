import React, { useState } from "react";

//___ CSS ___//
import "../assets/css/Form.css";

const AuthForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState({});
  const [successFlag, setSuccessFlag] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name == "") {
      setErr({ name: "Please enter your name !" });
    } else if (formData.email == "") {
      setErr({ email: "Please enter your email address !" });
    } else if (formData.password == "") {
      setErr({ password: "Please enter your password !" });
    } else {
      setErr({});
      setSuccessFlag((prevFlag) => {
        return (prevFlag += 1);
      });
    }
  };

  return (
    <>
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          {successFlag > 0 ? (
            <h2 style={{ marginBottom: "20px", color: "rgb(45, 253, 62)" }}>
              Welcome {formData.name}
            </h2>
          ) : (
            ""
          )}
          <div className="formBox">
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
              <span className="errMsg">{err.name}</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <span className="errMsg">{err.email}</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
              <span className="errMsg">{err.password}</span>
            </div>
            <div className="inputBox">
              <button type="submit" className="button">
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
