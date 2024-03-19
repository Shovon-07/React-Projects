import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//___ Css ___//
import "./Styles/App.scss";

//___ Components ___//
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import Footer from "./Components/Footer/Footer";

//___ Pages ___//
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Customers from "./Pages/Customers/Customers";
import Products from "./Pages/Products/Products";
import Orders from "./Pages/Orders/Orders";
import Posts from "./Pages/Posts/Posts";
import Settings from "./Pages/Settings/Settings";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const [sideNavToggler, setSideNavToggler] = useState(true);

  const Layout = () => {
    return (
      <div className="container">
        <Header setSideNavToggler={setSideNavToggler} />
        <div className="sideNavContainer">
          <SideNav sideNavToggler={sideNavToggler} />
        </div>
        <div
          className={`contentContainer ${
            sideNavToggler == true ? "bigContentContainer" : ""
          }`}
        >
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
        // Side nav menu
        { path: "/dashboard", element: <Home /> },
        { path: "/dashboard/profile", element: <Profile /> },
        { path: "/dashboard/customers", element: <Customers /> },
        { path: "/dashboard/products", element: <Products /> },
        { path: "/dashboard/orders", element: <Orders /> },
        { path: "/dashboard/posts", element: <Posts /> },

        // Header menu
        { path: "/dashboard/settings", element: <Settings /> },
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
