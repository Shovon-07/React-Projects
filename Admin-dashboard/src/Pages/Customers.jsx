import React from "react";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";

export default function Customers() {
  return (
    <>
      <SideNav />
      <Header />
      <div className="main-panel">
        <div className="container">
          <section>
            <h1>This is Customers</h1>
          </section>
        </div>
      </div>
    </>
  );
}
