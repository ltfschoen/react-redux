import delay from './delay';

// Mock a web API calls using hard-coded data and returns promises.
// setTimeout simulates AJAX call delay.
const skills = [
  {
    id: 'react',
    skillName: 'react',
    userId: 'luke-schoen'
  },
  {
    id: 'node',
    skillName: 'node',
    userId: 'fake-user'
  }
];

// Stub that otherwise performed on server in real app.
const generateId = (skill) => {
  return skill.skillName.toLowerCase() + getRandomInt(0, 10000);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class SkillApi {
  static getAllSkills() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], skills));
      }, delay);
    });
  }

  static saveSkill(skill) {
    console.log(`api:saveSkill [skill: ${JSON.stringify(skill)}]`);
    skill = Object.assign({}, skill); // Avoid manipulate object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSkillNameLength = 3;
        if (skill.skillName.length < minSkillNameLength) {
          reject(`Skill Name must be at least ${minSkillNameLength} characters.`);
        }

        if (skill.id) {
          const existingSkillIndex = skills.findIndex(s => s.id == skill.id);
          skills.splice(existingSkillIndex, 1, skill);
        } else {
          // Simulating creation. Server generates ids for new skills in real app.
          // Cloning so copy returned is passed by value rather than by reference.
          skill.id = generateId(skill);
          skills.push(skill);
        }

        resolve(skill);
      }, delay);
    });
  }

  static deleteSkill(skillId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSkillToDelete = skills.findIndex(skill => {
          skill.skillId == skillId;
        });
        skills.splice(indexOfSkillToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SkillApi;
