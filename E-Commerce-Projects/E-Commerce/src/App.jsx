import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//___ Css ___//
import "./Styles/App.scss";

//___ Icons ___//

//___ Images ___//

//___ Data ___//

//___ Components ___//

//___ Pages ___//
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Pages/Profile/Profile";
import Products from "./Pages/Products/Products";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const [color, setColor] = useState(false);

  // const Layout = () => {
  //   return (
  //     <div className="main">
  //       <Header setColor={setColor} />
  //       <div className={`container ${color == true ? "color" : ""}`}>
  //         <Outlet />
  //       </div>
  //     </div>
  //   );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       { path: "/dashboard/Profile", element: <Profile /> },
  //       { path: "/dashboard/products", element: <Products /> },
  //       { path: "/login", element: <Login /> },
  //       { path: "/signup", element: <Signup /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
