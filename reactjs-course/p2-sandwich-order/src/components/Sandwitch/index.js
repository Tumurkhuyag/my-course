import React from "react";
import Ingredient from "../Ingredient";
import Style from "./style.module.css";

const Sandwitch = () => (
  <div className={Style.Sandwitch}>
    <Ingredient type="BreadTop" />
    <Ingredient type="Salad" />
    <Ingredient type="Meat" />
    <Ingredient type="Cheese" />
    <Ingredient type="Bacon" />
    <Ingredient type="Cheese" />
    <Ingredient type="Salad" />
    <Ingredient type="Meat" />
    <Ingredient type="BreadBottom" />
  </div>
);

export default Sandwitch;
