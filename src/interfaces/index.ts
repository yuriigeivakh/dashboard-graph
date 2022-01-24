export interface DataChart {
  title: string;
  type: string;
  [key: string]: any;
}

export interface Chart {
  data: DataChart[];
  title: string;
  type: string;
  slug: string;
}

export interface GraphTypes {
  label: string;
  value: string;
}

export enum ChartTypes {
  Line = "line",
  PieFilled = "pieFilled",
  Pie = "pie",
  Area = "area",
  Bar = "bar",
  Radial = "radial",
  New = 'new'
}
