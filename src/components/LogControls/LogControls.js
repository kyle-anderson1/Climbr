import React from 'react';

import classes from './LogControls.css';
import Button from '../UI/Button/Button';

const logControls = (props) => {
  const currWorkout = {...props.currentWorkout};

  return (
    <div className={classes.Content}>
      <h3>Add Workout</h3>
      <form>
        <label>Name:</label>
        <input
          onChange={props.nameChange}
          type='text'
          value={currWorkout.name === '' ? '' : currWorkout.name}
          placeholder={currWorkout.name === '' ? 'Name of Workout' : ''}/>

        <label>Date:</label>
        <input
          onChange={props.dateChange}
          type='date'
          value={currWorkout.date === null ? (new Date()) : currWorkout.date}/>

        <Button clicked={props.create}>CREATE</Button>
      </form>
    </div>
  );
}

export default logControls;
