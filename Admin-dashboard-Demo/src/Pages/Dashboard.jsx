import React from "react";

//___ Components ___//
import SideNav from "../Components/SideNav";

export default function Dashboard(props) {
  let navValue = props.navVal;
  return (
    <div>
      <SideNav navVal={navValue} />
      <div className="content">
        <h1>This is Dashboard {navValue}</h1>
      </div>
    </div>
  );
}
