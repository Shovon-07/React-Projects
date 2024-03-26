import { createContext, useState } from "react";

//___ CSS ___//
import "./App.css";

//___ Data ___//
// import { contextData } from "./Data/contextData";

//___ Components ___//

//___ Context ___//
// import { ContextDataFunc } from "./Context/ContextData";
import Header from "./Components/Header";

//___ Pages ___//
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
// import ContextA from "./Pages/contextA";

const ContextApi = createContext();

function App() {
  return (
    <>
      <Header />
      <Auth />
      <Dashboard />

      {/* Context Api */}
      {/* <ContextApi.Provider value={contextData}>
        <ContextA />
      </ContextApi.Provider> */}

      {/* Context */}
      {/* <ContextDataFunc>
        <Dashboard />
      </ContextDataFunc> */}
    </>
  );
}

export default App;
export { ContextApi };
