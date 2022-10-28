import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../../App";
import Loading from "../../Reuse/Loading";
import RatingStar from "../../Reuse/RatingStar";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  const [topRatedProductIsOpen, setTopRatedProductIsOpen] = useState(true);

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

  const topThree = topRated.slice(0, 3);

  let loading = false;
  if (topThree.length < 1) loading = true;

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      {loading && (
        <div className="flex h-screen items-center justify-center gap-2">
          <Loading height="20" width="20" />
          <div>Loading..</div>
        </div>
      )}
      {!loading && (
        <div className="mb-8 rounded-sm bg-white p-2">
          <div
            className="relative  cursor-pointer p-2"
            onClick={() => setTopRatedProductIsOpen((prevSt) => !prevSt)}
          >
            <h2 className="text-xl font-medium text-blue-600">Top Rated</h2>
            <span className="absolute right-2 top-3">
              {topRatedProductIsOpen ? (
                <ion-icon name="chevron-up-outline"></ion-icon>
              ) : (
                <ion-icon name="chevron-down-outline"></ion-icon>
              )}
            </span>
          </div>

          <div
            className={`flex flex-col gap-4 overflow-hidden transition-all duration-300  ${
              topRatedProductIsOpen ? "h-60 py-4" : "h-0 py-0"
            } `}
          >
            {topThree.map((product, i) => (
              <Link
                to={`/${product.categories}/${product.name}`}
                onClick={() => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 200);
                }}
                key={i}
                className="flex cursor-pointer items-center gap-4"
              >
                <img
                  src={`${URL}/Products/${product.categories}/${product.images[0]}`}
                  alt={product.name}
                  crossOrigin="anonymous"
                  className="w-12"
                />
                <div>
                  <p className="text-sm">{truncateString(product.name, 15)}</p>

                  <div className="my-1 flex gap-2 text-xs font-medium text-[#0e5ec1]">
                    <span>{product.price} $</span>
                    {product.priceDiscount && (
                      <del className="text-[#bcbcbc]">
                        {product.priceDiscount + product.price} $
                      </del>
                    )}
                  </div>

                  <span className="text-xs">
                    <RatingStar rating={product.ratingsAverage} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TopRated;
