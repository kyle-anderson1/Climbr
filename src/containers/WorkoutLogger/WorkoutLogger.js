import React, { Component } from 'react';

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

  uploadCurrentWorkoutHandler = (event) => {
    event.preventDefault();
    let workouts = [...this.state.workouts];
    let currentWorkout = {...this.state.currentWorkout};
    currentWorkout.key = currentWorkout.name + (Math.random().toString());
    workouts.push(currentWorkout);
    const newWorkout = {name: '', description: '', date: null, key: '', difficulty: '', type: '', route: ''};
    this.setState({workouts: workouts, currentWorkout: newWorkout, addingWorkout: false});
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
            upload={this.uploadCurrentWorkoutHandler}/>
        </Modal>
      </Aux>
    );
  }
}

export default WorkoutLogger;
