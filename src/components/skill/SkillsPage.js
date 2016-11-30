import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as skillActions from '../../actions/skillActions';

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
    // TODO - Refactor without using verbose way to dispatch an action
    this.props.dispatch(skillActions.createSkill(this.state.skill));
    console.log(`Saving ${this.state.skill.title}`);
  }

  render() {
    return (
      <div>
        <h1>Skills</h1>
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

function mapStateToProps(state, ownProps) {
  return {
    /**
     *  Declare Props to expose on Component so access with `this.props.__`.
     *  Obtain the data for Prop from within Redux Store using the `state` parameter
     */
    skills: state.skills
  };
}

// Decorate with React Redux Connect function and chain
export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);
