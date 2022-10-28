import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { URL } from "../../../App";
import RatingStar from "../../Reuse/RatingStar";

const ListView = ({ product }) => {
  const [hoverOnImage, setHoverOnImage] = useState(true);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  return (
    <>
      {product && (
        <li className="grid grid-cols-[28%_68%]   gap-8 border border-customBorder">
          <div className="relative">
            <Link
              to={`${location.pathname}/${product.name}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img
                src={
                  hoverOnImage
                    ? `${URL}/Products/${product.categories}/${product.images[0]}`
                    : `${URL}/Products/${product.categories}/${product.images[1]}`
                }
                crossOrigin="anonymous"
                alt={product.name}
                className="h-[22rem] w-full"
                onMouseEnter={() => setHoverOnImage(false)}
                onMouseLeave={() => setHoverOnImage(true)}
              />
            </Link>
            <span
              className="categoryIcon absolute top-2 right-2 cursor-pointer"
              onClick={() => setClicked(true)}
            >
              {clicked ? (
                <ion-icon name="heart"></ion-icon>
              ) : (
                <ion-icon name="heart-outline"></ion-icon>
              )}
            </span>
          </div>
          <div className="w-full px-2 py-6">
            <h3 className="text-xl">{product.name}</h3>

            <div className="my-2 flex items-center gap-4">
              <span className="text-sm text-[#0e5ec1]">${product.price}</span>
              {product.priceDiscount > 0 ? (
                <del className="text-sm text-[#bcbcbc]">
                  ${product.price + product.priceDiscount}
                </del>
              ) : (
                ""
              )}
            </div>
            <div className="my-2 flex gap-1">
              <span>
                <RatingStar rating={product.ratingsAverage}></RatingStar>
              </span>
              <span className="text-sm text-[#888]">
                ({product.ratingsQuantity}) review
              </span>
            </div>
            <p className="text-sm">{product.summary}</p>
            <button className="mt-6 rounded-sm border border-orange-500 py-2 px-4  text-sm transition-all hover:bg-blue-500 hover:text-white">
              Add to cart
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default ListView;
