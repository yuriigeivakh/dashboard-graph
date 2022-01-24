import { Dispatch } from "redux";

interface Type {
  key: string;
  value: string;
  item: string;
}

export const setType = ({ key, value, item }: Type) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_TYPE",
    payload: { key, value, item }
  });
};

export const setTitle = ({ key, value, item }: Type) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_TITLE",
    payload: { key, value, item }
  });
};

export const setData = ({ key, value, item }: Type) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_DATA",
    payload: { key, value, item }
  });
};

export const setLayout = (layout: string, root: number) => (
  dispatch,
  getState
) => {
  dispatch({
    type: "SET_LAYOUT",
    payload: { layout, root, breakpoint: getState().breakpoint }
  });
};

export const setBreakPoint = (breakpoint: number) => ({
  type: "SET_BREAKPOINT",
  payload: breakpoint
});
