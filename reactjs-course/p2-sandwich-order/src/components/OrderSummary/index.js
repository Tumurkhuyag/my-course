import React from "react";
import Style from "./style.module.css";
import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Cонгосон орцууд</p>
      <ul className={Style.List}>
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
      <div className={Style.Buttons}>
        <Button clicked={props.onCancel} btnType="Ghost" text="Татгалзах" />
        <Button
          clicked={props.onContinue}
          btnType="Primary"
          text="Үргэлжүүлэх"
        />
      </div>
    </div>
  );
};

export default OrderSummary;
