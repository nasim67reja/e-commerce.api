import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../App";
import Loading from "../../Reuse/Loading";
import Slider from "./Slider";

const Deals = () => {
  const [topRated, setTopRated] = useState([]);

  const fetchTopRatedProductsHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(`${URL}/api/v1/products/top-10-rated`);
      setTopRated(data.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTopRatedProductsHandler();
  }, [fetchTopRatedProductsHandler]);

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

  let isLoading = false;
  if (!products) isLoading = true;

  let isLoadingForTopRated = false;
  if (topRated.length < 1) isLoadingForTopRated = true;

  return (
    <>
      <div className=" mt-[-15rem]">
        {isLoading && <Loading classes="my-8" />}
        <Slider data={Electronics} />
      </div>
      <div>
        {isLoadingForTopRated && <Loading classes="my-8" />}
        {!isLoadingForTopRated && (
          <Slider data={topRated} title={"Top Rated"} route="top-rated" />
        )}
      </div>
      {[Man, Women, Home].map((el, i) => (
        <div key={i}>
          {isLoading && <Loading classes="my-8" />}
          <Slider data={el} />
        </div>
      ))}
    </>
  );
};

export default Deals;
