import React, {PropTypes} from 'react';

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
    alert(`Saving ${this.state.skill.title}`);
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

export default SkillsPage;
