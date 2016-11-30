import {combineReducers} from 'redux';
import skills from './skillReducer';    // Alias specific Reducer name for use throughout app

const rootReducer = combineReducers({
  skills: skills
});

export default rootReducer;
