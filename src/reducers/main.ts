import update from "immutability-helper";
import { DECREMENT, INCREMENT, CHANGE_STATE_PROP } from "../constants";

const REDUCER = "MAIN";
const defaultState: { value: number } = {
  value: 0
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: { $set: action.state.value }
      });
    default:
      return state;
  }
};
