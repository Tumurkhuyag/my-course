import React from "react";
import Style from "./style.module.css";

const Ingredient = (props) => {
  if (props.type === "bread-top")
    return (
      <div className={Style.BreadTop}>
        <div className={Style.Seed}></div>
        <div className={`${Style.Seed} ${Style.Second}`}></div>
        <div className={`${Style.Seed} ${Style.Third}`}></div>
        <div className={`${Style.Seed} ${Style.Fourth}`}></div>
        <div className={`${Style.Seed} ${Style.Fifth}`}></div>
      </div>
    );
  if (props.type === "bread-bottom")
    return (
      <div className={Style.BreadBottom}>
        <div className={Style.Seed}></div>
        <div className={`${Style.Seed} ${Style.Second}`}></div>
        <div className={`${Style.Seed} ${Style.Third}`}></div>
        <div className={`${Style.Seed} ${Style.Fourth}`}></div>
        <div className={`${Style.Seed} ${Style.Fifth}`}></div>
      </div>
    );
  if (props.type === "salad") return <div className={Style.Salad}></div>;
  if (props.type === "meat") return <div className={Style.Meat}></div>;
  if (props.type === "bacon") return <div className={Style.Bacon}></div>;
  if (props.type === "cheese") return <div className={Style.Cheese}></div>;
  if (props.type === "tomato") return <div className={Style.Tomato}></div>;
  return <div>...</div>;
};

export default Ingredient;
