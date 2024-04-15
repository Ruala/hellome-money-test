import React from "react";

import CloseIcon from "icons/Close";

import { useScreenWidth } from "hooks";

import NavBar from "components/NavBar";

import NotAuthorized from "../NotAuthorized";

import styles from "./Burger.module.scss";

interface Props {
  onClose: () => void;
}

const Burger = ({ onClose }: Props) => {
  const { isMobile } = useScreenWidth();

  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <button className={styles.close} onClick={onClose}>
          <CloseIcon />
        </button>
        <NavBar className={styles.nav} />
        {isMobile && <NotAuthorized />}
      </div>
    </div>
  );
};

export default Burger;
