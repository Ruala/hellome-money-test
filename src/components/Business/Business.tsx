import React from "react";

import { useGridItems } from "hooks";

import Container from "components/Container";
import GridWithImage from "components/GridWithImage";

const Business = () => {
  const { businessGridList } = useGridItems();

  return (
    <Container className="pt-12">
      <GridWithImage list={businessGridList} />
    </Container>
  );
};

export default Business;
