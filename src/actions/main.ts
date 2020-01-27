import { Dispatch } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SPINNER_IS_LOADING = "SPINNER_IS_LOADING";

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

export function spinnerIsLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SPINNER_IS_LOADING
    });
  };
}
