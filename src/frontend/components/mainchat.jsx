import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import TestForm from './testform';
import TestChatBox from './testchatbox';
import TestUserList from './testuserlist';

class MainChat extends Component {
  componentDidMount() {
    document.title = `Let's Chat | ${this.props.location.room}`;
  }

  render() {
    if (!this.props.location.name || !this.props.location.room) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <TestUserList />
        <section className="chat__main">
          <TestChatBox />
          <TestForm />
        </section>
      </React.Fragment>
    );
  }
}

MainChat.propTypes = {
  location: PropTypes.shape({
    room: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default MainChat;
