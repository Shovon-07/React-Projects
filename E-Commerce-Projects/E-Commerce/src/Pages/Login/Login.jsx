import React from "react";

//___ CSS ___//
import "./Login.scss";

//___ Components ___//

const Login = () => {
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
      field: "password",
      type: "password",
      placeholder: "Enter your password",
      className: "inputBox d-flex",
    },
  ];

  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default Login;
