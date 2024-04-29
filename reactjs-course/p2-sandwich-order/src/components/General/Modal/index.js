import React from "react";
import Style from "./style.module.css";
import Shadow from "../Shadow";

const Modal = (props) => {
  return (
    <div>
      <Shadow onClick={props.closeConfirmModal} show={props.show} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-1vh)",
          opacity: props.show ? "1" : "0",
          zIndex: props.show ? "500" : "-100",
        }}
        className={Style.Modal}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
