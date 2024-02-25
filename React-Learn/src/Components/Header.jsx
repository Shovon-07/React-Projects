import React, { useEffect, useState } from "react";

const Header = () => {
  // let [data, setData] = useState([
  //   { name: "shovon", age: 21 },
  //   { name: "asik", age: 23 },
  //   { name: "jony", age: 4 },
  // ]);
  let [data, setData] = useState(true);

  return (
    <>
      <h1>{data == true ? "Hello Shovon" : "Hello User"}</h1>
      <button
        onClick={() => {
          setData(!data);
        }}
      >
        change
      </button>
    </>
  );
};

export default Header;
