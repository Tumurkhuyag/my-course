import React from "react";
import Style from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return (
    <div className={Style.BuildControls}>
      <p>
        Сендвичний үнэ: <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          count={props.count}
          type={el}
          ingredient={props.ingredientNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.price <= props.initialPrice}
        className={Style.OrderButton}>
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
