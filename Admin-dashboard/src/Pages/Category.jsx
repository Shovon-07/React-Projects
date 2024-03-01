import React from "react";
import { useParams } from "react-router-dom";

//___ Components ___//
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";

export default function Category() {
  let { id } = useParams();
  return (
    <>
      <SideNav />
      <Header />
      <div className="main-panel">
        <div className="container">
          <section>
            <h1>This is Category</h1>
          </section>
        </div>
      </div>
    </>
  );
}
