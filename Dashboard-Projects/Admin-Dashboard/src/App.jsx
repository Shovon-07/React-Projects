import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//___ Css ___//
import "./Styles/App.scss";

//___ Components ___//
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";

//___ Pages ___//
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Products from "./Pages/Products/Products";
import Customers from "./Pages/Customers/Customers";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const Layout = () => {
    return (
      <div className="container">
        <Header />
        <div className="sideNavContainer">
          <SideNav />
        </div>
        <div className="contentContainer">
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/dashboard", element: <Home /> },
        { path: "/dashboard/profile", element: <Profile /> },
        { path: "/dashboard/products", element: <Products /> },
        { path: "/dashboard/customers", element: <Customers /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
