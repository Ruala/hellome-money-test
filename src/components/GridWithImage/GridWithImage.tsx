import React, { useMemo } from "react";
import clsx from "clsx";

import { IGridItem } from "interfaces/gridItem";

import styles from "./GridWithImage.module.scss";

interface Props {
  list: IGridItem[];
}

const GridWithImage = ({ list }: Props) => {
  const Items = useMemo(
    () =>
      list.map(({ title, subtext, image, icon: Icon }, index) => (
        <div key={title} className={styles.box}>
          <div className={clsx(index % 2 && "order-1")}>
            <h2 className={styles.title}>
              {title} <Icon />
            </h2>
            <p className={styles.text}>{subtext}</p>
          </div>
          <div className={styles.imageBox}>
            {image && (
              <img
                className={styles.image}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            )}
          </div>
        </div>
      )),
    [list],
  );

  return <div className={styles.gridList}>{Items}</div>;
};

export default GridWithImage;
