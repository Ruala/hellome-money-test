import React from "react";

import Container from "components/Container";
import Logo from "components/Logo";
import NavBar from "components/NavBar";

import NotAuthorized from "./NotAuthorized";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <NavBar />
        <NotAuthorized />
      </Container>
    </header>
  );
};

export default Header;
