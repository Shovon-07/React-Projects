import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//___ CSS ___//
import "../assets/css/side_nav.css";

//___ Icons ___//
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSlack } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

export default function Dashboard() {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Brands", link: "/brands", icon: FaSlack },
    { name: "Category", link: "/category", icon: CiViewList },
    { name: "Products", link: "/products", icon: BsBox },
    { name: "Orders", link: "/orders", icon: FaTruckFast },
    { name: "Customers", link: "/customers", icon: FaUsers },
  ];

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 sideNav`}
      >
        {/* Toggler */}
        <div className="py-3 flex justify-end">
          {/* <i className="fa-solid fa-bars cursor-pointer"></i> */}
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Menu */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800"
            >
              <div>{React.createElement(menu?.icon, { size: "16" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">React</div>
    </section>
  );
}
