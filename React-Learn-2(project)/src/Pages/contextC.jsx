import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../App";

const contextC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count < 500 ? setCount((prev) => prev + 1) : count;
  });

  const context = useContext(ContextApi);

  return (
    <div>
      Learn context api <br />
      {count}
      {context.map((items) => {
        return <h1>{items}</h1>;
      })}
      {/* <ContextApi.Consumer>
        {(data) => {
          return <h1>This is context api = {data}</h1>;
        }}
      </ContextApi.Consumer> */}
    </div>
  );
};

export default contextC;
