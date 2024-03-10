import React from "react";

//___ CSS ___//
import "./Customer.scss";

//___ Components ___//
import DataTable from "../../Components/DataTable/DataTable.tsx";

const Customer = () => {
  return (
    <div className="Customer">
      <div className="info">
        <h1>Customers</h1>
        <button>Add new customer</button>
      </div>
      <DataTable />
    </div>
  );
};

export default Customer;
