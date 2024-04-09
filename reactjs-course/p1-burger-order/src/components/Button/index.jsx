import React from "react";
import "./style.css";

export const Button = (props) => {
  const clickHandler = () => alert(props.comment);

  return (
    <input
      className={props.variant}
      type="button"
      onClick={clickHandler}
      value={props.value ? props.value : "Button"}
    />
  );
};
