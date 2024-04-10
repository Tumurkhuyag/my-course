import React from "react";
import Style from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const controls = {
    meat: "Үхрийн мах",
    cheese: "Бяслаг",
    salad: "Салад",
    bacon: "Гахайн мах",
    tomato: "Улаан лооль",
  };

  return (
    <div className={Style.BuildControls}>
      <p>
        Сендвичний үнэ: <strong>{props.price}</strong>
      </p>

      {Object.keys(controls).map((el) => (
        <BuildControl
          key={el}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          count={props.count}
          type={el}
          ingredient={controls[el]}
        />
      ))}

      <button
        disabled={props.price <= props.initialPrice}
        className={Style.OrderButton}>
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
