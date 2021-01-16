import React from 'react';

import classes from './RecentActivity.css';
import userIcon from '../../../assets/images/blank-user-icon.jpg';

const recentActivity = (props) => {
  return (
    <div className={classes.RecentActivity} style={props.style}>
      <h3>Recent Activity</h3>
      <div className={classes.FriendsActivity}>
        <ul>
          <li>
            <img className={classes.UserIcon} src={userIcon} alt="User Icon"/>
            <div>
              <h4>Jordan Anderson</h4>
              <p>climbed <strong>5.9+</strong></p>
              <p>at <strong>Cragmont, Berkley, CA</strong></p>
            </div>
          </li>
          <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
          <li>
            <img className={classes.UserIcon} src={userIcon} alt="User Icon"/>
            <div>
              <h4>[Username]</h4>
              <p>climbed [DIFFICULTY]</p>
              <p>at [LOCATION]</p>
            </div>
          </li>
          <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
          <li>
            <img className={classes.UserIcon} src={userIcon} alt="User Icon"/>
            <div>
              <h4>[Username]</h4>
              <p>climbed [DIFFICULTY]</p>
              <p>at [LOCATION]</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default recentActivity;
