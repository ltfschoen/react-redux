import * as types from '../actions/actionTypes';

export default function skillReducer(state = [], action) {
  debugger;
  console.log(`reducer:skillReducer - Called Redux Reducer Action [action.type: ${action.type}] and [state: ${state}]`);
  switch(action.type) {
    case types.CREATE_SKILL:
      /** Avoid mutating state by using ES6 spread operator
       *  to return new instance of State array, then create deep copy of
       *  the passed in action.skill and return a brand new State containing
       *  extra value of new action.skill
       */
      return [...state,
        Object.assign({}, action.skill)
      ];
    default:
      // Return existing State
      return state;
  }
}
