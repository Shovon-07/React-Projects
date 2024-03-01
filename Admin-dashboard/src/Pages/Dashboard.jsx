import React from "react";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";

export default function Dashboard() {
  return (
    <>
      <SideNav />
      <Header />
      <div className="main-panel">
        <div className="container">
          <section style={{ height: "3000px" }}>
            <h1>This is Dashboard</h1>
          </section>
        </div>
      </div>
    </>
  );
}
