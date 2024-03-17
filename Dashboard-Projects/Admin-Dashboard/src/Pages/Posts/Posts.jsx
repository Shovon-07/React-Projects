import React from "react";

//___ Css ___//
import "./Posts.scss";

//___ Images ___//

//___ Components ___//
import TableData from "../../Components/TableData/TableData";

const Posts = () => {
  return (
    <div className="Posts">
      <TableData
        api={"https://fakestoreapi.com/products/"}
        tableTitle={"Posts"}
      />
    </div>
  );
};

export default Posts;

// https://fakestoreapi.com/products/
