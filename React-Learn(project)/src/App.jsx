import { createContext, useState } from "react";

//___ CSS ___//
import "./assets/css/app.css";

//___ Components ___//
import Dashboard from "./Pages/Dashboard";

//___ Context ___//
import { ContextDataFunc } from "./Context/ContextData";

//___ Pages ___//
import Auth from "./Pages/Auth";
import ContextA from "./Pages/contextA";

const ContextApi = createContext();

function App() {
  return (
    <>
      <Auth />
      
      {/* Context Api */}
      <ContextApi.Provider value={contextData}>
         <ContextA />
      </ContextApi.Provider>

      {/* Context */}
      <ContextDataFunc>
        <Dashboard />
      </ContextDataFunc>
    </>
  );
}

export default App;
export { ContextApi };
