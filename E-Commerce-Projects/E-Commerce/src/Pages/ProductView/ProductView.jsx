import React from "react";
import Slider from "react-slick";

//___ Images ___//
import Product_1 from "/images/product-1.jpg";
import Product_2 from "/images/product-2.jpg";
import Product_3 from "/images/product-3.jpg";

//___ CSS ___//
import "./ProductView.scss";
import { useParams } from "react-router-dom";

//___ Data ___//
import { productsData } from "../../Data";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import MySlider from "../../Components/MySlider/MySlider";

const ProductView = () => {
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div className="ProductView container">
        <div className="content d-flex gap-10">
          <div className="left">
            {/* <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img src={Product_1} alt="" />
                </div>
                <div>
                  <img src={Product_2} alt="" />
                </div>
                <div>
                  <img src={Product_3} alt="" />
                </div>
              </Slider>
            </div> */}
            <img src={Product_1} alt="" className="mainImg" />
            <div className="imgBtn d-flex gap-10">
              <img src={Product_1} alt="" />
              <img src={Product_2} alt="" />
              <img src={Product_3} alt="" />
            </div>
          </div>
          <div className="middle">2</div>
          <div className="right">3</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
