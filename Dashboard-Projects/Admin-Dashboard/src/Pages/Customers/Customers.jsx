import React from "react";

//___ Css ___//
import "./Customers.scss";

//___ Components ___//
import Table from "../../Components/Table/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    type: "string",
    width: 200,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    name: "Jon",
    email: "Shovon@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 2,
    name: "Cersei",
    email: "Asik@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 3,
    name: "Jaime",
    email: "jony@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 4,
    name: "Arya",
    email: "sik@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 5,
    name: "Daenerys",
    email: "Shovon@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 6,
    name: null,
    email: "Shovon@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 7,
    name: "Ferrara",
    email: "asik@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 8,
    name: "Rossini",
    email: "jony@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
  {
    id: 9,
    name: "Harvey",
    email: "Shovon@gmail.com",
    phone: "01700000000",
    address: "Horogram charkhutar mor, Kashiadanga, Rajshahi",
  },
];

const Customers = () => {
  return (
    <div className="Customers">
      <Table slug={"Customers"} rows={rows} columns={columns} />
    </div>
  );
};

export default Customers;
