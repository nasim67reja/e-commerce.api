import { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../App";
import RatingStar from "./RatingStar";

const Product = ({ product, customClass }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [clicked, setClicked] = useState(false);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const name = truncateString(product?.name, 28);
  return (
    <div className="relative flex h-full w-full  flex-col  items-center gap-1 ">
      <div
        className="sliderIcon absolute top-3 right-3 cursor-pointer"
        onClick={() => setClicked((prevSt) => !prevSt)}
      >
        {clicked ? (
          <ion-icon name="heart" size="large"></ion-icon>
        ) : (
          <ion-icon name="heart-outline" size="large"></ion-icon>
        )}
      </div>
      <Link
        to={`/${product.categories}/${product.name}`}
        className="w-full"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img
          src={
            mouseEnter
              ? `${URL}/Products/${product.categories}/${product.images[0]}`
              : `${URL}/Products/${product.categories}/${product.images[1]}`
          }
          alt=""
          crossOrigin="anonymous"
          className={`w-full cursor-pointer ${customClass}`}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        />
      </Link>
      <p className="text-sm text-secondary">{name}</p>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#0e5ec1]">${product.price}</span>
        {product.priceDiscount > 0 ? (
          <del className="text-sm text-[#bcbcbc]">
            ${product.price + product.priceDiscount}
          </del>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-1">
        <span>
          <RatingStar rating={product.ratingsAverage} />
        </span>
        <span className="text-sm text-[#888]">
          ({product.ratingsQuantity}) review
        </span>
      </div>
    </div>
  );
};

export default Product;
