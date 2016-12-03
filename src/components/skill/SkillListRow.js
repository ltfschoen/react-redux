import React, {PropTypes} from 'react';
import {Link} from 'react-router';

function humanize(str) {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, '')
    .replace(/[_\s]+/g, ' ')
    .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}

const SkillListRow = ({skill}) => {
  return (
    <div className="row">
      <div className="col-xs-4">{skill.id}</div>
      <div className="col-xs-4">
        <Link to={'/skill/' + skill.id}>{humanize(skill.skillName)}</Link>
      </div>
      <div className="col-xs-4">{skill.userId}</div>
    </div>
  );
};

SkillListRow.propTypes = {
  skill: PropTypes.object.isRequired
};

export default SkillListRow;
