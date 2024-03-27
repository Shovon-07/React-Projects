import React, { useState } from "react";

//___ Css ___//
import "./Form.scss";

const Form = () => {
  // States
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setInputVal((prev) => {
      return {
        ...inputVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // setMsg(inputVal);
  };

  return (
    <div className="Form d-flex">
      <h2 className="title">Login</h2>
      {/* <h4 className="msg">{msg}</h4> */}
      <form action="" onSubmit={submitForm}>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputVal.name}
            onChange={handleInput}
          />
        </div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={inputVal.email}
            onChange={handleInput}
          />
        </div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            value={inputVal.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="submit" className="login cursor">
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
