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
      messages: [],
    };

    this.messages = React.createRef();

    this.updateMessages = this.updateMessages.bind(this);
  }

  componentDidMount() {
    receiveMessage(this.updateMessages);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    // React way of grabbing DOM nodes
    const messages = this.messages.current;
    const newMsg = messages.lastChild;
    const lastMsg = newMsg.previousSibling;

    const { clientHeight, scrollTop, scrollHeight } = messages;
    const newMsgHeight = newMsg ? newMsg.clientHeight : 0;
    const lastMsgHeight = lastMsg ? lastMsg.clientHeight : 0;
    const totalHeight = [clientHeight, scrollTop, newMsgHeight, lastMsgHeight]
      .reduce((sum, height) => sum + height);

    if (totalHeight >= scrollHeight) {
      messages.scrollTop = scrollHeight;
    }
  }

  updateMessages(message) {
    // Deep merge needed to prevent mutating original state
    const messages = _.merge([], this.state.messages).concat(message);
    this.setState({ messages });
  }

  render() {
    const chatMessages = this.state.messages.map((message) => {
      const formattedTime = moment(message.createdAt).format('h:mm a');

      return Object.prototype.hasOwnProperty.call(message, 'url') ?
        <LocationMessage
          msgFrom={message.from}
          msgTime={formattedTime}
          msgUrl={message.url}
          key={message.id}
        /> :
        <TextMessage
          msgFrom={message.from}
          msgTime={formattedTime}
          msgText={message.text}
          key={message.id}
        />;
    });

    return (
      <ol ref={this.messages} className="chat__messages">
        {chatMessages}
      </ol>
    );
  }
}

export default TestChatBox;
