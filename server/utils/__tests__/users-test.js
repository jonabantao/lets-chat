const { Users } = require('../users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = {
      1: {
        id: '1',
        name: 'Tester',
        room: 'Test Room',
      },
      2: {
        id: '2',
        name: 'Bob',
        room: 'Tester Room',
      },
      3: {
        id: '3',
        name: 'Alice',
        room: 'Test Room',
      },
    };
  });

  test('should add a new user', () => {
    const testUsers = new Users();
    const user = {
      id: '139fj',
      name: 'Tester',
      room: 'Test Room',
    };
    testUsers.addUser(user.id, user.name, user.room);

    expect(testUsers.users).toEqual({ [user.id]: user });
  });

  it('should return users for selected room only', () => {
    const testRoomUsers = users.getUserList('Test Room');
    const testerRoomUsers = users.getUserList('Tester Room');

    expect(testRoomUsers).toEqual(['Tester', 'Alice']);
    expect(testerRoomUsers).toEqual(['Bob']);
  });

  it('should remove a user', () => {
    expect(users.removeUser(1)).toEqual({
      id: '1',
      name: 'Tester',
      room: 'Test Room',
    });
    expect(users.users).toEqual({
      2: {
        id: '2',
        name: 'Bob',
        room: 'Tester Room',
      },
      3: {
        id: '3',
        name: 'Alice',
        room: 'Test Room',
      },
    });
  });

  it('should not remove a user', () => {
    expect(users.removeUser(4)).toBeNull();
    expect(users.users).toEqual({
      1: {
        id: '1',
        name: 'Tester',
        room: 'Test Room',
      },
      2: {
        id: '2',
        name: 'Bob',
        room: 'Tester Room',
      },
      3: {
        id: '3',
        name: 'Alice',
        room: 'Test Room',
      },
    });
  });

  it('should find a user', () => {
    expect(users.getUser(2)).toEqual({
      id: '2',
      name: 'Bob',
      room: 'Tester Room',
    });
  });

  it('should not find a user', () => {
    expect(users.getUser(4)).toBeNull();
  });
});
