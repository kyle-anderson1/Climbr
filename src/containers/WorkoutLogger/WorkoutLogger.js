import React, { Component } from 'react';
import axios from '../../axios/axios-workouts';

import Log from '../../components/Log/Log';
import LogControls from '../../components/LogControls/LogControls';
import Modal from '../../components/UI/Modal/Modal';
import WorkoutCreater from '../../components/LogControls/WorkoutCreater/WorkoutCreater';

import Aux from '../../hoc/Aux/Aux';

class WorkoutLogger extends Component {
  state = {
    workouts: [],
    addingWorkout: false,
    currentWorkout: {
      name: '',
      description: '',
      date: null,
      key: '',
      route: '',
      type: '',
      difficulty: ''
    }
  }

  // GET Requests Handled Here
  // - componentDidMount is useful for handling side effects in React so great
  //   for receiving data from the server
  componentDidMount () {
    console.log("[WorkoutLogger.js] componentDidMount...");
    axios.get('/workouts.json')
      .then(response => {
        const data = Object.entries(response.data)
          .map(entry => {
            return entry[1];
          }
        );
        console.log("GET", data);
        this.setState({workouts: data});
      })
      .catch(error => console.log(error));
  }

  // POST Requests Handler
  // - this handles all post requests for new workouts
  // - also resets the state 'currentWorkout' back to blank
  postWorkoutHandler = (event) => {
    event.preventDefault();
    let workout = {...this.state.currentWorkout};
    workout.key = workout.name + (Math.random().toString());

    axios.post('/workouts.json', workout)
      .then(response => {
        console.log("POST", response);
        const newWorkout = {name: '', description: '', date: null, key: '', difficulty: '', type: '', route: ''};
        this.setState({currentWorkout: newWorkout, addingWorkout: false});
      })
      .catch(error => console.log(error));
  }

  uploadCurrentWorkoutHandler = (event) => {
    event.preventDefault();
    let workouts = [...this.state.workouts];
    let currentWorkout = {...this.state.currentWorkout};
    currentWorkout.key = currentWorkout.name + (Math.random().toString());
    workouts.push(currentWorkout);
    const newWorkout = {name: '', description: '', date: null, key: '', difficulty: '', type: '', route: ''};
    this.setState({workouts: workouts, currentWorkout: newWorkout, addingWorkout: false});
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
    currentWorkout[label] = event.target.value;
    this.setState({currentWorkout: currentWorkout});
  }

  render () {
    return (
      <Aux>
        <LogControls
          workoutChange={this.workoutChangeHandler}
          currentWorkout={this.state.currentWorkout}
          create={this.createWorkoutHandler}/>
        <Log
          workouts={this.state.workouts}/>
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
