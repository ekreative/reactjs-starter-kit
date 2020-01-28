import update from "immutability-helper";
import { CHANGE_STATE_PROP } from "../actions";
import { DECREMENT, INCREMENT, SPINNER_IS_LOADING } from "../actions/main";

const REDUCER = "MAIN";
const defaultState: { value: number; isLoading: boolean } = {
  value: 0,
  isLoading: false
};

export default (state = defaultState, action: any) => {
  console.log(111, state, action)
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
    case SPINNER_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: { $set: action.state.value }
      });
    default:
      return state;
  }
};
