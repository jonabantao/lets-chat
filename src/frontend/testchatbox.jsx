import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

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
      const formattedTime = moment(message.createdAt).format('h:mm a');
      
      return message.hasOwnProperty('url') ?
        (
          <li key={i}>
            {message.from} {formattedTime}: <a target="_blank" href={message.url}>My Current Location</a>
          </li>
        ) :
        (
          <li key={i}>{message.from} {formattedTime}: {message.text}</li>
        );
    });
    
    return (
      <ol className="chat__messages">
        {chatMessages}
      </ol>
    );
  }
}

export default TestChatBox;