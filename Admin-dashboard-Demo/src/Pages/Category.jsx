import React from "react";
import { useParams } from "react-router-dom";

//___ Components ___//
import SideNav from "../Components/SideNav";

export default function Category() {
  let { id } = useParams();
  return (
    <div>
      <SideNav />
      <div className="content">
        <h1>This is category</h1>
        <p>Id = {id}</p>
      </div>
    </div>
  );
}
