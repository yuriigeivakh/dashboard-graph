import React from "react";
import { connect } from "react-redux";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";

import GridItemContainer from "../containers/GridItemContainer";

import { DataChart } from "../interfaces";
import { setBreakPoint } from "../actions";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardProps {
  data: DataChart;
  layouts: Layouts;
  setBreakPoint: (breakpoint: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ data, layouts, setBreakPoint }) => {
  const handleBreakPointChange = (breakpoint) => {
    setBreakPoint(breakpoint);
  };

  return (
    <div className="dashboard">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onBreakpointChange={handleBreakPointChange}
        isDraggable
        isResizable
        isDroppable
        measureBeforeMount
        draggableHandle=".grid-item__title"
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {Object.keys(data).map((item, index) => (
          <GridItemContainer data={data[item]} key={index} slug={item}/>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

const mapStateToProps = (
  state,
) => {
  return {
    data: state.data,
    layouts: { ...state.layouts },
    setBreakPoint,
  };
};

export default connect<DashboardProps, {}>(mapStateToProps as any, null, null, { pure: false })(Dashboard);
