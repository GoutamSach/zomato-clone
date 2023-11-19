import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import maxsafety from "../../src/images/max safety.webp";

function Listingcard({
  imgurl,
  resId,
  id,
  discount,
  title,
  rating,
  menu,
  price,
  time,
}) {
  return (
    <>
      <div key={id}>
        <div className=" mt-8 w-[350px]  rounded-xl p-2  flex flex-col gap-2  hover:border hover:shadow-lg cursor-pointer hover:border-gray-200  border border-transparent ">
          <img
            className=" rounded-xl relative  object-cover  w-auto h-56"
            src={imgurl}
            alt={resId}
          />
          <p className=" bg-blue-600 text-white absolute px-1.5 rounded-sm  bottom-44 text-base ">
            {discount}
          </p>
          <div className="">
            <div className=" flex items-center  justify-between mb-1">
              <h1 className=" text-[17px] truncate  max-w-[250px] font-medium text-gray-700 ">
                {title}
              </h1>
              <p className=" bg-green-700   rounded-lg text-sm   px-1.5  text-white">
                {rating} <StarRateIcon style={{ width: "12px" }} />
              </p>
            </div>
            <div className=" flex items-center  justify-between">
              <h3 className=" text-[15px] truncate   max-w-[220px]   font-normal text-gray-400 ">
                {menu.map((i, index) => (index ? ", " : "") + i)}
              </h3>
              <p className=" text-[15px] truncate   font-normal text-gray-400">
                {price}
              </p>
            </div>
            <p className=" text-[12px] flex mt-1  justify-end truncate  font-medium   text-gray-600">
              {time}
            </p>
          </div>
          <hr />
          <div className=" flex justify-between items-center gap-3">
            <img src={maxsafety} className="  w-12 h-4" alt="maxsafety" />
            <p className=" text-xs text-gray-400 ">
              Follows all Max Safety measures to ensure your food is safe
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listingcard;
