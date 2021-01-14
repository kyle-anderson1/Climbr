import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './UserFeed.css';

class UserFeed extends Component {
  render () {
    return (
      <div className={classes.UserFeed}>
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
        <div className={classes.Center}>
          <h1>User Feed</h1>
          <p>User Info</p>
          <p>User Info</p>
          <p>User Info</p>
          <p>User Info</p>
        </div>
        <div className={classes.Right}>Right Box</div>
      </div>
    );
  }
}

export default UserFeed;
