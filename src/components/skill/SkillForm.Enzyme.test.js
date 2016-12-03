import expect from 'expect';
import React from 'react';
// Enzyme `shallow` is wrapper of React Test Utils `shallowRender`
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import SkillForm from './SkillForm';

function setup(saving) {
  const props = {
    skill: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<SkillForm {...props} />);
}

describe('SkillForm using Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Skill');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
