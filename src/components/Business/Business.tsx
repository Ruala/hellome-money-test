import React from "react";

import { useGridItems } from "hooks";

import Container from "components/Container";
import GridWithImage from "components/GridWithImage";

import Hero from "./Hero";

import styles from "./Business.module.scss";

const Business = () => {
  const { businessGridList } = useGridItems();

  return (
    <>
      <Hero />
      <section className={styles.section}>
        <Container>
          <GridWithImage list={businessGridList} />
        </Container>
      </section>
    </>
  );
};

export default Business;
