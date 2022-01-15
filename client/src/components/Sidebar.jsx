import React from "react";
import { categories } from "../utils/data";
import { RiHomeFill } from "react-icons/ri";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const isActiveStyle =
  "flex items-center cursor-pointer mt-2 gap-3 text-zinc-100    transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col pl-4 justify-between pb-12 bg-white  overflow-y-scroll min-w-210 hide-scrollbar bg-slate-800	">
      <div className="flex flex-col">
        <div
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <Link
            to="/"
            className={ isActiveStyle 
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </Link>
          <h3 className="mt-2 px-5 text-zinc-300 2xl:text-xl">
            Discover cateogries
          </h3>
          {categories.slice(0, categories.length).map((category) => (
            <div
            className={
                 isActiveStyle 
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className=" rounded-full shadow-sm"
                alt="catImg"
              />
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
