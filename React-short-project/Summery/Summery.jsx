import React from "react";

//___ Icons ___//
import { FaUsers } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";

//___ Css ___//
import "./Summery.css";

const Summery = () => {
  return (
    // <div classNameName="Summery">
    //   <div classNameName="card">
    //     <div></div>
    //     <div>
    //       <h3>Total sells</h3>
    //     </div>
    //   </div>
    // </div>
    <div className="Summery d-flex">
      <div className="card d-flex">
        <FaUsers className="icon" />
        <div>
          <h3 className="summeryTitle">Customers</h3>
          <p className="amount" style={{ color: "rgb(79 253 75)" }}>
            2000
          </p>
        </div>
      </div>
      <div className="card d-flex">
        <FaTruckFast className="icon" />
        <div>
          <h3 className="summeryTitle">Orders</h3>
          <p className="amount" style={{ color: "rgb(248 142 56)" }}>
            305
          </p>
        </div>
      </div>
      <div className="card d-flex">
        <AiFillDollarCircle className="icon" />
        <div>
          <h3 className="summeryTitle">Balance</h3>
          <p className="amount" style={{ color: "rgb(106 88 253)" }}>
            1000K
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summery;
