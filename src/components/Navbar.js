import React from "react";
import logo from "../../src/images/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div>
      <div className=" mx-auto max-w-[1148px] my-4">
        <div className=" flex flex-row items-center  ">
          <img className="w-32 hover:cursor-pointer" src={logo} alt="logo" />
          <div className=" text-base border flex  items-center  ml-8 mr-24   p-3 rounded-lg shadow-md shadow-gray-200  ">
            <div className="  text-red-400 pr-1">
              <LocationOnIcon fontSize="medium" />
            </div>
            <input
              type="text"
              className=" w-48  focus:outline-none"
              placeholder="Allahabad"
            />
            <div className="  flex  items-center gap-1">
              <div className=" text-gray-600 hover:cursor-pointer">
                <ArrowDropDownIcon fontSize="medium" />
              </div>
              <p className=" text-gray-400">|</p>
              <div className="text-gray-400 mx-2">
                <SearchIcon fontSize="medium" />
              </div>
            </div>
            <input
              type="text"
              className="focus:outline-none  w-[400px]"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
          <div className=" text-lg flex gap-8  text-gray-500 ">
            <p className="hover:cursor-pointer">Log in</p>
            <p className="hover:cursor-pointer">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
