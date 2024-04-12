import React from "react";
import Ingredient from "../Ingredient";
import Style from "./style.module.css";

const Sandwich = (props) => {
  let content = [];
  // {"salad": 2, "cheese": 2, "meat": 2, "bacon": 1}
  const items = Object.entries(props.ingredients);
  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<Ingredient key={`${el[0]}${i + 1}`} type={el[0]} />);
    }
  });

  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу!</p>;
  return (
    <div className={Style.Sandwitch}>
      <Ingredient type="bread-top" />
      {content}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Sandwich;
