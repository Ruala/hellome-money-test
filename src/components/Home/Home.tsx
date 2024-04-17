import React from "react";

import { useGridItems } from "hooks";

import Container from "components/Container";
import GridWithImage from "components/GridWithImage";

import Hero from "./Hero";

const Home = () => {
  const { homeGridList } = useGridItems();

  return (
    <>
      <Hero />
      <section>
        <Container>
          <GridWithImage list={homeGridList} />
        </Container>
      </section>
    </>
  );
};

export default Home;
