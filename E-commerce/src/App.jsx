import { useState } from "react";

//___ CSS ___//
import "./App.css";
import "./assets/css/app.css";

//___ Components ___//
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
