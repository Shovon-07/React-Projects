import { createContext, useState } from "react";

const myContext = createContext();

const ContextDataFunc = ({ children }) => {
  let contextData_1 = "My context data 1";
  let contextData_2 = "My context data 2";
  return (
    <myContext.Provider value={{ contextData_1, contextData_2 }}>
      {children}
    </myContext.Provider>
  );
};

export { myContext, ContextDataFunc };
