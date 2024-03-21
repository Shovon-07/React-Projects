import React from "react";
import ContextB from "./contextB";

const contextA = () => {
  return (
    <div>
      {/* contextA */}
      <ContextB />
    </div>
  );
};

export default contextA;
