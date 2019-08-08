import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Counter from './pages/Counter/Counter';
import Team from './pages/Team';

const App: FC<{}> = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/:teamName/member" component={Team} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
