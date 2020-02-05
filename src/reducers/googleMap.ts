import { CREATE_MAP_POINT, DELETE_MAP_POINT } from "../constants";
import update from "immutability-helper";

const defaultMapState: any = [];

export default (mapState = defaultMapState, action: any) => {
  switch (action.type) {
    case CREATE_MAP_POINT:
      console.log(action.payload)
      return update(mapState, { $push: [action.payload] });
    case DELETE_MAP_POINT:
      return {
        ...mapState
      };

    default:
      return mapState;
  }
};
