import React from "react";

//___ CSS ___//
import "./SignUp.scss";

//___ Components ___//
import Form from "../../Components/Form/Form";

const SignUp = () => {
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
      <Form
        title={"Sign up"}
        inputFields={inputField}
        url={"/signup"}
        loginOrSingupUrl={"/"}
        loginOrSingup={"Sign in"}
      />
    </>
  );
};

export default SignUp;
