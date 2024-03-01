import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//___ CSS ___//
import "./assets/css/font_awesome/all.min.css";

import "./assets/css/app.css";
import "./assets/css/Sidenav.css";

//___ Components ___//

//___ Pages ___//
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard";
import Brands from "./Pages/Brands";
import Category from "./Pages/Category";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          {/* <Route path="/posts" element={<Posts />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
