import * as types from './actionTypes';
import skillApi from '../api/mockSkillApi';

// Action Creators
export function loadSkillsSuccess(skills) {
  debugger;
  console.log("action creators:loadSkillsSuccess - Called Action LOAD_SKILLS_SUCCESS");
  return { type: types.LOAD_SKILLS_SUCCESS, skills: skills };
}

export function createSkillSuccess(skill) {
  console.log(`action creators:createSkillsSuccess - Called Action CREATE_SKILLS_SUCCESS [skill: ${JSON.stringify(skill)}]`);
  return { type: types.CREATE_SKILL_SUCCESS, skill };
}

export function updateSkillSuccess(skill) {
  console.log(`action creators:updateSkillsSuccess - Called Action UPDATE_SKILLS_SUCCESS [skill: ${JSON.stringify(skill)}]`);
  return { type: types.UPDATE_SKILL_SUCCESS, skill };
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
  };
}

export function saveSkill(skill) {
  console.log(`action creators:saveSkill - Called saveSkill [skill: ${JSON.stringify(skill)}]`);
  return function(dispatch, getState) {
    return skillApi.saveSkill(skill).then(savedSkill => {
      console.log(`action creators:saveSkill - Response from API [savedSkill: ${JSON.stringify(savedSkill)}]`);
      savedSkill.id ? dispatch(updateSkillSuccess(savedSkill)) : dispatch(createSkillSuccess(savedSkill));
    }).catch(error => {
      throw(error);
    });
  }
}
