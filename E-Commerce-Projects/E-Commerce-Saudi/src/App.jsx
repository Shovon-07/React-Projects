import { useState } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
