import React from "react";
import { connect } from "react-redux";

import GridItem from "../components/GridItem";
import { Chart } from "../interfaces";

interface GridItemContainerProps {
  data: Chart;
  slug: string;
  width?: number
}

const GridItemContainer: React.FC<GridItemContainerProps> = ({
  slug,
  data,
  children,
  ...props
}) => {
  return (
    <GridItem slug={slug} data={data} {...props}>
      {children}
    </GridItem>
  );
};

export default GridItemContainer;
