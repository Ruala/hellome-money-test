import React from "react";

import intl from "intl";

import styles from "./NotAuthorized.module.scss";

const NotAuthorized = () => {
  const { logIn, signUp } = intl;

  return (
    <div className={styles.root}>
      <button type="button" className={styles.logIn}>
        {logIn}
      </button>
      <button type="button" className={styles.signUp}>
        {signUp}
      </button>
    </div>
  );
};

export default NotAuthorized;
