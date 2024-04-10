import React from "react";
import Style from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => (
  <div className={Style.BuildControls}>
    <p>Сендвичний үнэ: {props.price}</p>
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      count={props.count}
      type="salad"
      ingredient="Салад"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      count={props.count}
      type="bacon"
      ingredient="Гахайн мах"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      count={props.count}
      type="cheese"
      ingredient="Бяслаг"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      count={props.count}
      type="meat"
      ingredient="Үхрийн мах"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      count={props.count}
      type="tomato"
      ingredient="Улаан лооль"
    />
  </div>
);

export default BuildControls;
