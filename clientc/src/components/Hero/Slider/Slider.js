import React, { useEffect, useState } from "react";
// import Dots from "./Dots";
// import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import "./slider.css";
import { sliderImage } from "./sliderImage";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      {/* <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} /> */}

      <section>
        {sliderImage.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? "relative inline-block h-[50vh] w-full"
                : "hidden"
            }
          >
            <img
              className="absolute h-full w-full object-cover"
              src={slide.urls}
              alt=""
            />
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </div>
        ))}
      </section>

      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  );
}

export default Slider;

//       <Dots
//         activeIndex={activeIndex}
//         sliderImage={sliderImage}
//         onclick={(activeIndex) => setActiveIndex(activeIndex)}
//       />
