import { Dispatch } from "redux";
import {
  CREATE_MAP_POINT,
  DELETE_MAP_POINT,
  CHANGE_GOOGLE_MAP_MARK_TEXT,
} from "../constants";

export function createMapPoint(
  lat: number,
  lng: number,
  newPointText: string,
  pointId: string,
) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_MAP_POINT,
      payload: {
        lat,
        lng,
        newPointText,
        pointId,
        inFocus: false
      }
    });
  };
}

export function changeGoogleMapMarkText(
  pointId: string,
  value: string,
  lat: number,
  lng: number
) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_GOOGLE_MAP_MARK_TEXT,
      payload: {
        pointId,
        value,
        lat,
        lng
      }
    });
  };
}

export function deleteMapPoint(pointId: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_MAP_POINT,
      payload: {
        pointId
      }
    });
  };
}
