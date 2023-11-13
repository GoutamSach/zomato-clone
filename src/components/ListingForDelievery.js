import React, { useState } from "react";
import { Restaurent } from "../pages/data/Restaurent";
import Listingcard from "./Listingcard";
import Tags from "./Tags";
import { useEffect } from "react";
import Sort from "./sort";

function ListingForDelievery() {
  const [pureVeg, setpureVeg] = useState(false);
  const [vegFilter, setVegFilter] = useState("0");
  const [filteredList, setFilteredLIst] = useState(Restaurent);
  const [Rating4, setRating4] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("0");

  useEffect(() => {
    filterForVegandRate();
  }, [pureVeg, Rating4]);

  useEffect(() => {
    filters();
  }, [vegFilter, ratingFilter]);

  function filterForVegandRate() {
    if (Rating4 === true) {
      setRatingFilter("4.0");
    } else setRatingFilter("0");
    if (pureVeg === true) {
      setVegFilter("1");
    } else setVegFilter("0");
  }

  function filters() {
    const fitlerForDelivery = Restaurent.filter((item) => {
      return (
        item.info.veg > `${vegFilter}` &&
        item.info.rating.aggregate_rating > `${ratingFilter}`
      );
    });
    setFilteredLIst(fitlerForDelivery);
  }

  return (
    <>
      <div className="flex items-center justify-between  ">
        <div className="">
          <Tags filterForVeg={setpureVeg} filterForRating={setRating4} />
        </div>
        <div className="">
          <Sort />
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-y-10 mb-16">
        {filteredList.map((item) => (
          <Listingcard
            key={item.info.resId}
            imgurl={item.info.image.url}
            resid={item.info.resId}
            id={item.info.resId}
            discount={item.bulkOffers.text}
            title={item.info.name}
            rating={item.info.rating.aggregate_rating}
            menu={item.info.type}
            price={item.info.cfo.text}
            time={item.order.deliveryTime}
            veg={item.info.veg}
          />
        ))}
      </div>
    </>
  );
}

export default ListingForDelievery;
