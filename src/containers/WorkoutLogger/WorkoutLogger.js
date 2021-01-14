import React, { Component } from 'react';
import axios from '../../axios/axios-workouts';

import LogControls from '../../components/LogControls/LogControls';
import Modal from '../../components/UI/Modal/Modal';
import WorkoutCreater from '../../components/LogControls/WorkoutCreater/WorkoutCreater';

import Aux from '../../hoc/Aux/Aux';

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
    }
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
        this.setState({currentWorkout: newWorkout, addingWorkout: false});
      })
      .catch(error => console.log(error));
  }

  createWorkoutHandler = (event) => {
    // will need to take an argument with inputed data
    // prevents Button from resetting the DOM
    event.preventDefault();
    this.setState({addingWorkout: true});
  }

  hideWorkoutHandler = () => {
    this.setState({addingWorkout: false});
  }

  workoutChangeHandler = (event, label) => {
    let currentWorkout = {...this.state.currentWorkout};
    //console.log("[WorkoutLogger.js] changing workout in handler ", currentWorkout);
    if (label === 'routes') {
      currentWorkout[label] = event;
      //console.log('[WorkoutLogger.js] Adding Route to Workout ', event);
    } else {
      currentWorkout[label] = event.target.value;
    }
    this.setState({currentWorkout: currentWorkout});
  }

  render () {
    return (
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
            workoutChange={this.workoutChangeHandler}
            upload={this.postWorkoutHandler}/>
        </Modal>
      </Aux>
    );
  }
}

export default WorkoutLogger;
