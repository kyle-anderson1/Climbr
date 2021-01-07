import React from 'react';

import classes from './LogControls.css';
import Button from '../UI/Button/Button';

const logControls = (props) => {
  const currWorkout = {...props.currentWorkout};

  return (
    <div className={classes.Content}>
      <form>
        <label>Name:</label>
        <input
          onChange={(event) => props.workoutChange(event, 'name')}
          type='text'
          value={currWorkout.name === '' ? '' : currWorkout.name}
          placeholder={currWorkout.name === '' ? 'Name of Workout' : ''}/>

        <label>Date:</label>
        <input
          onChange={(event) => props.workoutChange(event, 'date')}
          type='date'
          value={currWorkout.date === null ? '' : currWorkout.date}/>

        <Button style={{fontSize: '1.1rem'}} clicked={props.create}>Add Workout</Button>
      </form>
    </div>
  );
}

export default logControls;
