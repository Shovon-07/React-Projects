import React, { useState } from "react";

//___ Icons ___//
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleChange = () => {
    setSideNav(!sideNav);
    console.log(sideNav);
  };

  return (
    <div className="flex justify-between items-center py-[20px] px-[30px] text-[15px] font-semibold shadow-lg relative z-[1000]">
      <div>
        <p className="text-2xl cursor-pointer">
          Shopping <span className="text-[var(--main)]">Mart</span>
        </p>
      </div>

      <div>
        <ul className="md:flex items-center gap-10 hidden">
          <li className="cursor-pointer hover:text-[var(--main)]">Home</li>
          <li className="cursor-pointer hover:text-[var(--main)]">About Us</li>
          <li className="cursor-pointer hover:text-[var(--main)]">Products</li>
          <li className="cursor-pointer hover:text-[var(--main)]">Offers</li>
          <li className="cursor-pointer hover:text-[var(--main)]">Sign In</li>
        </ul>
      </div>

      {sideNav ? (
        <div className="flex items-center justify-center w-[200px] fixed top-0 right-0 h-[100vh] bg-[var(--light-1)]">
          <RxCross1
            size={25}
            className="absolute top-3 right-2 cursor-pointer"
            onClick={handleChange}
          />
          <ul className="flex items-center flex-col gap-[20px]">
            <li className="cursor-pointer hover:text-[var(--main)]">Home</li>
            <li className="cursor-pointer hover:text-[var(--main)]">
              About Us
            </li>
            <li className="cursor-pointer hover:text-[var(--main)]">
              Products
            </li>
            <li className="cursor-pointer hover:text-[var(--main)]">Offers</li>
            <li className="cursor-pointer hover:text-[var(--main)]">Sign In</li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center ml-5">
        <li className="cursor-pointer mr-5">
          <FaCartShopping size={25} />
        </li>
        <li className="cursor-pointer md:hidden">
          <RxHamburgerMenu size={25} onClick={handleChange} />
        </li>
      </div>
    </div>
  );
};

export default Header;

/*

      <div className="flex items-center justify-center w-[200px] absolute top-0 right-0 h-[100vh] backdrop-blur-xl">
        <RxCross1 size={25} className="absolute top-3 right-2 cursor-pointer" />
        <ul className="md:flex items-center gap-[20px] hidden flex-col">
          <li className="cursor-pointer hover:text-[var(--main)]">Home</li>
          <li className="cursor-pointer hover:text-[var(--main)]">About Us</li>
          <li className="cursor-pointer hover:text-[var(--main)]">Products</li>
          <li className="cursor-pointer hover:text-[var(--main)]">Offers</li>
          <li className="cursor-pointer hover:text-[var(--main)]">Sign In</li>
        </ul>
      </div>

*/
