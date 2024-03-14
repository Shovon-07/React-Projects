import React, { useEffect, useState } from "react";

//___ Images ___//
import Banner_3 from "../assets/images/banner_3.jpg";
import Banner_4 from "../assets/images/banner_4.jpg";
import Banner_5 from "../assets/images/banner_5.jpg";
import Banner_2 from "../assets/images/banner_2.jpg";
import Banner_1 from "../assets/images/banner_1.jpg";

//___ Icons ___//
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const imgData = [
    { img: Banner_3 },
    { img: Banner_4 },
    { img: Banner_5 },
    { img: Banner_2 },
    { img: Banner_1 },
  ];

  let [slider, setSlider] = useState(0);

  const handleMinus = () => {
    // setSlider((slider -= 1));
    setSlider(slider === 0 ? imgData.length - 1 : (slider -= 1));
  };

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : (slider += 1));
  };

  // useEffect(() => {
  //   const auoSlider = setInterval(() => {
  //     handlePlus();
  //   }, 2000);

  //   return () => clearInterval(auoSlider);
  // }, [slider]);

  return (
    <div className="relative w-[100%] h-[450px]">
      <div>
        <img src={imgData[slider].img} alt="" className="w-[100%] h-[450px]" />
      </div>

      <div className="w-[100%] h-[100%] mx-auto bg-[var(--dark-2)] opacity-50 absolute top-0 left-0"></div>

      <div className="flex justify-between text-[var(--light-1)]">
        <FaAngleLeft
          size={50}
          className="cursor-pointer absolute top-[40%] left-3"
          onClick={handleMinus}
        />
        <FaAngleRight
          size={50}
          className="cursor-pointer absolute top-[40%] right-3"
          onClick={handlePlus}
        />
      </div>
    </div>
  );
};

export default Hero;
