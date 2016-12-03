import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SkillForm = ({skill, allSkills, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Skill</h1>
      <TextInput
        name="id"
        label="Skill Id"
        value={skill.id}
        onChange={onChange}
        error={errors.id}/>
      <SelectInput
        name="skillName"
        label="Skill Name"
        value={skill.skillName}
        defaultOption="Select Skill"
        options={allSkills}
        onChange={onChange}
        error={errors.skillName}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

SkillForm.propTypes = {
  skill: React.PropTypes.object.isRequired,
  allSkills: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SkillForm;
