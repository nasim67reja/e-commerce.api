import React from "react";
import ProductLeftCol from "../components/ProductDetails/ProductLeftCol/ProductLeftCol";
import ProductRightCol from "../components/ProductDetails/ProductRightCol/ProductRightCol";

const ProductDetails = () => {
  return (
    <div className="mx-auto grid max-w-st grid-cols-1 gap-10  px-8 py-12 md:grid-cols-[20%_78%]">
      <ProductLeftCol />
      <ProductRightCol />
    </div>
  );
};

export default ProductDetails;
