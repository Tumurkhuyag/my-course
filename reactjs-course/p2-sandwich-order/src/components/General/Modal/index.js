import React from "react";
import Style from "./style.module.css";

const Modal = (props) => {
  return (
    <div
      onClick={props.closeConfirmModal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-1vh)",
        opacity: props.show ? "1" : "0",
        zIndex: props.show ? "500" : "-100",
      }}
      className={Style.Modal}>
      {console.log(props.show)}
      {props.children}
    </div>
  );
};

export default Modal;
