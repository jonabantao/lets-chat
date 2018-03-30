import React from 'react';

const TextMessage = ({ msgFrom, msgText, msgTime }) => {
  return (
    <li className="message">
      <div className="message__title">
        <h4>{msgFrom}</h4>
        <span>{msgTime}</span>
      </div>
      <div className="message__body">
        <p>{msgText}</p>
      </div>
    </li>
  );
};

export default TextMessage;