import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { receiveMessage } from '../../util/socket';

import LocationMessage from './messages/location_message';
import TextMessage from './messages/text_message';

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
        <LocationMessage 
          msgFrom={message.from}
          msgTime={formattedTime}
          msgUrl={message.url}
          key={i}
        /> :
        <TextMessage
          msgFrom={message.from}
          msgTime={formattedTime}
          msgText={message.text}
          key={i}
        />;
    });
    
    return (
      <ol className="chat__messages">
        {chatMessages}
      </ol>
    );
  }
}

export default TestChatBox;