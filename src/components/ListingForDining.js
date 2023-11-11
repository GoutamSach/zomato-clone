import React from "react";
import { Dining } from "../pages/data/Dining";
import Listingcard from "./Listingcard";

function ListingForDining() {
  return (
    <div className=" grid grid-cols-3 gap-y-10 mb-16">
      {Dining.map((item) => (
        <Listingcard
          imgurl={item.info.image.url}
          resid={item.info.resId}
          key={item.info.resId}
          discount={item.bulkOffers.text}
          title={item.info.name}
          rating={item.info.rating.aggregate_rating}
          menu={item.info.type}
          price={item.info.cfo.text}
          time={item.order.deliveryTime}
        />
      ))}
    </div>
  );
}

export default ListingForDining;
