import { useState } from "react";

//___ CSS ___//
import "./App.css";
import "./assets/css/app.css";

//___ Components ___//
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//___ Pages ___//
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />

        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
