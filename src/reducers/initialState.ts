import { orangeColor } from "../constants/colors";
import { ChartTypes } from "../interfaces";
import layoutConfig from "../config/layoutConfig";

const initialState = {
  data: {
    revenueToday: {
      type: ChartTypes.Line,
      title: "Revenue today",
      data: [
        {
          time: "00:00",
          value: 500
        },
        {
          time: "04:00",
          value: 300
        },
        {
          time: "08:00",
          value: 450
        },
        {
          time: "12:00",
          value: 620
        },
        {
          time: "16:00",
          value: 540
        },
        {
          time: "20:00",
          value: 700
        },
      ]
    },
    revenueWeek: {
      type: ChartTypes.Bar,
      title: "Revenue past 7 days",
      data: [
        {
          time: "January 19",
          value: 2584
        },
        {
          time: "January 20",
          value: 4601
        },
        {
          time: "January 21",
          value: 2051
        },
        {
          time: "January 22",
          value: 4797
        },
        {
          time: "January 23",
          value: 1731
        },
        {
          time: "January 24",
          value: 2966
        },
        {
          time: "January 25",
          value: 3129
        },
        {
          time: "January 26",
          value: 5200
        }
      ]
    },
    profitForWeek: {
      type: ChartTypes.Bar,
      title: "Profit over time of 7 days",
      data: [
        {
          time: "January 19",
          value: 20100,
          fill: orangeColor
        },
        {
          time: "January 20",
          value: 22000,
          fill: orangeColor
        },
        {
          time: "January 21",
          value: 19000,
          fill: orangeColor
        },
        {
          time: "January 22",
          value: 35000,
          fill: orangeColor
        },
        {
          time: "January 23",
          value: 42000,
          fill: orangeColor
        },
        {
          time: "January 24",
          value: 37000,
          fill: orangeColor
        },
        {
          time: "January 25",
          value: 52000,
          fill: orangeColor
        },
        {
          time: "January 26",
          value: 70000,
          fill: orangeColor
        }
      ]
    },
    topSellers: {
      type: ChartTypes.Pie,
      title: "Top 5 sellers",
      data: [
        {
          time: "Cryptonic",
          value: 4135,
          fill: "#F2E9E4"
        },
        {
          time: "Ciphere",
          value: 2915,
          fill: "#C9ADA7"
        },
        {
          time: "Keybatch",
          value: 1900,
          fill: "#9A8C98"
        },
        {
          time: "Secrucial",
          value: 4718,
          fill: "#4A4E69"
        },
        {
          time: "Numerkle",
          value: 2424,
          fill: "#22223B"
        }
      ]
    },
    topAds: {
      type: ChartTypes.PieFilled,
      title: "Top 5 ads",
      data: [
        {
          time: "Goodoose",
          value: 20100,
          fill: "#50646f"
        },
        {
          time: "Beline",
          value: 35000,
          fill: "#477f80"
        },
        {
          time: "Visemise",
          value: 18000,
          fill: "#c1e9e9"
        },
        {
          time: "Affint",
          value: 27000,
          fill: "#70c0b0"
        },
        {
          time: "Onessent",
          value: 52000,
          fill: "#5caaaa"
        }
      ]
    },
    age: {
      type: ChartTypes.Radial,
      title: "By ages",
      data: [
        {
          name: "18-24",
          uv: 31.47,
          pv: 2400,
          fill: "#8884d8"
        },
        {
          name: "25-29",
          uv: 26.69,
          pv: 4567,
          fill: "#83a6ed"
        },
        {
          name: "30-34",
          uv: 15.69,
          pv: 1398,
          fill: "#8dd1e1"
        },
        {
          name: "35-39",
          uv: 8.22,
          pv: 9800,
          fill: "#82ca9d"
        },
        {
          name: "40-49",
          uv: 8.63,
          pv: 3908,
          fill: "#a4de6c"
        },
        {
          name: "50+",
          uv: 2.63,
          pv: 4800,
          fill: "#d0ed57"
        },
        {
          name: "unknow",
          uv: 6.67,
          pv: 4800,
          fill: "#ffc658"
        }
      ]
    },
    addNewChart: {
      type: "addNewChart",
      title: "Add new chart",
      data: []
    }
  },
  layouts: layoutConfig,
  breakpoint: "lg"
};

export default initialState;
