import React from "react";
import Toggles from "../components/Toggles";
import Tags from "../components/Tags";
import Listingcard from "../components/Listingcard";
import { Restaurent } from "./data/Restaurent";

function Home() {
  return (
    <>
      <Toggles />
      <Tags />
      <div className=" grid grid-cols-3 gap-y-10 mb-16">
        {Restaurent.map((item) => (
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
    </>
  );
}

export default Home;
