import React from "react";
import { Link } from "react-router-dom";

import logoIcon from "icons/logo.png";

import intl from "intl";

import styles from "./Logo.module.scss";

const Logo = () => {
  const { helloMeMoney } = intl;

  return (
    <Link to={"/"} className={styles.logo}>
      <img src={logoIcon} width={60} height={48} alt="Logo" />
      {helloMeMoney}
    </Link>
  );
};

export default Logo;
