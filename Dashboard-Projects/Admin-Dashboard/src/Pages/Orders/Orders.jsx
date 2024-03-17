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
  const [search, setSearch] = useState("");
  const [orderData, setOrderData] = useState([]);
  const [filteredOrderData, setfilteredOrderData] = useState([]);

  const columns = [
    { name: "Title", sortable: true, selector: (row) => row.title },
    { name: "Category", selector: (row) => row.category },
    { name: "Price", selector: (row) => row.price },
    { name: "Rating", selector: (row) => row.rating.count },
    {
      name: "Action",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "10px" }}>
          <img
            src={EditeIcon}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => alert(row.id)}
          />
          <img
            src={DeleteIcon}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => alert(row.id)}
          />
        </div>
      ),
    },
  ];

  const getOrderData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setOrderData(res.data);
      setfilteredOrderData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  useEffect(() => {
    const result = orderData.filter((filteredOrder) => {
      return filteredOrder.title.toLowerCase().match(search.toLowerCase());
    });
    setfilteredOrderData(result);
  }, [search]);

  return (
    <div className="Orders">
      {orderData == "" ? (
        <Loader />
      ) : (
        <TableData
          columns={columns}
          rows={filteredOrderData}
          searchData={search}
          setSearchData={setSearch}
        />
      )}
    </div>
  );
};

export default Orders;

// https://fakestoreapi.com/products/
