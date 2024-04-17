import React from "react";

import { useGridItems } from "hooks";

import Container from "components/Container";
import GridWithImage from "components/GridWithImage";

import Hero from "./Hero";

const Home = () => {
  const { homeGridList } = useGridItems();

  return (
    <Container className="pt-12">
      <Hero />
      <GridWithImage list={homeGridList} />
    </Container>
  );
};

export default Home;
