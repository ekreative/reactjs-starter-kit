import { SPINNER_START_LOADING, SPINNER_END_LOADING } from "../constants";

const defaultState: { isLoading: boolean | null } = {
  isLoading: null
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case SPINNER_START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SPINNER_END_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
