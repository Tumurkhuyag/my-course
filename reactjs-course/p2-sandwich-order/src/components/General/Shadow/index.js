import React from "react";
import Style from "./style.module.css";

const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.onClick} className={Style.Shadow}></div>
  ) : null;
};

export default Shadow;
