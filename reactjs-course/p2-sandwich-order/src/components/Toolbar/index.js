import React from "react";
import Style from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const Toolbar = () => (
  <header className={Style.Toolbar}>
    <Logo />
    <nav className={Style.HideOnMobile}>
      <Menu />
    </nav>
    <nav className={Style.HideOnDesktop}>
      <div>...</div>
    </nav>
  </header>
);

export default Toolbar;
