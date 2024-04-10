import React from "react";
import Style from "./style.module.css";

const BuildControl = (props) => (
  <div className={Style.BuildControl}>
    <div className={Style.Label}>{props.ingredient}</div>
    <button
      onClick={() => props.removeIngredient(props.type)}
      className={Style.Less}>
      -
    </button>
    <button
      onClick={() => props.addIngredient(props.type)}
      className={Style.More}>
      +
    </button>
  </div>
);

export default BuildControl;
