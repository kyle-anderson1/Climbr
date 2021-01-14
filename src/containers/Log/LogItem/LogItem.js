import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './LogItem.css';

class LogItem extends Component {
  render () {
    return (
      <div className={classes.LogItem}>
        <h4>{this.props.workoutName}</h4>
        <hr style={{height: '1px', border: 'none', margin: '5px 3px', padding: '0px', backgroundColor: 'lightgrey'}}/>
        <div className={classes.Inner}>
          <div className={classes.Left}>
            <p><i>{this.props.description}</i></p>
            <p>Location: {this.props.location}</p>
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
  location: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string
};

export default LogItem;
