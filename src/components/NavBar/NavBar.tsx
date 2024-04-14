import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import intl from "intl";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { menu } = intl;

  const Items = useMemo(
    () =>
      menu.map(({ text, href }) => (
        <li key={text}>
          <NavLink to={href} className={styles.link}>
            {text}
          </NavLink>
        </li>
      )),
    [menu],
  );

  return <ul className={styles.menu}>{Items}</ul>;
};

export default NavBar;
