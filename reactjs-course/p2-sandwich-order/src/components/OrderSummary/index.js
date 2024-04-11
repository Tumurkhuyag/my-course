import React from "react";
import Style from "./style.module.css";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Cонгосон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            <div>{props.ingredientNames[el]} :</div>
            <div className={Style.Amount}>{props.ingredients[el]} ш</div>
          </li>
        ))}
      </ul>
      <p>
        Захиалгын дүн: <strong>{props.price}₮</strong>
      </p>
      <button>Төлбөр төлөх</button>
    </div>
  );
};

export default OrderSummary;
