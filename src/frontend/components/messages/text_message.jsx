import React from 'react';

const TextMessage = (message => (
  <li className="message">
    <div className="message__title">
      <h4>{message.msgFrom}</h4>
      <span>{message.msgTime}</span>
    </div>
    <div className="message__body">
      <p>{message.msgText}</p>
    </div>
  </li>
));

export default TextMessage;
