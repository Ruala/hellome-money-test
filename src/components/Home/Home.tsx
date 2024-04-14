import React from "react";

import Container from "components/Container";

import Hero from "./Hero";
import Grid from "./Grid";

const Home = () => {
  return (
    <Container className="pt-12">
      <Hero />
      <Grid />
    </Container>
  );
};

export default Home;
