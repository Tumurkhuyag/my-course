import React from "react";
import Style from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => (
  <div className={Style.BuildControls}>
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      type="salad"
      ingredient="Салад"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      type="bacon"
      ingredient="Гахайн мах"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      type="cheese"
      ingredient="Бяслаг"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      type="meat"
      ingredient="Үхрийн мах"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      type="tomato"
      ingredient="Улаан лооль"
    />
  </div>
);

export default BuildControls;
