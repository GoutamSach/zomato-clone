import React, { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

function Tags(props) {
  const [pureVeg, setpureVeg] = useState(false);
  const [Rating4, setRating4] = useState(false);

  useEffect(() => {
    props.filterForVeg(pureVeg);
  }, [pureVeg]);

  useEffect(() => {
    props.filterForRating(Rating4);
  }, [Rating4]);

  return (
    <div className=" flex items-center gap-4 my-8 text-sm">
      <div className=" hover:bg-gray-100 cursor-pointer flex items-center gap-1 text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        <TuneIcon style={{ width: "16px" }} />
        Filters
      </div>
      <div
        onClick={() => {
          if (Rating4 === false) {
            setRating4(true);
          } else setRating4(false);
        }}
        className={`cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2 ${
          Rating4 && "bg-red-500 text-white hover:bg-red-600 border-red-500"
        }`}
      >
        Ratings 4.0+ {Rating4 && <CloseIcon style={{ width: "18px" }} />}
      </div>
      <div
        onClick={() => {
          if (pureVeg === false) {
            setpureVeg(true);
          } else setpureVeg(false);
        }}
        className={`cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2 ${
          pureVeg && "bg-red-500 text-white hover:bg-red-600 border-red-500"
        } `}
      >
        Pure Veg {pureVeg && <CloseIcon style={{ width: "18px" }} />}
      </div>
      <div className="cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  ">
        Cuisines <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}

export default Tags;
