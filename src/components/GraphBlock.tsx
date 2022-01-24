import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  RadialBar,
  RadialBarChart
} from "recharts";
import { defaultColor, strokeColor } from "../constants/colors";
import { ChartTypes, DataChart } from "../interfaces";

interface GraphBlockProps {
  type: string;
  data: DataChart[];
  width: number;
  height: number;
}

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px"
};

const GraphBlock: React.FC<GraphBlockProps> = ({
  type,
  data,
  width,
  height
}) => {
  switch (type) {
    case ChartTypes.Pie:
      return (
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="time"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill={defaultColor}
            stroke={strokeColor}
            isAnimationActive={true}
            startAngle={360}
            endAngle={0}
          />
          <Tooltip />
        </PieChart>
      );
    case ChartTypes.PieFilled:
      return (
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="time"
            cx="50%"
            cy="50%"
            fill={defaultColor}
            isAnimationActive={true}
            strokeWidth={0}
            startAngle={360}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
          />
          <Tooltip />
        </PieChart>
      );
    case ChartTypes.Line:
      return (
        <LineChart
          width={width}
          height={height}
          data={data}
          margin={{ left: 10, right: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="time" />
          <YAxis dataKey="value" mirror />
          <Line
            type="monotone"
            dataKey="value"
            stroke={defaultColor}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      );
    case ChartTypes.Bar:
      return (
        <BarChart
          width={width}
          height={height}
          data={data}
          margin={{ left: 10, right: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="time" />
          <YAxis dataKey="value" mirror />
          <Bar dataKey="value" fill={defaultColor} isAnimationActive={false} />
        </BarChart>
      );
    case ChartTypes.Area:
      return (
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={{ left: 10, right: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="time" />
          <YAxis dataKey="value" mirror />
          <Area
            dataKey="value"
            fill={defaultColor}
            stroke={defaultColor}
            isAnimationActive={false}
          />
        </AreaChart>
      );
    case ChartTypes.Radial:
      return (
        <RadialBarChart
          width={window.innerWidth}
          height={300}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#000" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      );
    default:
      return null;
  }
};

export default GraphBlock;
