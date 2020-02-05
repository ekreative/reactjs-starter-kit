import { Dispatch } from "redux";
import { CREATE_MAP_POINT, DELETE_MAP_POINT } from "../constants";

export function createMapPoint(lat: number, lng: number, newPointText: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_MAP_POINT,
      payload: {
        lat,
        lng,
        newPointText
      }
    });
  };
}

export function changeGoogleMapMarkText(lat: number, lng: number, newPointText: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_MAP_POINT,
      payload: {
        lat,
        lng,
        newPointText
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
