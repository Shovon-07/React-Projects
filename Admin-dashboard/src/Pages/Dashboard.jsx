import React from "react";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import Summery from "../Components/Summery";
import Footer from "../Components/Footer";

export default function Dashboard() {
  return (
    <>
      <SideNav />
      <Header />

      <div className="main-panel">
        <div className="container">
          <section className="section">
            <h1 className="title">Dashboard</h1>
            <Summery />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
