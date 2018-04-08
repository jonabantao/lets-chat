import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainChat from './components/mainchat';

const App = () => (
  <Switch>
    <Route exact path="/" component={MainChat} />
  </Switch>
);


export default App;
