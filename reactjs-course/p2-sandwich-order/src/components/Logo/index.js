import React from "react";
import Style from "./style.module.css";
import LogoImage from "../../assets/images/Logo.png";

const Logo = () => {
  return (
    <div className={Style.Logo}>
      <img alt="Logo" src={LogoImage} />
    </div>
  );
};

export default Logo;
