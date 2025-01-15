import React, { lazy, useEffect, useState } from "react";
import io from "socket.io-client";

//___ Components ___//.
const CahtBox = lazy(() => import("./Components/CahtBox/CahtBox"));

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
      <CahtBox />
    </div>
  );
};

export default App;
