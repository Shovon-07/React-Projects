import React, { useEffect, useState } from "react";

//___ Css ___//
import "./Sidenav.scss";

const Sidenav = (props) => {
  const { togglerValue } = props;

  // Testing
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((prev) => (prev >= 200 ? prev : prev + 1));
  // });

  return (
    <div className={`Sidenav ${togglerValue === 1 ? "smallSideNav" : ""}`}>
      Sidenav <br />
    </div>
  );
};

export default Sidenav;
