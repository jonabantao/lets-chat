import React from 'react';
import socket from '../util/socket';

import TestForm from './components/testform';
import TestChatBox from './components/testchatbox';
import TestUserList from './components/testuserlist';

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