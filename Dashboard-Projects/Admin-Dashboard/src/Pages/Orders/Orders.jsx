import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

//___ Css ___//
import "./Orders.scss";

//___ Images ___//
import EditeIcon from "/images/icons/view.svg";
import DeleteIcon from "/images/icons/delete.svg";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";
import TableData from "../../Components/TableData/TableData";

const Orders = () => {
  return (
    <div className="Orders">
      {/* {apiData == "" ? (
        <Loader />
      ) : (
        <TableData
          columns={columns}
          rows={filteredApiData}
          searchData={search}
          setSearchData={setSearch}
        />
      )} */}
      <TableData
        api={"https://fakestoreapi.com/products"}
        tableTitle={"Orders"}
      />
    </div>
  );
};

export default Orders;

// https://fakestoreapi.com/products/
