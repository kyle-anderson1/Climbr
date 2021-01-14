import React from 'react';

import classes from './Button.css';

const button = (props) => (
  <button
    className={classes.Button}
    style={props.style}
    onClick={props.clicked}
    disabled={props.disabled}>
    {props.children}
  </button>
);

export default button;
