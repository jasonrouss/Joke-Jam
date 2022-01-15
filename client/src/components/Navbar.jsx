import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 md:gap-5 w-70 mt-5 pb-7  ">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          className="p-2 w-70 bg-white outline-none"
        />
      </div>
      <button  onClick={() => navigate("/create")} className="bg-teal-700 cursor-pointer  text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center ">
        <IoMdAdd />
      </button>
    </div>
  );
};

export default Navbar;
