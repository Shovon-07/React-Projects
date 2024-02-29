import { useState } from "react";

//___ CSS ___//
import "./assets/css/app.css";

//___ Components ___//
import Dashboard from "./Pages/Dashboard";

//___ Pages ___//
import Auth from "./Pages/Auth";

//___ Context ___//
import { ContextDataFunc } from "./Context/ContextData";

function App() {
  return (
    <>
      <Auth />

      {/* Context */}
      <ContextDataFunc>
        <Dashboard />
      </ContextDataFunc>
    </>
  );
}

export default App;
