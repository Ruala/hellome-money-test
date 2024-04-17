import React from "react";

import { formatMessageWithParams } from "helpers/intl";

import cryptoExchangeIcon from "icons/cryptoExchange.png";

import intl from "intl";

import Container from "components/Container";
import { SmallBtn, LargeBtn } from "components/Button";

import styles from "./Hero.module.scss";

const Hero = () => {
  const { homeHeroText, helloMeMoney, cryptoExchange, getStarted } = intl;

  return (
    <section className="pt-[60px]">
      <Container>
        <div className={styles.hero}>
          <SmallBtn className={styles.exchange}>{cryptoExchange}</SmallBtn>
          <h1 className={styles.title}>
            {formatMessageWithParams(homeHeroText, {
              helloMeMoney: (
                <span key="helloMeMoney" className={styles.text}>
                  {helloMeMoney}
                </span>
              ),
            })}
          </h1>
          <LargeBtn className={styles.getStarted}>
            {getStarted}
            <img
              src={cryptoExchangeIcon}
              width={60}
              height={58}
              alt="Crypto Exchange"
            />
          </LargeBtn>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
