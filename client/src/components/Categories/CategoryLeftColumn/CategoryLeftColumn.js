import React from "react";
import TopRated from "../../ProductDetails/ProductLeftCol/TopRated";
import CategoryNav from "./CategoryNav";
import ads from "../../../assets/style.jpg";

const CategoryLeftColumn = () => {
  return (
    <div>
      <CategoryNav />
      <TopRated />
      <img src={ads} alt="a women" />
    </div>
  );
};

export default CategoryLeftColumn;
