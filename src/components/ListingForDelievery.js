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
  const [lastScroll, setLastScroll] = useState(0);
  const [SelectedCuisine, setSelectedCuisine] = useState([]);
  const [CuisineBoolean, setCuisineBoolean] = useState(false);
  const [headerHide, setHeaderHide] = useState(false);

  useEffect(() => {
    if (SelectedCuisine > "0") {
      setCuisineBoolean(true);
    }
    if (SelectedCuisine === "0") {
      setCuisineBoolean(false);
    }
  }, [SelectedCuisine]);

  // code for header hide
  function headerHideOnScroll() {
    setHeaderHide(true);
    if (window.scrollY > 205) {
    } else {
      setHeaderHide(false);
    }
    setLastScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", headerHideOnScroll);
    return () => {
      window.removeEventListener("scroll", headerHideOnScroll);
    };
  }, [lastScroll]);

  // rating and pure veg filter

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

  useEffect(() => {}, [SelectedCuisine]);

  function filters() {
    const fitlerForDelivery = Restaurent.filter((item) => {
      return (
        item.info.veg > `${vegFilter}` &&
        item.info.rating.aggregate_rating > `${ratingFilter}`

        // {
        //   CuisineBoolean

        // item.info.type[0] === "North Indian"}
      );
    });
    setFilteredLIst(fitlerForDelivery);
  }

  return (
    <>
      <div className=" relative ">
        <div
          className={`flex items-center justify-between ${
            headerHide &&
            " my-0 z-50  fixed top-0 w-[1148px] max-w-[1148px] bg-white "
          }`}
        >
          <div className="">
            <Tags
              SelectedCuisine={setSelectedCuisine}
              filterForVeg={setpureVeg}
              filterForRating={setRating4}
            />
          </div>
          <div className="">
            <Sort />
          </div>
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
