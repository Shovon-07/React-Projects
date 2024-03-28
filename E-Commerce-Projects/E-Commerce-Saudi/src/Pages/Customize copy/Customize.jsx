import React, { useEffect, useState } from "react";
import axios from "axios";

//___ Images ___//
import EditeIcon from "/images/icons/view.svg";
import DeleteIcon from "/images/icons/delete.svg";

//___ Css ___//
import "./Customize.scss";

//___ Components ___//
import TableData from "../../Components/TableData/TableData";

const Customize = () => {
  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setApiData(res.data);
      setApiData(res.data);
      setFilteredApiData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const columns = [
    { name: "Customer name", sortable: true, selector: (row) => row.title },
    { name: "Contact", selector: (row) => row.category },
    { name: "Material", selector: (row) => row.price },
    { name: "Neck type", selector: (row) => row.rating.count },
    { name: "hand type", selector: (row) => row.rating.count },
    { name: "button type", selector: (row) => row.rating.count },
    { name: "Dress type", selector: (row) => row.rating.count },
    { name: "meters bought", selector: (row) => row.rating.count },
    { name: "total price", selector: (row) => row.rating.count },
    { name: "deadline", selector: (row) => row.rating.count },
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

  return (
    <div>
      <TableData
        apiData={apiData}
        columns={columns}
        tableTitle="purchase History"
        searchData={searchData}
        setSearchData={setSearchData}
        filteredApiData={filteredApiData}
        setFilteredApiData={setFilteredApiData}
      />
    </div>
  );
};

export default Customize;
