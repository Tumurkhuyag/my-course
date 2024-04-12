import React from "react";
import Style from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const Toolbar = () => (
  <header className={Style.Toolbar}>
    <div>...</div>
    <Logo />
    <nav>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
