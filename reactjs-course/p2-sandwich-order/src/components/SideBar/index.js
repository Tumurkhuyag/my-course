import React from "react";
import Style from "./style.module.css";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = (props) => {
  return (
    <div>
      <Shadow show={props.showSidebar} />
      <div className={Style.SideBar}>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
