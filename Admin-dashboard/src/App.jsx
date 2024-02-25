import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//___ Css ___//
import "./assets/css/font_awesome/all.min.css";

//___ Pages ___//
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
