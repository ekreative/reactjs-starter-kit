import { SHOW_LOADING, HIDE_LOADING } from "../constants";

const defaultState: { isLoading: boolean | null } = {
  isLoading: null
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
