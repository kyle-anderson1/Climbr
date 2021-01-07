import React from 'react';

import classes from './Toolbar.css';
import Menu from '../Menu/Menu';

const toolbar = () => (
  <div className={classes.Toolbar}>
    <header className={classes.Toolbar}>
      <Menu />
      <div className={classes.Logo}>Climbr</div>
      <div>Login</div>
    </header>
  </div>
);

export default toolbar;
