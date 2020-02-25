import { Dispatch } from "redux";
import { CHANGE_STATE_PROP } from "../constants";

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
