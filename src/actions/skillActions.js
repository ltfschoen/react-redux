import * as types from './actionTypes';

export function createSkill(skill) {
  debugger;
  console.log("action creators:createSkill - Called Action CREATE_SKILL");
  return { type: types.CREATE_SKILL, skill: skill };
}
