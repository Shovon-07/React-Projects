import React, { useContext } from "react";
import { myContext } from "../Context/ContextData";

const ContextChild = () => {
  const { contextData_1, contextData_2 } = useContext(myContext);
  return (
    <div>
      <h1>This is ContextChild</h1>
      <h3>{contextData_1}</h3>
      <h3>{contextData_2}</h3>
    </div>
  );
};

export default ContextChild;
