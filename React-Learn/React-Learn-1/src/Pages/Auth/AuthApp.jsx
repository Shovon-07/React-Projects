import React from "react";
import { Outlet } from "react-router-dom";

const AuthApp = () => {
  return (
    <div className="main">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthApp;
