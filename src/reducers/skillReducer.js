export default function skillReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_SKILL':
      // WRONG - do not mutate state
      state.push(action.skill);
      return state;
    default:
      return state;
  }
}
