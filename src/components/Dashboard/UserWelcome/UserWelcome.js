import React from 'react';

import classes from './UserWelcome.css';
import userIcon from '../../../assets/images/blank-user-icon.jpg';

const userWelcome = (props) => {
  return (
    <div className={classes.UserWelcome} style={props.style}>
      <h2>Welcome back</h2>
      <img className={classes.UserIcon} src={userIcon} alt="User Icon"/>
      <h3>[Username]</h3>
      <div className={classes.Stats}>
        <div><label>Friends</label><a href="">5</a></div>
        <div><label>Partners</label><a href="">3</a></div>
        <div><label>Climbs</label><a href="">19</a></div>
      </div>
      <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
      <div className={classes.Climbs}>
        <h4>Climbing Stats:</h4>
        <ul>
          <li><label>Top Rope</label><a href="">5.10a</a></li>
          <li><label>Boulder</label><a href="">V6</a></li>
        </ul>
      </div>
      <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
      <div className={classes.LastActivity}>
        <h4>Last Logged Activity:</h4>
        <div className={classes.Activity}>[Activity TODO]</div>
      </div>
    </div>
  );
};

export default userWelcome;
