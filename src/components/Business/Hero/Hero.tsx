import React, { useMemo } from "react";

import Star from "icons/Star";

import intl from "intl";

import Container from "components/Container";
import { SmallBtn, LargeBtn } from "components/Button";

import styles from "./Hero.module.scss";

const Hero = () => {
  const {
    businessHeroTitle,
    businessHeroText,
    businessHeroImages,
    sME,
    getMulticurrencyAccount,
    contactUs,
  } = intl;

  const imageList = useMemo(
    () =>
      businessHeroImages.map(({ src, width, height, alt }) => (
        <img
          className={styles.image}
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      )),
    [businessHeroImages],
  );

  return (
    <section className={styles.hero}>
      <Container>
        <SmallBtn className={styles.smallButton}>{sME}</SmallBtn>
        <div className={styles.gridBox}>
          <div>
            <h1 className={styles.title}>{businessHeroTitle}</h1>
            <p className={styles.text}>{businessHeroText}</p>
            <div className={styles.gridButton}>
              <LargeBtn className={styles.getAccount}>
                {getMulticurrencyAccount}
                <Star className={styles.star} />
              </LargeBtn>
              <LargeBtn className={styles.contactUs} outlined>
                {contactUs}
              </LargeBtn>
            </div>
          </div>
          <div className={styles.gridImageBox}>{imageList}</div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
