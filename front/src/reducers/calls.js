import { ADD_CALL_SUCCESS, GET_ALL_CALLS_SUCCESS } from '../actions/calls';

export function calls(state = { calls: [] }, action) {
  switch (action.type) {
    case GET_ALL_CALLS_SUCCESS:
      return { ...state, calls: action.push };
    case ADD_CALL_SUCCESS:
      return { ...state, posts: state.calls.concat(action.push) };
    default:
      return state;
  }
}
