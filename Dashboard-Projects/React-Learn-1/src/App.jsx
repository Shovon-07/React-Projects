import { useState } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";

function App() {
  // States
  const [togglerValue, setTogglerValue] = useState(0);

  return (
    <>
      <div className="main">
        <Header togglerValue={togglerValue} setTogglerValue={setTogglerValue} />
        <Sidenav togglerValue={togglerValue} />
        <div className="container">
          <div
            className={`contentContainer ${
              togglerValue === 1 ? "bigContainer" : ""
            }`}
          >
            <Outlet context={[togglerValue]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
