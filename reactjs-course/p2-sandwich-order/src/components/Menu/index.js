import React from "react";
import Style from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div>
      <ul className={Style.Menu}>
        <MenuItem active link="/">
          Сендвич
        </MenuItem>
        <MenuItem link="/checkout">Төлбөр</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
