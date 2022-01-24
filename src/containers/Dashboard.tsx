import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";

import GridItemContainer from "../containers/GridItemContainer";

import { DataChart } from "../interfaces";
import { setBreakPoint } from "../actions";

const ResponsiveGridLayout = WidthProvider(Responsive);

const mapStateToProps = (
  state,
) => {
  return {
    data: state.data,
    layouts: { ...state.layouts },
  };
};

const mapDispatchToProps = (dispatch) => ({
  setBreakPoint: (breakpoint: number) => dispatch(setBreakPoint(breakpoint))
});

const connector = connect(mapStateToProps, mapDispatchToProps)

type DashboardProps = ConnectedProps<typeof connector>

const Dashboard: React.FC<DashboardProps> = ({ data, layouts, setBreakPoint }) => {
  const handleBreakPointChange = (breakpoint) => {
    console.warn('handle')
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
        // isRearrangeable
        measureBeforeMount
        autoSize
        draggableHandle=".grid-item__title"
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {Object.keys(data).map((item, index) => (
          <GridItemContainer data={data[item]} key={index} slug={item} />
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default connector(Dashboard);
