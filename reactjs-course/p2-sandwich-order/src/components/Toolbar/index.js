import React from "react";
import Style from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";

const Toolbar = (props) => (
  <header className={Style.Toolbar}>
    <Logo />

    <nav className={Style.HideOnMobile}>
      <Menu />
    </nav>
    <nav className={Style.HideOnDesktop}>
      <HamburgerMenu toggleSidebar={props.toggleSidebar} />
    </nav>
  </header>
);

export default Toolbar;
