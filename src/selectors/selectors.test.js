import expect from 'expect';
import {usersFormattedForDropdown} from './selectors';

describe('User Selectors', () => {
  describe('usersFormattedForDropdown', () => {
    it('should return user data formatted for use in a dropdown', () => {
      const users = [
        {id: 'luke-schoen', fullName: 'Luke Schoen'},
        {id: 'fake-user', fullName: 'Fake User'}
      ];

      const expected = [
        {value: 'luke-schoen', text: 'Luke Schoen'},
        {value: 'fake-user', text: 'Fake User'}
      ];

      expect(usersFormattedForDropdown(users)).toEqual(expected);
    });
  });
});
