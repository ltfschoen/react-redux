import expect from 'expect';
import skillReducer from './skillReducer';
import * as actions from '../actions/skillActions';

describe('Skill Reducer', () => {
  it('should add skill when passed CREATE_SKILL_SUCCESS', () => {
    // arrange
    const initialState = [
      {skillName: 'A'},
      {skillName: 'B'}
    ];

    const newSkill = {skillName: 'C'};

    const action = actions.createSkillSuccess(newSkill);

    //act
    const newState = skillReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].skillName).toEqual('A');
    expect(newState[1].skillName).toEqual('B');
    expect(newState[2].skillName).toEqual('C');
  });

  it('should update skill when passed UPDATE_SKILL_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', skillName: 'A'},
      {id: 'B', skillName: 'B'},
      {id: 'C', skillName: 'C'}
    ];

    const skill = {id: 'B', skillName: 'New Skill Name'};
    const action = actions.updateSkillSuccess(skill);

    // act
    const newState = skillReducer(initialState, action);
    const updatedSkill = newState.find(a => a.id == skill.id);
    const untouchedSkill = newState.find(a => a.id == 'A');

    // assert
    expect(updatedSkill.skillName).toEqual('New Skill Name');
    expect(untouchedSkill.skillName).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
