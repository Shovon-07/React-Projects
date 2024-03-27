import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//___ Css ___//
import "./Styles/App.scss";

//___ Components ___//

//___ Pages ___//
import AuthApp from "./AuthApp";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

import App from "./App";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthApp />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Home /> },
      { path: "/dashboard/products", element: <Products /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
