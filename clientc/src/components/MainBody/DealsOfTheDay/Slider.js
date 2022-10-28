import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../Reuse/Product";

export const SingleProduct = ({
  product,
  i,
  numOfClick,
  widthparent,
  onGetOffScreenEl,
  data,
}) => {
  const [width, setWidth] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    setWidth(element.current.offsetWidth + 20);
    let offScreen = data.length - Math.floor(widthparent / width);
    onGetOffScreenEl(offScreen);
  }, [width, widthparent, onGetOffScreenEl, data.length]);

  let exactWidth = width * i + width * numOfClick;

  return (
    <div
      style={{ transform: `translateX(${exactWidth}px)` }}
      className="testclass absolute top-0 left-0 h-full transition-all duration-500"
    >
      <div className="h-[23rem] w-full" ref={element}>
        <Product product={product} customClass="mb-4 h-[16rem]" />
      </div>
    </div>
  );
};

const Slider = ({ data, title, route }) => {
  const [numOfClick, setNumOfClick] = useState(0);
  const [widthparent, setWidthParent] = useState(0);
  const parentWidth = useRef(null);

  useEffect(() => {
    if (data) {
      setWidthParent(parentWidth.current.offsetWidth);
      window.addEventListener("resize", () => {
        setWidthParent(parentWidth.current?.offsetWidth);
      });
    }
  }, [data]);

  const increaseTranslateXHandler = () => {
    setNumOfClick((prevSt) => (prevSt = prevSt + 1));
  };

  const decreaseTranslateXHandler = () => {
    setNumOfClick((prevSt) => (prevSt = prevSt - 1));
  };

  const maxNumOfClickHandler = (el) => {
    if (numOfClick < -el) setNumOfClick(-el);
  };
  if (numOfClick > 0) setNumOfClick(0);

  return (
    <>
      {data && (
        <div className=" mx-auto max-w-[110rem]  rounded-lg  bg-white">
          <div className="mb-6 flex items-center justify-between border-b border-[#dcdcdc] p-4">
            <h2 className="fontm text-xl">{title || data[0]?.categories}</h2>
            <button className="rounded border bg-blue-600 px-3 py-2 text-white transition-all hover:bg-white hover:text-primary">
              <Link to={`/${route || data[0]?.categories}`}>View all</Link>
            </button>
          </div>

          <div className="group relative w-full ">
            <div
              className="sliderIconarr absolute left-0 top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer items-center justify-center rounded-r-md bg-backg px-2 py-7 shadow-lg hover:bg-blue-400 group-hover:flex "
              onClick={increaseTranslateXHandler}
            >
              <ion-icon name="chevron-back-outline" size="large"></ion-icon>
            </div>

            <div
              className="sliderIconarr absolute -right-1 top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer items-center justify-center rounded-l-md bg-backg px-2 py-7 shadow-lg hover:bg-blue-400 group-hover:flex "
              onClick={decreaseTranslateXHandler}
            >
              <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
            </div>

            <div
              className="sec relative mb-10  h-[24rem] overflow-scroll scroll-smooth "
              ref={parentWidth}
            >
              {data.map((product, i) => (
                <SingleProduct
                  product={product}
                  key={i}
                  i={i}
                  numOfClick={numOfClick}
                  widthparent={widthparent}
                  onGetOffScreenEl={maxNumOfClickHandler}
                  data={data}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
