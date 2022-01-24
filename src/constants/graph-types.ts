import { ChartTypes, GraphTypes } from "../interfaces";

const types: GraphTypes[] = [
  {
    label: "Line",
    value: ChartTypes.Line
  },
  {
    label: "Pie",
    value: ChartTypes.Pie
  },
  {
    label: "Pie Filled",
    value: ChartTypes.PieFilled
  },
  {
    label: "Area",
    value: ChartTypes.Area
  },
  {
    label: "Bar",
    value: ChartTypes.Bar
  }
];

export default types;
