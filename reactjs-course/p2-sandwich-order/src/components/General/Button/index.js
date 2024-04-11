import React from "react";
import Style from "./style.module.css";

const Button = (props) => {
  return (
    <div
      onClick={props.clicked}
      className={`${Style.Button} ${Style[props.btnType]}`}>
      {props.text}
    </div>
  );
};

export default Button;
