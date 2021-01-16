import React, { Component } from 'react';

import UserWelcome from '../../components/Dashboard/UserWelcome/UserWelcome';
import RecentActivity from '../../components/Dashboard/RecentActivity/RecentActivity';
import Log from '../Log/Log';
import classes from './UserFeed.css';

class UserFeed extends Component {
  render () {
    return (
      <div className={classes.UserFeed}>
        <UserWelcome style={{order: '1', flexBasis: '25%'}}/>
        <div className={classes.Center}>
          <Log />
        </div>
        <RecentActivity style={{order: '3', flexBasis: '25%'}} />
      </div>
    );
  }
}

export default UserFeed;

/*
<div className={classes.Left}>
  <h3>Kyle Anderson</h3>
  <ul className={classes.UserInfo}>
    <li>
      <label>Following</label>
      <p>5</p>
    </li>
    <li>
      <label>Followers</label>
      <p>5</p>
    </li>
    <li>
      <label>Activities</label>
      <p>5</p>
    </li>
  </ul>
  <hr style={{height: '1px', border: 'none', margin: '5px', padding: '0px', backgroundColor: 'lightgrey'}}/>
  <div className={classes.MyLog}>
    <Link to='/workouts' className={classes.MyLog}>Workout Log</Link>
    <Link to='/logging' className={classes.MyLog}>Log a Workout</Link>
  </div>
</div>
*/
