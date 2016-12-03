import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SkillForm = ({skill, allUsers, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Skill</h1>
      <TextInput
        name="id"
        label="Skill Id"
        value={skill.id}
        onChange={onChange}
        error={errors.id}/>
      <TextInput
        name="skillName"
        label="Skill Name"
        value={skill.skillName}
        onChange={onChange}
        error={errors.skillName}/>
      <SelectInput
        name="userId"
        label="User"
        value={skill.userId}
        defaultOption="Select User"
        options={allUsers}
        onChange={onChange}
        error={errors.userId}/>
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
  allUsers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SkillForm;
