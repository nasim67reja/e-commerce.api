import React from "react";
import Hero from "../Hero/Hero";
import Deals from "./DealsOfTheDay/Deals";

const MainBody = () => {
  return (
    <div>
      <Hero></Hero>
      <Deals />
    </div>
  );
};

export default MainBody;
