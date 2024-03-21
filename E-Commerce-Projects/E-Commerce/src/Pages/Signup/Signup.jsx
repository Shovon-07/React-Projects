import React from "react";

//___ CSS ___//
import "./Signup.scss";

//___ Components ___//

const Signup = () => {
  const inputField = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter your name",
      className: "inputBox",
    },
    {
      field: "email",
      type: "email",
      placeholder: "Enter your email",
      className: "inputBox",
    },
    {
      field: "signUpPassword",
      type: "password",
      placeholder: "Enter a unique password",
      className: "inputBox",
    },
    {
      field: "confirmSignUpPassword",
      type: "password",
      placeholder: "Retype password",
      className: "inputBox",
    },
  ];

  return (
    <>
      <h1>Signup</h1>
    </>
  );
};

export default Signup;
