import React from "react";
import Style from "./style.module.css";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = (props) => {
  let classes = [Style.SideBar, Style.Close];

  if (props.showSidebar) {
    classes = [Style.SideBar, Style.Open];
  }

  return (
    <div>
      <Shadow onClick={props.toggleSidebar} show={props.showSidebar} />
      <div className={classes.join(" ")}>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
