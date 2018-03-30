import React from 'react';

const LocationMessage = ({ msgFrom, msgTime, msgUrl }) => {
  return (
    <li className="message">
      <div className="message__title">
        <h4>{msgFrom}</h4>
        <span>{msgTime}</span>
      </div>
      <div className="message__body">
        <a target="_blank" href={msgUrl}>My Current Location</a>
      </div>
    </li>
  );
};

export default LocationMessage;