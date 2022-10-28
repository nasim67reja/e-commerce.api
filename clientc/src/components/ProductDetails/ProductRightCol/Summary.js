import React, { useState } from "react";
import Reviews from "./Reviews";
import ShippingDet from "./ShippingDet";

const Summary = ({ product }) => {
  const [descriptionIsShown, setDescriptionIsShown] = useState(true);
  const [reviewIsShown, setReviewIsShown] = useState(false);
  const [shippingIsShown, setShippingIsShown] = useState(false);

  const hiddenClasses = "hidden";
  const activeClasses =
    "block border border-customBorder p-4 text-sm text-textColor rounded-sm";
  return (
    <div className="mt-14 mb-6">
      <div className="my-4 flex gap-2">
        <button
          className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
            descriptionIsShown ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => {
            setDescriptionIsShown(true);
            setReviewIsShown(false);
            setShippingIsShown(false);
          }}
        >
          Description
        </button>
        <button
          className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
            reviewIsShown ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => {
            setDescriptionIsShown(false);
            setReviewIsShown(true);
            setShippingIsShown(false);
          }}
        >
          <span> Reviews</span>
          <span
            className={`ml-2  ${
              reviewIsShown ? "text-white" : "text-orange-500"
            }`}
          >
            ({product?.ratingsQuantity})
          </span>
        </button>
        <button
          className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
            shippingIsShown ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => {
            setDescriptionIsShown(false);
            setReviewIsShown(false);
            setShippingIsShown(true);
          }}
        >
          Shipping Details
        </button>
      </div>

      <div className={`${descriptionIsShown ? activeClasses : hiddenClasses}`}>
        {product?.summary}
      </div>
      <div className={`${reviewIsShown ? activeClasses : hiddenClasses}`}>
        <Reviews />
      </div>
      <div
        className={`px-6 ${shippingIsShown ? activeClasses : hiddenClasses}`}
      >
        <ShippingDet />
      </div>
    </div>
  );
};

export default Summary;
