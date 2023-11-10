import React, { useContext, useState } from "react";
import Toggles from "../components/Toggles";
import Tags from "../components/Tags";
import Listingcard from "../components/Listingcard";
import { Restaurent } from "./data/Restaurent";
import { Dining } from "./data/Dining";
import { useEffect } from "react";

function Home() {
  const [DeliverOrDining, setDeliverOrDining] = useState(true);

  function deliverySelect(deliverySelected) {
    if (deliverySelected === true) {
      setDeliverOrDining(true);
    } else setDeliverOrDining(false);
  }

  return (
    <>
      <Toggles deliverySelect={deliverySelect} />
      <Tags />
      {DeliverOrDining ? (
        <div className=" grid grid-cols-3 gap-y-10 mb-16">
          {Restaurent.map((item) => (
            <Listingcard
              imgurl={item.info.image.url}
              resid={item.info.resId}
              id={item.info.resId}
              discount={item.bulkOffers.text}
              title={item.info.name}
              rating={item.info.rating.aggregate_rating}
              menu={item.info.type}
              price={item.info.cfo.text}
              time={item.order.deliveryTime}
            />
          ))}
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Home;
