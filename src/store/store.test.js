import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as skillActions from '../actions/skillActions';

describe('Store', function() {
  it('Should handle creating skills', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const skill = {
      skillName: "Clean Code"
    };

    // act
    const action = skillActions.createSkillSuccess(skill); // Action Creator
    store.dispatch(action); // Dispatch the Action

    // assert
    const actual = store.getState().skills[0];
    const expected = {
      skillName: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
