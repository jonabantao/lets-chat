class Users {
  constructor() {
    this.users = {};
  }

  addUser(id, name, room) {
    // returns added user
    // modifies this.users with new user id
    const user = { id, name, room };
    this.users[user.id] = user;
    return user;
  }

  removeUser(id) {
    // returns the removed user and modifies users array
    if (this.users[id] === undefined) {
      return null;
    }

    const deletedUser = this.users[id];
    delete this.users[id];

    return deletedUser;
  }

  getUser(id) {
    // returns a user if any, null if not found
    if (this.users[id] === undefined) {
      return null;
    }

    return this.users[id];
  }

  getUserList(room) {
    // returns a list of users for selected room
    const users = Object.values(this.users).filter(user => user.room === room);
    const names = users.map(user => user.name);

    return names;
  }
}

module.exports = {
  Users,
};

