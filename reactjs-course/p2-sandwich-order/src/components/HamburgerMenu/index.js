import React from "react";

import Style from "./style.module.css";

const HamburgerMenu = (props) => (
  <div onClick={props.toggleSidebar} className={Style.HamburgerMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HamburgerMenu;
