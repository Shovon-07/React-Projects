import React, { useEffect, useState } from "react";

//___ Css ___//
import "./Home.scss";

//___ Components ___//
import TempRemote from "../../Components/TempRemote/TempRemote";

const Home = () => {
  // Props
  // const { togglerValue } = props;

  // States
  // const [togglerValue] = useOutletContext();

  // Testing
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((prev) => (prev >= 200 ? prev : prev + 1));
  // });

  return (
    <div className="Home d-flex flex-start gap-20">
      <h1>Home</h1>
      <TempRemote />
    </div>
  );
};

export default Home;
