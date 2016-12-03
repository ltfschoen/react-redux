import {combineReducers} from 'redux';
import skills from './skillReducer';    // Alias specific Reducer name for use throughout app
import users from './userReducer';

const rootReducer = combineReducers({
  skills: skills,
  users: users
});

export default rootReducer;
