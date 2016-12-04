import expect from 'expect';
import * as skillActions from './skillActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test sync action
describe('Skill Actions', () => {
  describe('createSkillSuccess', () => {
    it('should create a CREATE_SKILL_SUCCESS action', () => {
      // arrange
      const skill = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_SKILL_SUCCESS,
        skill: skill
      };

      // act
      const action = skillActions.createSkillSuccess(skill);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
