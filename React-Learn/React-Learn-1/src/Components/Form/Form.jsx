import React, { useState } from "react";

//___ Css ___//
import "./Form.scss";

const Form = () => {
  // States
  const [inputVal, setInputVal] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setMsg(inputVal);
  };

  return (
    <div className="Form d-flex">
      <h2 className="title">Login</h2>
      <h4 className="msg">{msg}</h4>
      <form action="" onSubmit={submitForm}>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter your name"
            value={inputVal}
            onChange={handleInput}
          />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Enter your password" />
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
