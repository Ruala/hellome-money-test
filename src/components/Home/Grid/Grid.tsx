import React, { useMemo } from "react";
import clsx from "clsx";

import Trade from "icons/trade";
import Security from "icons/security";

import intl from "intl";

import styles from "./Grid.module.scss";

const Grid = () => {
  const { homeGrid } = intl;

  const Items = useMemo(
    () =>
      homeGrid.map(({ image, title, subtext }, index) => (
        <div key={title} className={styles.box}>
          <div className={clsx(index % 2 && "order-1")}>
            <h2 className={styles.title}>
              {title} {index % 2 ? <Trade /> : <Security />}
            </h2>
            <p className={styles.text}>{subtext}</p>
          </div>
          <div className={styles.imageBox}>
            <img
              className={styles.image}
              src={image}
              width={616}
              height={337}
              alt={title}
            />
          </div>
        </div>
      )),
    [homeGrid],
  );

  return <div className={styles.gridList}>{Items}</div>;
};

export default Grid;
