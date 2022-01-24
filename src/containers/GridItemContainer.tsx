import React from "react";
import { connect } from "react-redux";

import GridItem from "../components/GridItem";
import { Chart } from "../interfaces";

interface GridItemContainerProps {
  data: Chart;
  slug: string;
  style?: {
    width: string;
    height: string;
  }
}

const GridItemContainer: React.FC<GridItemContainerProps> = ({
  slug,
  data,
  style,
}) => {
  return (
    <GridItem data={data} slug={slug} style={style}/>
  );
};

export default GridItemContainer;
