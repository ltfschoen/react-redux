import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function skillReducer(state = initialState.skills, action) {
  debugger;
  console.log(`reducer:skillReducer - Called Redux Reducer Action [action.type: ${action.type}] and [state: ${JSON.stringify(state)}]`);
  console.log(`reducer:skillReducer - [action.skill: ${JSON.stringify(action.skill)}]`);

  switch(action.type) {
    case types.LOAD_SKILLS_SUCCESS:
      return action.skills; // Replace State with response from call to Mock API
    case types.CREATE_SKILL_SUCCESS:
      /** Avoid mutating state by using ES6 spread operator
       *  to return new instance of State array, then create deep copy of
       *  the passed in action.skill and return a brand new State containing
       *  extra value of new action.skill
       */
      return [...state,
        Object.assign({}, action.skill)
      ];
    case types.UPDATE_SKILL_SUCCESS:
      return [...state.filter((skill) => skill.id !== action.skill.id),
        Object.assign({}, action.skill)
      ];
    default:
      // Return existing State
      return state;
  }
}
