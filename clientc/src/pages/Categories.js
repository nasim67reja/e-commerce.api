import React from "react";
import { useParams } from "react-router-dom";
import CategoryLeftColumn from "../components/Categories/CategoryLeftColumn/CategoryLeftColumn";
import CategoryRightColumn from "../components/Categories/CategoryRightColumn/CategoryRightColumn";

const Categories = () => {
  const params = useParams();

  return (
    <div className="mx-auto grid max-w-st grid-cols-[24%_74%] gap-10  px-8 py-12">
      <CategoryLeftColumn />
      <CategoryRightColumn params={params.categoriesId} />
    </div>
  );
};

export default Categories;
