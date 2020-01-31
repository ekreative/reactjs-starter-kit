import { Dispatch } from "redux";
import {SPINNER_START_LOADING, SPINNER_END_LOADING} from "../constants"

export function showLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SPINNER_START_LOADING
    });
  };
}

export function hideLoading() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SPINNER_END_LOADING
    });
  };
}
