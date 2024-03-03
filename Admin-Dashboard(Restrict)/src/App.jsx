import { useState } from "react";

//___ Css ___//
import "./App.css";

//___ Components ___//
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
