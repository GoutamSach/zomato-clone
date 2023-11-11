import React, { useState } from "react";
import Toggles from "../components/Toggles";
import Tags from "../components/Tags";
import ListingForDining from "../components/ListingForDining";
import ListingForDelievery from "../components/ListingForDelievery";
import { useEffect } from "react";

function Home() {
  const [DeliverOrDining, setDeliverOrDining] = useState(true);
  const [pureVeg, setpureVeg] = useState(false);
  const [Rating4, setRating4] = useState(false);

  useEffect(() => {
    if (pureVeg === true) {
    }
  }, [pureVeg]);

  return (
    <>
      <Toggles deliverySelect={setDeliverOrDining} />
      <Tags filterForVeg={setpureVeg} filterForRating={setRating4} />
      {DeliverOrDining ? <ListingForDelievery /> : <ListingForDining />}
    </>
  );
}

export default Home;
