import React from "react";

//___ CSS ___//
import "./Login.scss";

//___ Components ___//
import Form from "../../Components/Form/Form";

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
      <Form
        title={"Sign in"}
        inputFields={inputField}
        url={"/dashboard"}
        loginOrSingupUrl={"/signup"}
        loginOrSingup={"Sign up"}
      />
    </>
  );
};

export default Login;
