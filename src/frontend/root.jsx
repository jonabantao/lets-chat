import React from 'react';
import socket from '../util/socket';

import TestForm from './testform';
import TestChatBox from './testchatbox';

const Root = () => {
  return (
    <React.Fragment>
      <TestChatBox />
      <TestForm />
    </React.Fragment>
    
  );
};

export default Root;