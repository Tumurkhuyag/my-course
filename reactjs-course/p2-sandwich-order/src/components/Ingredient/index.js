import React from "react";
import Style from "./style.module.css";

const Ingredient = (props) => {
  if (props.type == "BreadTop")
    return (
      <div className={Style.BreadTop}>
        <div className={Style.Seed}></div>
        <div className={`${Style.Seed} ${Style.Second}`}></div>
        <div className={`${Style.Seed} ${Style.Third}`}></div>
        <div className={`${Style.Seed} ${Style.Fourth}`}></div>
        <div className={`${Style.Seed} ${Style.Fifth}`}></div>
      </div>
    );
  if (props.type == "BreadBottom")
    return (
      <div className={Style.BreadTop}>
        <div className={Style.Seed}></div>
        <div className={`${Style.Seed} ${Style.Second}`}></div>
        <div className={`${Style.Seed} ${Style.Third}`}></div>
        <div className={`${Style.Seed} ${Style.Fourth}`}></div>
        <div className={`${Style.Seed} ${Style.Fifth}`}></div>
      </div>
    );
  if (props.type == "Salad") return <div className={Style.Salad}></div>;
  if (props.type == "Meat") return <div className={Style.Meat}></div>;
  if (props.type == "Bacon") return <div className={Style.Bacon}></div>;
  if (props.type == "Cheese") return <div className={Style.Cheese}></div>;
  if (props.type == "Tomato") return <div className={Style.Tomato}></div>;
  return <div>...</div>;
};

export default Ingredient;
