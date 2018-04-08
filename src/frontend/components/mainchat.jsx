import React from 'react';

import TestForm from './testform';
import TestChatBox from './testchatbox';
import TestUserList from './testuserlist';

const MainChat = () => (
  <React.Fragment>
    <TestUserList />
    <section className="chat__main">
      <TestChatBox />
      <TestForm />
    </section>
  </React.Fragment>
);

export default MainChat;
