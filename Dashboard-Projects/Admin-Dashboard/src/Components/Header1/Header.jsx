import React, { useEffect, useState } from "react";

//___ Icons ___//
import { HiMenuAlt2 } from "react-icons/hi";

//___ Css ___//
import "./Header.scss";

//___ Components ___//
// import Clock from "../Clock/Clock";

const Header = (props) => {
  // Props
  const { togglerValue, setTogglerValue } = props;

  const handleTogglerValue = () => {
    setTogglerValue((prev) => (prev == 0 ? 1 : 0));
  };

  // Testing
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((prev) => (prev >= 200 ? prev : prev + 1));
  // });

  return (
    <div className="Header">
      <div className="container d-flex">
        <div className="d-flex gap-20">
          <div className="toggler cursor" onClick={handleTogglerValue}>
            <HiMenuAlt2 />
          </div>
          {/* <div className="clock">
            <Clock />
          </div> */}
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Header;
