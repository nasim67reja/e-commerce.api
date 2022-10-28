import React from "react";
import CateProd from "./CateProd";
import CateHeader from "./CateHeader";
import { useSelector } from "react-redux";
import Loading from "../../Reuse/Loading";

const CategoryRightColumn = ({ params }) => {
  const products = useSelector((state) => state.allProducts.allProducts);

  const Electronics =
    products &&
    products.filter((products) => products.categories === "Electronics");
  const Man =
    products && products.filter((products) => products.categories === "Man");
  const Women =
    products && products.filter((products) => products.categories === "Women");
  const Home =
    products && products.filter((products) => products.categories === "Home");

  const [Category] = [Electronics, Man, Women, Home].filter((product) => {
    if (!product) return null;
    return product[0]?.categories === params;
  });

  let loading = false;
  if (!products) loading = true;

  return (
    <>
      {loading && (
        <div className="flex h-screen items-center justify-center gap-2">
          <Loading height="20" width="20" />
          <div>Loading..</div>
        </div>
      )}
      {!loading && (
        <div className="h">
          <CateHeader />
          <CateProd category={Category} />
        </div>
      )}
    </>
  );
};

export default CategoryRightColumn;
