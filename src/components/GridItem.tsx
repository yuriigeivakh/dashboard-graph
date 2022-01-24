import React, { ReactNode } from "react";
import { WidthProvider } from "react-grid-layout";

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
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

const GridItem = ({
  data,
  style,
  slug,
  children,
  className,
  width = 400,
  height = 300,
  ...props
}: GridItemProps) => {
  return (
    <div className={`grid-item ${className}`} {...props}>
      <div className="grid-item__title">
        <Title title={data.title} type={data.type} slug={slug} />
      </div>
      <div className="grid-item__graph">
        <GraphBlock type={data.type} data={data.data} width={width} height={height - 50} />
      </div>
      {children}
    </div>
  );
};

export default WidthProvider(GridItem);
