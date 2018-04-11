import React from 'react';
import { Switch, Route } from 'react-router-dom';

import JoinPage from './components/join_page';
import MainChat from './components/mainchat';

const App = () => (
  <Switch>
    <Route exact path="/" component={JoinPage} />
  </Switch>
);


export default App;
