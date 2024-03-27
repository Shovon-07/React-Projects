import React from "react";
import { Outlet } from "react-router-dom";

const AuthApp = () => {
  return (
    <div className="main">
      <div className="authContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthApp;
