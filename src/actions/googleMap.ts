import { Dispatch } from "redux";
import { CREATE_MAP_POINT, DELETE_MAP_POINT, CHANGE_GOOGLE_MAP_MARK_TEXT } from "../constants";

export function createMapPoint(
  lat: number,
  lng: number,
  newPointText: string,
  pointId: string
) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_MAP_POINT,
      payload: {
        lat,
        lng,
        newPointText,
        pointId
      }
    });
  };
}

export function changeGoogleMapMarkText(pointId: string, value: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_GOOGLE_MAP_MARK_TEXT,
      payload: {
        pointId,
        value
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
