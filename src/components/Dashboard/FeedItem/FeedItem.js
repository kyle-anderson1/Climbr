import React from 'react';

import classes from './FeedItem.css';
import userIcon from '../../../assets/images/blank-user-icon.jpg';
import mapTemplate from '../../../assets/images/Google-maps-template.png';
import climbImageTemplate from '../../../assets/images/Cragmont-template.png';

const feedItem = (props) => {
  return (
    <div className={classes.FeedItem}>
      <div className={classes.Header}>
        <img className={classes.UserIcon} src={userIcon} alt="User Icon"/>
        <div>
          <h4>{props.username}</h4>
          <p className={classes.Small}>{new Date(props.date).toDateString()} @ {props.time}</p>
          <p className={classes.Small}>{props.location}</p>
        </div>
      </div>
      <div className={classes.Body}>
        <h2>{props.workoutTitle}</h2>
        <p>{props.description}</p>
        {props.routes.map(route => {
          let rStyle = null;
          if (route.style) {
            rStyle = <div><label>Style</label><p>{route.style}</p></div>;
          }
          return (
            <div key={route.name} className={classes.Stats}>
              <div><label>Type</label><p>{route.type}</p></div>
              <div><label>Difficulty</label><p>{route.difficulty}</p></div>
              <div><label>Route Name</label><a href="">{route.name}</a></div>
              {rStyle}
            </div>
          );
        })}
        <div className={classes.Maps}>
          <img src={mapTemplate} alt="GPS Map"/>
          <img src={climbImageTemplate} alt="Cragmont" />
        </div>
        <div className={classes.CommentLike}>
          <div>
            <a href="">4</a><label>comments</label>
            <a href="">12</a><label>shakas</label>
          </div>
          <div>
            <button>Shaka</button>
            <button>Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default feedItem;
