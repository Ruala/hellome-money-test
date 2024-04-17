import React, { ReactNode } from "react";
import clsx from "clsx";

import { Styles } from "interfaces/props";

import styles from "./Small.module.scss";

interface Props extends Styles {
  children: ReactNode;
}

const Small = ({ children, className }: Props) => {
  return (
    <button type="button" className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};

export default Small;
