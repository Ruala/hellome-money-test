import React, { ReactNode } from "react";
import clsx from "clsx";

import { Styles } from "interfaces/props";

import styles from "./Container.module.scss";

interface Props extends Styles {
  children: ReactNode;
}

const Container = ({ children, className }: Props) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
