import React from 'react';

const LocationMessage = (message => (
  <li className="message">
    <div className="message__title">
      <h4>{message.msgFrom}</h4>
      <span>{message.msgTime}</span>
    </div>
    <div className="message__body">
      <a target="_blank" href={message.msgUrl}>My Current Location</a>
    </div>
  </li>
));

export default LocationMessage;
