import { Dispatch } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";


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
