import React from "react";

import GraphBlock from "./GraphBlock";
import Title from "../containers/Title";
import { Chart } from "../interfaces";

interface GridItemProps {
  slug: string;
  data: Chart;
  style?: {
    width: string;
    height: string;
  };
}

const GridItem = ({
  data,
  style,
  slug,
}: GridItemProps) => {
  console.warn(style, 'style')
  const width = parseInt(style?.width || '300', 10);
  const height = parseInt(style?.height || '100', 10) - 50;

  return (
    <div className="grid-item" style={style}>
      <div className="grid-item__title">
        <Title title={data.title} type={data.type} slug={slug} />
      </div>
      <div className="grid-item__graph">
        <GraphBlock type={data.type} data={data.data} width={width} height={height} />
      </div>
    </div>
  );
};

export default GridItem;
