import { useState } from "react";

//___ CSS ___//
import "./assets/css/app.css";

//___ Components ___//
import Dashboard from "./Pages/Dashboard";

//___ Pages ___//
import Auth from "./Pages/Auth";

function App() {
  return (
    <>
      <Auth />
      <Dashboard />
    </>
  );
}

export default App;
