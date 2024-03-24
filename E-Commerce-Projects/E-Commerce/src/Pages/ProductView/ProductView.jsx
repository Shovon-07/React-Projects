import React from "react";

//___ CSS ___//
import "./ProductView.scss";
import { useParams } from "react-router-dom";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const ProductView = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="ProductView container">
        <div className="content d-flex">
          <h1>Product View No = {id}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
