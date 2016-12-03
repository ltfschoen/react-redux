import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as skillActions from '../../actions/skillActions';
import SkillForm from './SkillForm';
import {skillsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageSkillPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Initialise State
    this.state = {
      skill: Object.assign({}, props.skill),
      errors: {},
      saving: false
    };

    // Declare binding in constructor of component instance
    this.updateSkillState = this.updateSkillState.bind(this);
    this.saveSkill = this.saveSkill.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.skill.id != nextProps.skill.id) {
      this.setState({skill: Object.assign({}, nextProps.skill)});
    }
  }

  updateSkillState(event) {
    console.log(`component:ManageSkillsPage:updateSkillState - [this.state.skill: ${JSON.stringify(this.state.skill)}]`);
    const field = event.target.name;
    let skill = this.state.skill;
    skill[field] = event.target.value;
    return this.setState({skill: skill});
  }

  skillFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.skill.skillName.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveSkill(event) {
    event.preventDefault();

    if (!this.skillFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    console.log(`component:ManageSkillsPage:saveSkill - [this.state.skill: ${JSON.stringify(this.state.skill)}]`);

    this.props.actions.saveSkill(this.state.skill)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Skill saved');
    this.context.router.push('/skills');
  }

  render() {
    return (
      <SkillForm
        allSkills={this.props.skills}
        onChange={this.updateSkillState}
        onSave={this.saveSkill}
        skill={this.state.skill}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageSkillPage.propTypes = {
  skill: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// React Router context pulled in so router available with this.context.router
ManageSkillPage.contextTypes = {
  router: PropTypes.object
};

function getSkillById(skills, id) {
  const skill = skills.filter(skill => skill.id == id);
  if (skill) return skill[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  debugger;
  console.log(`component:ManageSkillsPage:mapStateToProps - Received state [state: ${JSON.stringify(state)}] from Redux Store`);
  console.log(`component:ManageSkillsPage:mapStateToProps - Received data(ownProps) from Redux Store`);

  const skillId = ownProps.params.id; // from path `/skill/:id`

  let skill = {id: '', skillName: ''};

  if (skillId && state.skills.length > 0) {
    skill = getSkillById(state.skills, skillId);
  }

  return {
    /**
     *  Declare Props to expose on Component so access with `this.props.__`.
     *  Obtain the data for Prop from within Redux Store using the `state` parameter
     */
    skill: skill,
    skills: skillsFormattedForDropdown(state.skills)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(skillActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSkillPage);
