import React, { ReactNode } from "react";
import clsx from "clsx";

import { Styles } from "interfaces/props";

import styles from "./Large.module.scss";

interface Props extends Styles {
  children: ReactNode;
  outlined?: boolean;
}

const Large = ({ children, className, outlined }: Props) => {
  return (
    <button
      type="button"
      className={clsx(styles.button, outlined && styles.outlined, className)}
    >
      {children}
    </button>
  );
};

export default Large;
