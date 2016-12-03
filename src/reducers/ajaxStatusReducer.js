// Note: Handling same Action in multiple Reducers (i.e. Actions with '_SUCCESS' suffix)
import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Note: All Thunks Dispatch a success Action upon completion. Detect when Actions complete using '_SUCCESS' suffix
function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  // Increment State of ajaxCallsInProgress counter by 1 when any AJAX call starts
  // (from any Reducer as each handles slice of State)
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1; // Completed AJAX call
  }
  return state;
}
