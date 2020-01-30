import { Dispatch } from "redux";

export const SPINNER_IS_LOADING = "SPINNER_IS_LOADING";

export function spinnerIsLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SPINNER_IS_LOADING
    });
  };
}
