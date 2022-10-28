import React from "react";
import HeroOvarlay from "./HeroOvarlay";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="relative z-[-1] bg-backg">
      <HeroSlider />
      <HeroOvarlay />
    </section>
  );
};

export default Hero;
