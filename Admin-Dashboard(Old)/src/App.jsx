import { useState } from "react";

//___ Css ___//
import "./App.css";

//___ Bootstrap ___//
// import ".bootstrap/dist/css/bootstrap.min.css";
// import ".bootstrap/dist/js/bootstrap.min.js";

//___ Icons ___//
// import "./bootstrap-icons/font/bootstrap-icons.css";
// import "./remixicon/fonts/remixicon.css";

//___ Components ___//
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;

/** 
 * devDependencies
  > npm i bootstrap bootstrap-icons remixicon echarts react-apexcharts boxicons
**/
