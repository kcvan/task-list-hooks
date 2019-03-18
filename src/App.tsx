import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/routes/Home';
import Group from './components/routes/Group';
import { TaskProvider } from './HOCs/TaskProvider';

// import logo from './logo.svg';
import './App.scss';

const App = () => (
  <div className="app">
    <TaskProvider>
      <Switch>
        <Route path="/group/:id" component={Group} />
        <Route exact path="/" component={Home} />
      </Switch>
    </TaskProvider>
  </div>
);

export default App;
