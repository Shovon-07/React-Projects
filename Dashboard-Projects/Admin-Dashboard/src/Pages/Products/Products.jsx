import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

//___ Css ___//
import "./Products.scss";

//___ Components ___//
import Table from "../../Components/Table/Table";

const Products = () => {
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
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
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

  return (
    <div className="Products">
      <Table slug={"Products"} rows={rows} columns={columns} />

      {/* <button onClick={getData}>Get Data</button> */}
    </div>
  );
};

export default Products;
