import React from "react";

//___ Css ___//
import "./Loader.scss";

const Loader = () => {
  return (
    <>
      <div id="loader" className="LoadingOverlay">
        <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div>
      </div>
      <button>show loader</button>
    </>
  );
};

export default Loader;
