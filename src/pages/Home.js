import React, { useState } from "react";
import Toggles from "../components/Toggles";

import ListingForDining from "../components/ListingForDining";
import ListingForDelievery from "../components/ListingForDelievery";
import { useEffect } from "react";

function Home() {
  const [DeliverOrDining, setDeliverOrDining] = useState(true);

  return (
    <>
      <Toggles deliverySelect={setDeliverOrDining} />

      {DeliverOrDining ? <ListingForDelievery /> : <ListingForDining />}
    </>
  );
}

export default Home;
