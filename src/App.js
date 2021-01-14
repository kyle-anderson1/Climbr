import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import WorkoutLogger from './containers/WorkoutLogger/WorkoutLogger';
import UserFeed from './containers/UserFeed/UserFeed';
import Log from './containers/Log/Log';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/workouts' exact component={Log} />
            <Route path='/logging' exact component={WorkoutLogger}/>
            <Route path='/' component={UserFeed} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
