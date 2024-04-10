import React from "react";
import Ingredient from "../Ingredient";

const Sandwitch = () => (
  <div>
    <Ingredient type="bread-top" />
    <Ingredient type="salad" />
    <Ingredient type="meat" />
    <Ingredient type="cheese" />
    <Ingredient type="bacon" />
    <Ingredient type="cheese" />
    <Ingredient type="salad" />
    <Ingredient type="meat" />
    <Ingredient type="bread-bottom" />
  </div>
);

export default Sandwitch;
