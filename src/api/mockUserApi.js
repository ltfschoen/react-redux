import delay from './delay';

const users = [
  {
    id: 'luke-schoen',
    fullName: 'Luke Schoen'
  },
  {
    id: 'fake-user',
    fullName: 'Fake User'
  }
];

const generateId = (user) => {
  return user.fullName.toLowerCase().replace(/\s+/g, "-");
};

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength = 3;
        if (user.fullName.length < minUserNameLength) {
          reject(`Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(u => u.id == user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          user.id = generateId(user);
          users.push(user);
        }

        resolve(Object.assign({}, user));
      }, delay);
    });
  }
}

export default UserApi;
