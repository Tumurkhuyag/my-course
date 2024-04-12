import React from "react";
import Style from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div>
      <ul className={Style.Menu}>
        <MenuItem active link="/">
          Захиалга
        </MenuItem>
        <MenuItem link="/login">Нэвтрэх</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
