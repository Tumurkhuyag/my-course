import React from "react";
import Style from "./style.module.css";

const Modal = (props) => {
  return <div className={Style.Modal}>{props.children}</div>;
};

export default Modal;
