import React from "react";

//___ CSS ___//
import "../assets/css/summery.css";

const Summery = () => {
  return (
    <>
      <div className="summery d-flex">
        <div className="card">
          <i className="fa-solid fa-users"></i>
          <div>
            <h3 className="summeryTitle">Customers</h3>
            <p className="amount">2000</p>
          </div>
        </div>
        <div className="card">
          <i className="fa-solid fa-truck-fast leftIcon"></i>
          <div>
            <h3 className="summeryTitle">Orders</h3>
            <p className="amount">305</p>
          </div>
        </div>
        <div className="card">
          <i className="fa-solid fa-dollar-sign"></i>
          <div>
            <h3 className="summeryTitle">Balance</h3>
            <p className="amount">1000K</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summery;
