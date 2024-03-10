import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

//___ CSS ___//
import "./Customer.scss";

//___ Data ___//
import { userRows } from "../../Data.ts";
// import CustomerData from "./CustomerData.tsx";

//___ Components ___//
import DataTable from "../../Components/DataTable/DataTable.tsx";
import Add from "../../Components/Add/Add.jsx";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || "/images/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    type: "string",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName} ${params.row.lastName}`,
  },
  { field: "email", headerName: "Email", width: 150, type: "string" },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 110,
  },
  { field: "createdAt", headerName: "Created at", width: 150, type: "string" },
  { field: "verified", headerName: "Status", width: 150, type: "boolean" },
];

const Customer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Customer">
      <div className="info">
        <h1>Customers</h1>
        <button onClick={() => setOpen(true)}>Add new customer</button>
      </div>
      <DataTable slug="customer" columns={columns} rows={userRows} />
      {open && <Add slug="customer" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Customer;
