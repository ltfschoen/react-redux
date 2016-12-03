import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as skillActions from '../../actions/skillActions';
import SkillList from './SkillList';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class SkillsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddSkillPage = this.redirectToAddSkillPage.bind(this);
  }

  redirectToAddSkillPage() {
    browserHistory.push('/skill');
  }

  render() {
    const {skills} = this.props; // Destructuring to achieve shorter calls (instead of having to write `this.props.skills` later)

    debugger;
    console.log(`component:SkillsPage:render - Called render with exposed Props from Redux`);
    return (
      <div>
        <h1>Skills</h1>
        <input type="submit"
               value="Add Skill"
               className="btn btn-primary"
               onClick={this.redirectToAddSkillPage}/>
        <SkillList skills={skills} />
      </div>
    );
  }
}

SkillsPage.propTypes = {
  skills: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    skills: state.skills
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(skillActions, dispatch)
  };
}

// Decorate with React Redux Connect function and chain
export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);
