import React from "react";

//___ Components ___//
import SideNav from "../Components/SideNav";

export default function Dashboard() {
  return (
    <div>
      <SideNav />
      <div className="content">
        <h1>This is Dashboard</h1>
      </div>
    </div>
  );
}
