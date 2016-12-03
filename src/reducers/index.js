import {combineReducers} from 'redux';
import skills from './skillReducer';    // Alias specific Reducer name for use throughout app
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  skills: skills,
  users: users,
  ajaxCallsInProgress, ajaxCallsInProgress
});

export default rootReducer;
