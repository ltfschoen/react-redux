import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as skillActions from '../../actions/skillActions';
import {bindActionCreators} from 'redux';

class SkillsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      skill: { title: "" }
    };

    // Declare binding in constructor of component instance
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const skill = this.state.skill;
    skill.title = event.target.value;
    this.setState({skill: skill});
  }

  onClickSave() {
    debugger;
    // TODO - Refactor without using verbose way to dispatch an action
    this.props.actions.createSkill(this.state.skill);
    debugger;
    console.log(`component:SkillsPage:onClickSave [this.state.skill.title: ${this.state.skill.title}]`);
  }

  skillRow(skill, index) {
    return <div key={index}>{skill.title}</div>;
  }

  render() {
    debugger;
    console.log(`component:SkillsPage:render - Called render with exposed Props from Redux`);
    return (
      <div>
        <h1>Skills</h1>
        {this.props.skills.map(this.skillRow)}
        <h2>Add Skill</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.skill.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

SkillsPage.propTypes = {
  skills: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  console.log(`component:SkillsPage:mapStateToProps - Received state [state: ${JSON.stringify(state)}] from Redux Store`);
  console.log(`component:SkillsPage:mapStateToProps - Received data(ownProps) from Redux Store`);
  return {
    /**
     *  Declare Props to expose on Component so access with `this.props.__`.
     *  Obtain the data for Prop from within Redux Store using the `state` parameter
     */
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
