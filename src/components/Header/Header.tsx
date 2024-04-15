import React, { useCallback, useState } from "react";

import BurgerIcon from "icons/Burger";

import { useScreenWidth } from "hooks";

import Container from "components/Container";
import Logo from "components/Logo";
import NavBar from "components/NavBar";

import NotAuthorized from "./NotAuthorized";
import Burger from "./Burger";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { isMobile, isDesktop } = useScreenWidth();

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  const onClose = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.container}>
          <Logo />
          {isDesktop && <NavBar />}
          {!isMobile && <NotAuthorized />}
          {!isDesktop && (
            <button className={styles.burger} onClick={toggleMenu}>
              <BurgerIcon />
            </button>
          )}
        </Container>
      </header>
      {isOpenMenu && <Burger onClose={onClose} />}
    </>
  );
};

export default Header;
