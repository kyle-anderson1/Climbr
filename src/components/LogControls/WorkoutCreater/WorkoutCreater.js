/* WorkoutCreater
   Purpose: This component will be used inside <Modal>
      and will be the advanced way to submit a workout
   Requirements: It must have input for: Name, Date, Location
      Routes [], and an image. It must also have a submit button
      that will add this information to the state to be uploaded
*/

import React from 'react';

import classes from './WorkoutCreater.css';
import imagePlaceholder from '../../../assets/images/mountain-placeholder.jpg';
import Button from '../../UI/Button/Button';
import RouteSelect from './RouteSelect/RouteSelect';

const workoutCreater = (props) => {
    const currWorkout = {...props.currentWorkout};

    return (
      <div className={classes.WorkoutCreater}>
        <form>
          <label>Name:</label>
          <input
            onChange={(event) => props.workoutChange(event, 'name')}
            type='text'
            value={currWorkout.name === '' ? '' : currWorkout.name}
            placeholder={currWorkout.name === '' ? 'Name of Workout' : ''}/>

          <label>Description:</label>
          <input
            onChange={(event) => props.workoutChange(event, 'description')}
            type='text'
            placeholder='How was the climbing...'></input>
          <div className={classes.SideBySide}>
            <div className={classes.Left}>
              <label>Date:</label>
              <input
                onChange={(event) => props.workoutChange(event, 'date')}
                type='date'
                value={currWorkout.date === null ? (new Date()) : currWorkout.date}/>
            </div>
            <div className={classes.Right}>
              <label>Image:</label>
              <input
                className={classes.Image}
                name='image'
                type='image'
                src={imagePlaceholder}
                alt='imageUpload'/>
            </div>
          </div>
          <RouteSelect
            routesChanged={props.workoutChange}/>
          <Button clicked={props.upload}>UPLOAD</Button>
        </form>
      </div>
    );
}

export default workoutCreater;
