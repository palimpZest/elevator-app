import {
  GET_ALL_FLOORS_SUCCESS
} from "../actions/calls";

export function floors(state = { floors: [] }, action) {
  switch (action.type) {
    case GET_ALL_FLOORS_SUCCESS:
      return { ...state, floors: action.floor };
    default:
      return state;
  }
}
