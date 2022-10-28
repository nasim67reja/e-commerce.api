import React from "react";
import Product from "../../Reuse/Product";

const RelatedProd = ({ productCategory, product }) => {
  return (
    <div>
      <h3 className="my-8 text-xl">Related Products</h3>
      <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
        {productCategory &&
          productCategory.map((product, i) => (
            <div
              key={i}
              className="h-[25rem] w-[18.5rem] border border-customBorder bg-white"
            >
              <Product product={product} customClass="h-[20rem]" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedProd;
