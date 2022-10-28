import React, { useEffect, useState } from "react";

const featuredProducts = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
];

let count = -1;
let interval;
let startSlider;
const Composition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider = () => {
      interval = setInterval(() => {
        count = count >= 1 ? -1 : count + 1;
        setCurrentIndex(count);
      }, 4000);
    };
    startSlider();
    return () => clearInterval(interval);
  }, []);

  const nextSlideHandler = () => {
    count = count === 1 ? -1 : count + 1;
    setCurrentIndex(count);
    clearInterval(interval);
    startSlider();
  };
  const prevSlideHandler = () => {
    count = count === -1 ? 1 : count - 1;
    setCurrentIndex(count);
    clearInterval(interval);
    startSlider();
  };

  let transformXF = `translate-x-[${(0 - currentIndex) * 100}%]`;
  let transformXs = `translate-x-[${(1 - currentIndex) * 100}%]`;
  let transformXT = `translate-x-[${(2 * currentIndex - 1) * 100}%]`;

  // console.log(transformXF);
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="relative h-[50rem]  w-[50rem] overflow-hidden border-8 border-black p-4">
        <div
          className="absolute right-5 top-[50%] z-10 flex translate-y-[-50%] cursor-pointer items-center justify-center bg-slate-400"
          onClick={nextSlideHandler}
        >
          <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>

        <div
          className="absolute top-[50%] z-10 translate-y-[-50%]  cursor-pointer bg-slate-400"
          onClick={prevSlideHandler}
        >
          <ion-icon name="chevron-back-outline" size="large"></ion-icon>
        </div>

        <img
          src={featuredProducts[0]}
          alt=""
          className={`absolute top-0 left-0 h-[50rem]  w-[50rem] object-cover ${transformXF} ${
            transformXF === "translate-x-[0%]" ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        />
        <img
          src={featuredProducts[1]}
          alt=""
          className={`absolute top-0 left-0  h-[50rem]  w-[50rem] object-cover ${
            currentIndex === -1 ? "translate-x-[-100%]" : transformXs
          } ${
            transformXs === "translate-x-[0%]" ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        />
        <img
          src={featuredProducts[2]}
          alt=""
          className={`absolute top-0 left-0 h-[50rem]  w-[50rem] object-cover ${
            currentIndex === -1 ? "translate-x-[0%]" : transformXT
          } ${
            transformXT === "translate-x-[100%]" ||
            transformXT === "translate-x-[-100%]"
              ? "opacity-0"
              : "opacity-100"
          } transition-all duration-500`}
        />
      </div>
    </div>
  );
};

export default Composition;

// import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

// const featuredProducts = [
//   "/images/pic1.jpg",
//   "/images/pic2.jpg",
//   "/images/pic3.jpg",
// ];

// let count = 0;
// let slideInterval;
// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slideRef = useRef();

//   const removeAnimation = () => {
//     slideRef.current.classList.remove("fade-anim");
//   };

//   useEffect(() => {
//     slideRef.current.addEventListener("animationend", removeAnimation);
//     slideRef.current.addEventListener("mouseenter", pauseSlider);
//     slideRef.current.addEventListener("mouseleave", startSlider);

//     startSlider();
//     return () => {
//       pauseSlider();
//     };
//     // eslint-disable-next-line
//   }, []);

//   const startSlider = () => {
//     slideInterval = setInterval(() => {
//       handleOnNextClick();
//     }, 3000);
//   };

//   const pauseSlider = () => {
//     clearInterval(slideInterval);
//   };

//   const handleOnNextClick = () => {
//     count = (count + 1) % featuredProducts.length;
//     setCurrentIndex(count);
//     slideRef.current.classList.add("fade-anim");
//   };

//   const handleOnPrevClick = () => {
//     const productsLength = featuredProducts.length;
//     count = (currentIndex + productsLength - 1) % productsLength;
//     setCurrentIndex(count);
//     slideRef.current.classList.add("fade-anim");
//   };

//   return (
//     <div ref={slideRef} className="relative w-full select-none">
//       <div className="aspect-w-16 aspect-h-9">
//         <img src={featuredProducts[currentIndex]} alt="" />
//       </div>

//       <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-3">
//         <button
//           className="cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100"
//           onClick={handleOnPrevClick}
//         >
//           <AiOutlineVerticalRight size={30} />
//         </button>
//         <button
//           className="cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100"
//           onClick={handleOnNextClick}
//         >
//           <AiOutlineVerticalLeft size={30} />
//         </button>
//       </div>
//     </div>
//   );
// }
