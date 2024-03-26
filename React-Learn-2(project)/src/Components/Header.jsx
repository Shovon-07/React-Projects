import React, { useEffect, useState } from "react";

const Header = () => {
  // let [data, setData] = useState([
  //   { name: "shovon", age: 21 },
  //   { name: "asik", age: 23 },
  //   { name: "jony", age: 4 },
  // ]);
  let [data, setData] = useState(true);

  return (
    <div className="Header">
      <div className="left">
        <div className="clock"></div>
      </div>
      <div className="right">right</div>
      {/* <h1>{data == true ? "Hello Shovon" : "Hello User"}</h1>
      <button
        onClick={() => {
          setData(!data);
        }}
      >
        change
      </button> */}
    </div>
  );
};

export default Header;
