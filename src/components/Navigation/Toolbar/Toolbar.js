import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Toolbar.css';
import Menu from '../Menu/Menu';

const toolbar = () => (
  <div className={classes.Toolbar}>
    <header className={classes.Toolbar}>
      <Menu />
      <div className={classes.Logo}><Link to="/" className={classes.LogoLink}>Climbr</Link></div>
      <div>Login</div>
    </header>
  </div>
);

export default toolbar;
