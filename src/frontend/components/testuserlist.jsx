import uuidv1 from 'uuid/v1';
import React, { Component } from 'react';
import { updateUsers } from '../../util/socket';

class TestUserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.updateList = this.updateList.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  componentDidMount() {
    updateUsers(this.updateList);
  }

  updateList(users) {
    this.setState({ users });
  }

  renderUsers() {
    return this.state.users.map(name => <li key={uuidv1()}>{name}</li>);
  }

  render() {
    return (
      <div className="chat__sidebar">
        <h3>People</h3>
        <div id="users">
          <ol>
            {this.renderUsers()}
          </ol>
        </div>
      </div>
    );
  }
}

export default TestUserList;
