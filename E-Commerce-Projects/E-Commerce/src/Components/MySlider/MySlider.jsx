import React from "react";
import Slider from "react-slick";

//___ Css ___//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.scss";

//___ Data ___//
import { carouselData } from "../../Data";
import { Link } from "react-router-dom";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carouselData.map((items) => {
          return (
            <Link to={`/banner/${items.id}`} key={items.id}>
              <img src={items.img} />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default MySlider;
