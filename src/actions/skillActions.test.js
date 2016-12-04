import expect from 'expect';
import * as skillActions from './skillActions';
import * as types from './actionTypes';

// Mock Store (using redux-mock-store) and HTTP Calls (using nock)
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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_SKILLS_SUCCESS when loading skills', (done) => {
    // Example call to nock.
    // nock('http://example.com/')
    //   .get('/skills')
    //   .reply(200, { body: { skill: [{ id: 'luke-schoen', fullName: 'Luke Schoen'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_SKILLS_SUCCESS, body: {skills: [{id: 'clean-code', skillName: 'Clean Code'}]}}
    ];

    const store = mockStore({skills: []}, expectedActions);
    store.dispatch(skillActions.loadSkills()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_SKILLS_SUCCESS);
      done();
    });
  });
});
