export default function skillReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_SKILL':
      console.log("reducer:skillReducer - Called Redux Reducer Action CREATE_SKILL");
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
