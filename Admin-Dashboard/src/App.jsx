import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//___ CSS ___//
import "./Styles/Global.scss";

//___ Components ___//
import NavBar from "./Components/NavBar/NavBar";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";

//___ Pages ___//
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Brand from "./Pages/Brand/Brand";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Home />,
        },
        {
          path: "/brand",
          element: <Brand />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
