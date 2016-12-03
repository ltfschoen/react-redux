import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SkillForm from './SkillForm';

// Setup function returns output of rendering Component under test
function setup(saving) {
  let props = {
    skill: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer(); // Instance of React Test Utils Renderer
  renderer.render(<SkillForm {...props}/>); // Render SkillForm Component and Props
  let output = renderer.getRenderOutput(); // Retrieve output of rendering SkillForm Component

  // Return functions useful in tests
  return {
    props,
    output,
    renderer
  };
}

describe('SkillForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup(); // Output of rendering SkillForm
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children; // Destructure first element from Props children
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[4];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[4];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
