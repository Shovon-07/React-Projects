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
import Product from "./Pages/Product/Product.tsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Customer from "./Pages/Customer/Customer.tsx";
import Orders from "./Pages/Orders/Orders";

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
            <Footer />
          </div>
        </div>
        {/* <Footer /> */}
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
          path: "/customers",
          element: <Customer />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/orders",
          element: <Orders />,
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
