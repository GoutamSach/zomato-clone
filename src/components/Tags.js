import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Tags() {
  return (
    <div className=" flex gap-4 my-8 text-sm">
      <div className=" hover:bg-gray-100 cursor-pointer flex items-center gap-1 text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        <TuneIcon style={{ width: "16px" }} />
        Filters
      </div>
      <div className="cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Ratings 4.0+
      </div>
      <div className="cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Pure Veg
      </div>
      <div className="cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Cuisines <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}

export default Tags;
