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
    routeSelected: false,
    locationChanged: false
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
      case 'location':
        console.log(label + ' case');
        if (!this.state.locationChanged) {
          this.setState({locationChanged: true});
        }
        this.props.workoutChange(event, 'location');
        break;
      default:
        break;
    }
  }

  routesChangedHandler = (routes, label) => {
    console.log('[WorkoutCreater.js] routes: ', routes);
    if (!this.state.routeSelected) {
      this.setState({routeSelected: true});
      console.log("Route changing...: " + label);    
    }
    this.props.workoutChange(routes, 'routes');
  }

  render () {
    const currWorkout = {...this.props.currentWorkout};

    let uploadable = false;
    let dateChanged = false;
    let nameChanged = false;
    if (currWorkout.name !== null) {
      nameChanged = true;
    } else {
      nameChanged = this.state.nameChanged;
    }
    if (currWorkout.date !== null) {
      dateChanged = true;
    } else {
      dateChanged = this.state.dateChanged;
    }


    if (nameChanged && this.state.descriptionChanged && dateChanged && this.state.imageChanged && this.state.routeSelected && this.state.locationChanged) {
      uploadable = true;
    }

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
                value={currWorkout.date === null ? '' : currWorkout.date}/>
              <label>Location:</label>
              <input
                onChange={(event) => this.inputsChangeHandler(event, 'location')}
                type='text'
                value={currWorkout.location === null ? '' : currWorkout.location}/>
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
            routesChanged={this.routesChangedHandler}/>
          <Button clicked={this.props.upload} disabled={!uploadable}>UPLOAD</Button>
        </form>
      </div>
    );
  }
}

export default WorkoutCreater;
