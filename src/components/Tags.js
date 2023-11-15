import React, { useEffect, useState } from "react";
// import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Select, Option } from "@material-tailwind/react";
import { CuisinesDropdown } from "./CuisinesDropdown";

function Tags(props) {
  const [pureVeg, setpureVeg] = useState(false);
  const [Rating4, setRating4] = useState(false);
  const [CuisineDropDown, setCuisineDropDown] = useState(false);

  useEffect(() => {
    props.filterForVeg(pureVeg);
  }, [pureVeg]);

  useEffect(() => {
    props.filterForRating(Rating4);
  }, [Rating4]);

  return (
    <div className="">
      <div className=" relative flex items-center gap-4 my-8 text-sm">
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
            }
            if (pureVeg === true) {
              setpureVeg(false);
            }
          }}
          className={`cursor-pointer hover:bg-gray-100  text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2 ${
            pureVeg && "bg-red-500 text-white hover:bg-red-600 border-red-500"
          } `}
        >
          Pure Veg {pureVeg && <CloseIcon style={{ width: "18px" }} />}
        </div>
        <div className="">
          <div
            onClick={() => {
              if (CuisineDropDown === false) {
                setCuisineDropDown(true);
              }
              if (CuisineDropDown === true) {
                setCuisineDropDown(false);
              }
            }}
            className=" hover:bg-gray-100 cursor-pointer flex items-center gap-1 text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  "
          >
            Cuisines
            <KeyboardArrowDownIcon style={{ width: "16px" }} />
          </div>
          <div className=" fixed z-10">
            {CuisineDropDown && <CuisinesDropdown />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tags;
