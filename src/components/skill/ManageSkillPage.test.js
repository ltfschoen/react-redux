import React from 'react';
import expect from 'expect';
// Enzyme `shallow` is wrapper of React Test Utils `shallowRender`
import {mount, shallow} from 'enzyme';
import {ManageSkillPage} from './ManageSkillPage';

describe ('Manage Skill Page', () => {
  it('sets error message when trying to save empty Skill Name', () => {
    // Mock Props
    const props = {
      users: [],
      actions: { saveSkill: () => { return Promise.resolve(); }},
      skill: {id: '', skillName: '', userId: ''}
    };

    // `mount` used to render full DOM in memory multiple levels deep (test interactions with Child Components)
    const wrapper = mount(<ManageSkillPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.skillName).toBe('Skill Name must be at least 5 characters.');
    expect(wrapper.state().errors.userId).toBe('User must be selected.');
  });
});
