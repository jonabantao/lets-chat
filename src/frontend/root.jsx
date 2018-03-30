import React from 'react';
import socket from '../util/socket';

import TestForm from './testform';
import TestChatBox from './testchatbox';
import TestUserList from './testuserlist';

const Root = () => {
  return (
    <React.Fragment>
      <TestUserList />
      <section className="chat__main">
        <TestChatBox />
        <TestForm />
      </section>
    </React.Fragment>
    
  );
};

export default Root;