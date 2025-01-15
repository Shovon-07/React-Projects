import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const App = () => {
  const socket = io.connect("/");
  const [data, setData] = useState();

  useEffect(() => {
    socket.on("Mydata", (data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default App;
