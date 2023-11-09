import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Tags() {
  return (
    <div className=" flex gap-4 my-8">
      <div className=" cursor-pointer flex items-center text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        <TuneIcon />
        Filters
      </div>
      <div className="cursor-pointer  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Ratings 4.0+
      </div>
      <div className="cursor-pointer  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Pure Veg
      </div>
      <div className="cursor-pointer  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Cuisines <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}

export default Tags;
