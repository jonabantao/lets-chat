import React, { Component } from 'react';
import _ from 'lodash';

import { receiveMessage } from '../util/socket';

class TestChatBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: []
    };

    this.updateMessages = this.updateMessages.bind(this);
  }

  componentDidMount() {
    receiveMessage(this.updateMessages);
  }

  updateMessages(message) {
    // Deep merge needed to prevent mutating original state
    const messages = _.merge([], this.state.messages).concat(message);

    this.setState({ messages });
  }

  render() {
    const chatMessages = this.state.messages.map((message, i) => {
      return (
        <li key={i}>{message.from}: {message.text}</li>
      );
    });
    
    return (
      <ul>
        {chatMessages}
      </ul>
    );
  }
}

export default TestChatBox;