import { Dispatch } from "redux";

export const CHANGE_STATE_PROP = "_CHANGE_STATE_PROP";

export function changeStateProp(prop: string, value: number, reducer: string) {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: reducer.toUpperCase() + CHANGE_STATE_PROP,
      state: {
        prop: prop,
        value: value
      }
    });
  };
}
