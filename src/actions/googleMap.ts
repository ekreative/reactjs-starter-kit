import { Dispatch } from "redux";
import { CREATE_MAP_POINT, DELETE_MAP_POINT } from "../constants";

export function createMapPoint(lat: number, lng: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_MAP_POINT,
      payload: {
        lat,
        lng
      }
    });
  };
}

export function deleteMapPoint() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_MAP_POINT
    });
  };
}
