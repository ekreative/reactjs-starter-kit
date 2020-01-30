import { Dispatch } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SPINNER_START_LOADING = "SPINNER_START_LOADING";
export const SPINNER_END_LOADING = "SPINNER_END_LOADING";

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

export function spinnerStartLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SPINNER_START_LOADING
    });
  };
}

export function spinnerEndLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SPINNER_END_LOADING
    });
  };
}
