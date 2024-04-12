import React from "react";
import Style from "./style.module.css";

const MenuItem = (props) => {
  return (
    <li className={Style.MenuItem}>
      <a className={props.active ? Style.active : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default MenuItem;
