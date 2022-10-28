import React, { useEffect, useState } from "react";
import bg1 from "../../assets/sliderbg/bga1.jpg";
import bg2 from "../../assets/sliderbg/bga2.jpg";
import bg3 from "../../assets/sliderbg/bga3.jpg";

let count = -1;
let interval;
let startSlider;

const HeroSlider = () => {
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

  return (
    <div>
      <div className="mx-auto h-[44rem] max-w-[110rem] ">
        <div className="relative h-full  w-full overflow-hidden  p-4">
          {/* <div
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
          </div> */}

          <img
            src={bg1}
            alt=""
            className={`absolute top-0 left-0  h-full w-full object-cover ${transformXF} ${
              transformXF === "translate-x-[0%]" ? "opacity-100" : "opacity-0"
            } transition-all duration-500`}
          />
          <img
            src={bg2}
            alt=""
            className={`absolute top-0 left-0  h-full w-full object-cover ${
              currentIndex === -1 ? "translate-x-[-100%]" : transformXs
            } ${
              transformXs === "translate-x-[0%]" ? "opacity-100" : "opacity-0"
            } transition-all duration-500`}
          />
          <img
            src={bg3}
            alt=""
            className={`absolute top-0 left-0  h-full w-full object-cover ${
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
    </div>
  );
};

export default HeroSlider;
