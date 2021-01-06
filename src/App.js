import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import WorkoutLogger from './containers/WorkoutLogger/WorkoutLogger';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WorkoutLogger />
        </Layout>
      </div>
    );
  }
}

export default App;