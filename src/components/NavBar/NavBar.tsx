import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { Styles } from "interfaces/props";

import intl from "intl";

import styles from "./NavBar.module.scss";

const NavBar = ({ className }: Styles) => {
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

  return <ul className={clsx(styles.menu, className)}>{Items}</ul>;
};

export default NavBar;
