import React from "react";
import { WidthProvider } from "react-grid-layout";

import GraphBlock from "./GraphBlock";
import { DataChart } from "../interfaces";

interface DetailGraphBlockProps {
  type: string;
  data: DataChart[];
  width?: number;
}

const DetailGraphBlock: React.FC<DetailGraphBlockProps> = ({
  type,
  data,
  width = 400
}) => {
  return (
    <div className="detail__graph">
      <GraphBlock type={type} data={data} width={width - 50} height={450} />
    </div>
  );
};

export default WidthProvider(DetailGraphBlock);
