import { Dispatch } from "redux";
import { INCREMENT, DECREMENT } from "../constants";

export function increment() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: INCREMENT
    });
  };
}

export function decrement() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DECREMENT
    });
  };
}
