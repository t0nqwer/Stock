import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/links";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useAppContext } from "../contexts/AppContext";
import Logo from "../data/Logo";
import logoimg from "../data/logo-s-white.png";
const Sidebar = () => {
  const activeLink =
    "flex items-center gap-1 justify-center rounded-lg  mt-5  py-4 px-2  text-white  bg-highlight text-md   ";
  const normalLink =
    "flex items-center flex-col justify-center  rounded-lg text-md text-white mt-5   hover:text-black hover:bg-light-gray m-2";
  return (
    <div className=" h-screen  overflow-hidden pb-10 px-5 flex flex-col  justify-between">
      <div className="flex justify-center items-center relative">
        <Link
          to="/"
          className="items-center mt-4 flex text-xl font-extrabold tracking-tight text-white"
        >
          <div className="w-48">
            <img src={logoimg} className=" object-contain  px-8 pt-5" />
          </div>
        </Link>
      </div>
      <div className="">
        {links.map((item) => (
          <div key={item.name}>
            <NavLink
              to={`/${item.name}`}
              key={item.name}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="text-4xl">{item.icon}</div>
              <span className="capitalize ">{item.title}</span>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Sidebar;
