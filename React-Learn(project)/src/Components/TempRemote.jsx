import React, { useRef, useState } from "react";

//___ CSS ___//
import "../assets/css/TempRemote.css";

const TempRemote = () => {
  const [temp, setTemp] = useState(16);
  const [displayBg, setDisplayBg] = useState("#292929");

  let { focusPlusBtnRef, focusMinusBtnRef } = useRef();

  const plus = () => {
    focusPlusBtnRef.style.boxShadow = "inset 2px 2px 10px #292929";
    focusMinusBtnRef.style.boxShadow = "inset 0px 0px 0px #292929";
    setTemp((prevTemp) => {
      const newTemp = (prevTemp += 1);
      if (newTemp == 25) {
        setDisplayBg("red");
      }
      return newTemp;
    });
  };

  const minus = () => {
    focusMinusBtnRef.style.boxShadow = "inset 2px 2px 10px #292929";
    focusPlusBtnRef.style.boxShadow = "inset 0px 0px 0px #292929";
    setTemp((prevTemp) => {
      const newTemp = (prevTemp -= 1);
      if (newTemp < 25) {
        setDisplayBg("#292929");
      }
      return newTemp;
    });
  };

  return (
    <>
      <section className="container">
        <h2 className="title">Temperature remote</h2>
        <div className="d-flex-full">
          <div className="displayBox">
            <div
              className="display d-flex-full"
              style={{ backgroundColor: displayBg }}
            >
              <h2>{temp}°C</h2>
            </div>
            <div className="controllBtn">
              <button
                onClick={minus}
                ref={(focusMinusBtn) => (focusMinusBtnRef = focusMinusBtn)}
              >
                -
              </button>
              <button
                onClick={plus}
                ref={(focusPlusBtn) => (focusPlusBtnRef = focusPlusBtn)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TempRemote;
