import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './LogItem.css';

class LogItem extends Component {
  render () {
    let crag, city, locState;
    ({crag,city,locState} = this.props.location);
    return (
      <div className={classes.LogItem}>
        <h3>{this.props.workoutName}</h3>
        <div className={classes.Inner}>
          <div className={classes.Left}>
            <p><i>{this.props.description}</i></p>
            <p>Location: {crag}, {city}, {locState}</p>
            <p>Date: {this.props.date}</p>
            {this.props.routes ? this.props.routes.map(route => {
                return <p key={route.name}>{route.difficulty} | {route.type} {route.name}</p>;
              }) : null}
          </div>
          <div className={classes.Right}>
            <img src={this.props.image} alt='RouteImage'/>
          </div>
        </div>
      </div>
    );
  }
}

LogItem.propTypes = {
  workoutName: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.object,
  date: PropTypes.string,
  image: PropTypes.string
};

export default LogItem;
