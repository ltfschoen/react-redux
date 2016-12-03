import React, {PropTypes} from 'react';
import SkillListRow from './SkillListRow';

const SkillList = ({skills}) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-4"><strong>ID</strong></div>
        <div className="col-xs-8"><strong>Skill Name</strong></div>
      </div>
      {skills.map(
        (skill) => <SkillListRow key={skill.id} skill={skill} />
      )}
    </div>
  );
};

SkillList.propTypes = {
  skills: PropTypes.array.isRequired
};

export default SkillList;
