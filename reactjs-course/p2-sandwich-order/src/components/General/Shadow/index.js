import React from "react";
import Style from "./style.module.css";

const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.closeConfirmModal} className={Style.Shadow}></div>
  ) : null;
};

export default Shadow;
