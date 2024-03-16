import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

//___ Css ___//
import "./Orders.scss";

//___ Components ___//
// import TableData from "../../Components/TableData/TableData";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  const columns = [
    { name: "Title", selector: (row) => row.title },
    { name: "Category", selector: (row) => row.category },
    { name: "Price", selector: (row) => row.price },
    { name: "Rating", selector: (row) => row.rating },
  ];

  const getOrderData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setOrderData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div className="Orders">
      Orders
      <DataTable columns={columns} data={orderData} />
    </div>
  );
};

export default Orders;

// https://fakestoreapi.com/products/
