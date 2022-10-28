import React from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../../Reuse/Product";
import ListView from "./ListView";

const CateProd = ({ category }) => {
  const [searchParam] = useSearchParams();
  const sortingVal = searchParam.get("sort");

  // SORTING
  if (category) {
    if (sortingVal === "Price,low to high")
      category.sort((a, b) => a.price - b.price);
    if (sortingVal === "Price,high to low")
      category.sort((a, b) => b.price - a.price);
    if (sortingVal === "A-Z") {
      category.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    if (sortingVal === "Z-A") {
      category.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    }
  }

  return (
    <div>
      {searchParam.get("view") === "grid" || !searchParam.get("view") ? (
        <ul className="mx-auto flex flex-wrap items-center justify-center gap-3">
          {category?.map((product, i) => (
            <div
              key={i}
              className="h-[25rem] w-[18.5rem] border border-customBorder bg-white"
            >
              <Product product={product} customClass="h-[20rem]" />
            </div>
          ))}
        </ul>
      ) : (
        <ul className="mx-auto flex flex-col  gap-8">
          {category?.map((product, i) => (
            <ListView product={product} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CateProd;
