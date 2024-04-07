import React from "react";
import "./style.css";

export const Button = (props) => {
  return (
    <input className={props.variant} type="button" value={props.variant} />
  );
};
