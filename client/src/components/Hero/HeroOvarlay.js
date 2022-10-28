import React from "react";

import ovarlay1 from "../../assets/Ovarlay/Headset.jpg";
import ovarlay2 from "../../assets/Ovarlay/Keyboard.jpg";

const ovarlay = [
  {
    title: "Gaming accessories",
    images: [
      { link: ovarlay1, name: "Headsets" },
      { link: ovarlay2, name: "keyboards" },
      { link: ovarlay2, name: "Computer mice" },
      { link: ovarlay2, name: "Chairs" },
    ],
  },
  {
    title: "Shop by Category",
    images: [
      { link: ovarlay2, name: "Headsets" },
      { link: ovarlay2, name: "keyboards" },
      { link: ovarlay2, name: "Computer mice" },
      { link: ovarlay2, name: "Chairs" },
    ],
  },
  {
    title: "Dresses",
    images: [
      { link: ovarlay2, name: "Headsets" },
      { link: ovarlay2, name: "keyboards" },
      { link: ovarlay2, name: "Computer mice" },
      { link: ovarlay2, name: "Chairs" },
    ],
  },
  {
    title: "Gaming accessories",
    images: [
      { link: ovarlay2, name: "Headsets" },
      { link: ovarlay2, name: "keyboards" },
      { link: ovarlay2, name: "Computer mice" },
      { link: ovarlay2, name: "Chairs" },
    ],
  },
];

const HeroOvarlay = () => {
  return (
    <div className="relative top-[-20rem] mx-auto flex max-w-[110rem] justify-center gap-4 px-3 sm:gap-7  sm:px-8">
      {ovarlay.map((el, i) => (
        <div
          key={i}
          className={`flex w-[25rem] flex-col items-start justify-between bg-white py-4 px-8 ${
            i === 3 ? "hidden xl:flex" : ""
          } ${i === 2 ? "hidden lg:flex" : ""}`}
        >
          <h3 className="my-2 text-xl  font-semibold md:my-4 lg:text-2xl">
            {el.title}
          </h3>
          <div className="my-4 grid grid-cols-2 gap-6 gap-y-8  sm:my-8 ">
            {el.images.map((image, i) => (
              <div key={i} className="self-end ">
                <img
                  src={image.link}
                  alt={image.name}
                  className="sm:h-22 h-18 mb-2  w-24 sm:w-36"
                />
                <p>{image.name}</p>
              </div>
            ))}
          </div>
          <button>See more</button>
        </div>
      ))}
    </div>
  );
};

export default HeroOvarlay;
