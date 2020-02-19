import {
  CHANGE_GOOGLE_MAP_MARK_TEXT,
  CREATE_MAP_POINT,
  DELETE_MAP_POINT,
} from "../constants";
import update from "immutability-helper";

const defaultMapState: any = [];
let index = null;

export default (mapState = defaultMapState, action: any) => {
  switch (action.type) {
    case CREATE_MAP_POINT:
      return update(mapState, { $push: [action.payload] });

    case CHANGE_GOOGLE_MAP_MARK_TEXT:
      index = mapState.findIndex((element: { pointId: any }) => {
        return element.pointId === action.payload.pointId;
      });
      let newTitle = action.payload.value;
      let newLat = action.payload.lat;
      let newLng = action.payload.lng;
      if (index >= 0) {
        return update(mapState, {
          [index]: {
            newPointText: { $set: newTitle },
            lat: { $set: newLat },
            lng: { $set: newLng }
          }
        });
      }
      return null;

    case DELETE_MAP_POINT:
      index = mapState.findIndex((element: { pointId: any }) => {
        return element.pointId === action.payload.pointId;
      });
      if (index >= 0) {
        return update(mapState, {
          $splice: [[index, 1]]
        });
      }
      return null;

    default:
      return mapState;
  }
};
