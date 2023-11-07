import React, { useEffect, useState } from "react";
import delivery from "../../src/images/delivery.png";
import deliverySelect from "../../src/images/deliverySelect.png";
import dine from "../../src/images/dine.png";
import dineSelect from "../../src/images/dineSelect.png";

function Toggles() {
  const [deliverySelected, setdeliverySelected] = useState(true);

  return (
    <div className="mt-12 ">
      <div className="  flex  gap-12  ">
        <div
          onClick={() => setdeliverySelected(true)}
          className="  cursor-pointer flex flex-col gap-4  items-center  "
        >
          <div className=" flex  items-center gap-4 px-4">
            <div
              className={`bg-gray-100 rounded-full ${
                deliverySelected && "bg-yellow-100"
              }`}
            >
              {deliverySelected ? (
                <img
                  className="w-16   p-4"
                  src={deliverySelect}
                  alt="delivery"
                />
              ) : (
                <img className="w-16   p-4" src={delivery} alt="delivery" />
              )}
            </div>
            <h1
              className={`text-gray-600 text-xl  font-medium ${
                deliverySelected && "text-red-400"
              }`}
            >
              Delivery
            </h1>
          </div>
          {deliverySelected ? (
            <div className=" w-full bg-red-400  h-[2px]  =" />
          ) : (
            <div className=" w-0 h-[2px]" />
          )}
        </div>

        <div
          onClick={() => setdeliverySelected(false)}
          className="  cursor-pointer flex flex-col   gap-4  items-center  "
        >
          <div className="=  flex items-center px-4 gap-4">
            <div
              className={`bg-gray-100  rounded-full ${
                !deliverySelected && "bg-yellow-100"
              }`}
            >
              {deliverySelected ? (
                <img className="w-16 p-4" src={dine} alt="delivery" />
              ) : (
                <img className="w-16 p-4" src={dineSelect} alt="delivery" />
              )}
            </div>
            <h1
              className={`text-gray-600 text-xl  font-medium ${
                !deliverySelected && "text-red-400"
              }`}
            >
              Dining Out
            </h1>
          </div>
          {!deliverySelected ? (
            <div className=" w-full bg-red-400  h-[2px]" />
          ) : (
            <div className="  w-16  h-[2px]" />
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Toggles;
