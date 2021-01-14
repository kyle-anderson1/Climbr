/* WorkoutCreater
   Purpose: This component will be used inside <Modal>
      and will be the advanced way to submit a workout
   Requirements: It must have input for: Name, Date, Location
      Routes [], and an image. It must also have a submit button
      that will add this information to the state to be uploaded
*/

import React, { Component } from 'react';

import classes from './WorkoutCreater.css';
import imagePlaceholder from '../../../assets/images/mountain-placeholder.jpg';
import Button from '../../UI/Button/Button';
import RouteSelect from './RouteSelect/RouteSelect';

class WorkoutCreater extends Component {
  state = {
    nameChanged: false,
    descriptionChanged: false,
    dateChanged: false,
    imageChanged: true,
    routeSelected: true
  }

  inputsChangeHandler = (event, label) => {
    switch (label) {
      case 'name':
        console.log(label + ' case');
        if (!this.state.nameChanged) {
          this.setState({nameChanged: true})
        }
        this.props.workoutChange(event, 'name');
        break;
      case 'description':
        console.log(label + ' case');
        if (!this.state.descriptionChanged) {
          this.setState({descriptionChanged: true})
        }
        this.props.workoutChange(event, 'description');
        break;
      case 'date':
        console.log(label + ' case');
        if (!this.state.dateChanged) {
          this.setState({dateChanged: true})
        }
        this.props.workoutChange(event, 'date');
        break;
      case 'image':
        console.log(label + ' case');
        if (!this.state.imageChanged) {
          this.setState({imageChanged: true})
        }
        // TODO
        break;
      default:
        break;
    }
  }

  render () {
    let uploadable = false;
    if (this.state.nameChanged && this.state.descriptionChanged && this.state.dateChanged && this.state.imageChanged && this.state.routeSelected) {
      uploadable = true;
    }
    const currWorkout = {...this.props.currentWorkout};

    return (
      <div className={classes.WorkoutCreater}>
        <form>
          <label>Name:</label>
          <input
            onChange={(event) => this.inputsChangeHandler(event, 'name')}
            type='text'
            value={currWorkout.name === '' ? '' : currWorkout.name}
            placeholder={currWorkout.name === '' ? 'Name of Workout' : ''}/>

          <label>Description:</label>
          <input
            onChange={(event) => this.inputsChangeHandler(event, 'description')}
            type='text'
            placeholder='How was the climbing...'></input>
          <div className={classes.SideBySide}>
            <div className={classes.Left}>
              <label>Date:</label>
              <input
                onChange={(event) => this.inputsChangeHandler(event, 'date')}
                type='date'
                value={currWorkout.date === null ? ('') : currWorkout.date}/>
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
            routesChanged={this.props.workoutChange}/>
          <Button clicked={this.props.upload} disabled={!uploadable}>UPLOAD</Button>
        </form>
      </div>
    );
  }
}

export default WorkoutCreater;
