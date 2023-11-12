import React, { useState } from "react";
import { Restaurent } from "../pages/data/Restaurent";
import Listingcard from "./Listingcard";
import Tags from "./Tags";

function ListingForDelievery() {
  const [pureVeg, setpureVeg] = useState(false);
  const [Rating4, setRating4] = useState(false);

  console.log(pureVeg);
  return (
    <>
      <Tags filterForVeg={setpureVeg} filterForRating={setRating4} />
      <div className=" grid grid-cols-3 gap-y-10 mb-16">
        {Restaurent.map((item) => (
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
