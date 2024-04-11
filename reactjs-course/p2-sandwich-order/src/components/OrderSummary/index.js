import React from "react";
import Style from "./style.module.css";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Cонгосон орцууд:</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <button>Төлбөр төлөх</button>
    </div>
  );
};

export default OrderSummary;
