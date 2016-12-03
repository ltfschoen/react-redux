import * as types from './actionTypes';
import skillApi from '../api/mockSkillApi';

// Action Creators
export function createSkill(skill) {
  debugger;
  console.log("action creators:createSkill - Called Action CREATE_SKILL");
  return { type: types.CREATE_SKILL, skill: skill };
}

export function loadSkillsSuccess(skills) {
  debugger;
  console.log("action creators:loadSkillsSuccess - Called Action LOAD_SKILLS_SUCCESS");
  return { type: types.LOAD_COURSES_SUCCESS, skill: skill };
}

// Thunk async call to Mock API, wait for Promise resolve then dispatch Action
export function loadSkills() {
  // Thunk Wrapper function accepts dispatcher and are always returned by Thunks
  return function(dispatch) {
    /**
     *  Thunk Body makes call to API that returns a Promise
     *  Handle Promise in anonymous function that expects a list of skills
     *  Dispatch an ActionCreator and pass it the list of skills returned.
     */
    return skillApi.getAllSkills().then((skills) => {
      dispatch(loadSkillsSuccess(skills));
    }).catch(error => {
      throw(error);
    });
  }
}
