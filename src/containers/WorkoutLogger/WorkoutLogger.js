import React, { Component } from 'react';
import axios from '../../axios/axios-workouts';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
//import * as actionTypes from '../../store/actions';

import classes from './WorkoutLogger.css';

import imagePlaceholder from '../../assets/images/mountain-placeholder.jpg';
import Button from '../../components/UI/Button/Button';
// should change path for RouteSelect
import RouteSelect from '../../components/LogControls/WorkoutCreater/RouteSelect/RouteSelect';

//import LogControls from '../../components/LogControls/LogControls';
//import Modal from '../../components/UI/Modal/Modal';
//import WorkoutCreater from '../../components/LogControls/WorkoutCreater/WorkoutCreater';

//import Aux from '../../hoc/Aux/Aux';

class WorkoutLogger extends Component {
  state = {
    addingWorkout: false,
    currentWorkout: {
      name: '',
      description: '',
      date: null,
      key: '',
      routes: [],
      type: '',
      difficulty: '',
      location: ''
    },
    nameChanged: false,
    descriptionChanged: false,
    dateChanged: false,
    imageChanged: true,
    routeSelected: false,
    locationChanged: false,
    redirect: false
  }

  // POST Requests Handler
  // - this handles all post requests for new workouts
  // - also resets the state 'currentWorkout' back to blank
  postWorkoutHandler = (event) => {
    event.preventDefault();
    let workout = {...this.state.currentWorkout};
    workout.key = workout.name + (Math.random().toString());
    console.log("[WorkoutLogger.js] posting workout... ", workout);
    axios.post('/workouts.json', workout)
      .then(response => {
        console.log("POST", response);
        const newWorkout = {name: '', description: '', date: null, key: '', difficulty: '', type: '', routes: [], location: ''};
        this.setState({currentWorkout: newWorkout, addingWorkout: false, redirect: true});
      })
      .catch(error => console.log(error));
  }

  inputsChangeHandler = (event, label) => {
    console.log(label + ' case');
    switch (label) {
      case 'name':
        if (!this.state.nameChanged) {
          this.setState({nameChanged: true})
        }
        this.persistInputToState(event, label);
        break;
      case 'description':
        if (!this.state.descriptionChanged) {
          this.setState({descriptionChanged: true})
        }
        this.persistInputToState(event, label);
        break;
      case 'date':
        if (!this.state.dateChanged) {
          this.setState({dateChanged: true})
        }
        this.persistInputToState(event, label);
        break;
      case 'image':
        if (!this.state.imageChanged) {
          this.setState({imageChanged: true})
        }
        // TODO
        break;
      case 'location':
        if (!this.state.locationChanged) {
          this.setState({locationChanged: true});
        }
        this.persistInputToState(event, label);
        break;
      default:
        break;
    }
  }

  routesChangedHandler = (routes, label) => {
    if (!this.state.routeSelected) {
      this.setState({routeSelected: true});
    }
    let currentWorkout = {...this.state.currentWorkout};
    currentWorkout[label] = routes;
    console.log(routes);
    this.setState({currentWorkout: currentWorkout});
  }

  // persistInputToState
  // - repeated code in inputsChangeHandler is outsourced to this function
  persistInputToState = (event, label) => {
    let currentWorkout = {...this.state.currentWorkout};
    console.log("Persisting... " + event.target.value);
    currentWorkout[label] = event.target.value;
    this.setState({currentWorkout: currentWorkout});
  }


  render () {
    console.log("Redirect? " + this.state.redirect);
    // NEW LOCAL UI STATE MANAGEMENT
    const currWorkout = {...this.state.currentWorkout};

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
    // END OF LOCAL UI STATE MANAGEMENT

    return (
      <div className={classes.WorkoutLogger}>
        {this.state.redirect ? <Redirect to='/workouts' /> : null}
        <form>
          <label>Name:</label>
          <input
            onChange={(event) => this.inputsChangeHandler(event, 'name')}
            type='text'
            placeholder={currWorkout.name === '' ? 'Name of Workout' : ''}/>

          <label>Description:</label>
          <input
            onChange={(event) => this.inputsChangeHandler(event, 'description')}
            type='text'
            placeholder='How was the climbing...' />
          <div className={classes.SideBySide}>
            <div className={classes.Left}>
              <label>Date:</label>
              <input
                onChange={(event) => this.inputsChangeHandler(event, 'date')}
                type='date' />
              <label>Location:</label>
              <input
                onChange={(event) => this.inputsChangeHandler(event, 'location')}
                type='text'
                placeholder='Where did you climb...' />
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
          <Button
            clicked={this.postWorkoutHandler}
            disabled={!uploadable}>
            UPLOAD
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutLogger);

/*
<Aux>
  <LogControls
    workoutChange={this.workoutChangeHandler}
    currentWorkout={this.state.currentWorkout}
    create={this.createWorkoutHandler}/>
  <Modal
    show={this.state.addingWorkout}
    hide={this.hideWorkoutHandler}>
    <WorkoutCreater
      currentWorkout={this.state.currentWorkout}
      workoutChange={this.props.addWorkoutEl}
      upload={this.postWorkoutHandler}/>
  </Modal>
</Aux>

*/
