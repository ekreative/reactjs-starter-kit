import { Dispatch } from "redux";
import { SHOW_LOADING, HIDE_LOADING } from "../constants";

export function showLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SHOW_LOADING
    });
  };
}

export function hideLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: HIDE_LOADING
    });
  };
}
