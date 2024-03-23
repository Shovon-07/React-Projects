import React from "react";

//___ Css ___//
import "./Cart.scss";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="Cart container">
        <div className="content d-flex">
          <div className="left">
            <p className="allSelect d-flex">
              <input type="checkbox" /> SELECT ALL (10 ITEM)
            </p>
          </div>
          <div className="right">
            <h1>right</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
