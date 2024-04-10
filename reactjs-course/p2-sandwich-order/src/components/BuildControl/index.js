import React from "react";
import Style from "./style.module.css";

const BuildControl = (props) => {
  return (
    <div className={Style.BuildControl}>
      <button
        disabled={props.count[props.type] <= 0}
        onClick={() => props.removeIngredient(props.type)}
        className={Style.Less}>
        -
      </button>
      <div className={Style.Label}>
        {`${props.ingredient} (${props.count[props.type]})`}
      </div>
      <button
        onClick={() => props.addIngredient(props.type)}
        className={Style.More}>
        +
      </button>
    </div>
  );
};

export default BuildControl;
