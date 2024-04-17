import React from "react";

import { useGridItems } from "hooks";

import Container from "components/Container";
import GridWithImage from "components/GridWithImage";

import styles from "./Business.module.scss";

const Business = () => {
  const { businessGridList } = useGridItems();

  return (
    <section className={styles.section}>
      <Container>
        <GridWithImage list={businessGridList} />
      </Container>
    </section>
  );
};

export default Business;
