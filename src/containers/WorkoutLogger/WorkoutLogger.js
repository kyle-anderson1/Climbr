import React, { Component } from 'react';

import Log from '../../components/Log/Log';
import LogControls from '../../components/LogControls/LogControls';
import Modal from '../../components/UI/Modal/Modal';
import WorkoutCreater from '../../components/LogControls/WorkoutCreater/WorkoutCreater';

import Aux from '../../hoc/Aux';

class WorkoutLogger extends Component {
  state = {
    workouts: [],
    addingWorkout: false,
    currentWorkout: {
      name: '',
      description: '',
      date: null,
      key: ''
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

  nameChangeHandler = (event) => {
    let currentWorkout = {...this.state.currentWorkout};
    currentWorkout.name = event.target.value;
    this.setState({currentWorkout: currentWorkout});
  }

  descriptionChangeHandler = (event) => {
    let currentWorkout = {...this.state.currentWorkout};
    currentWorkout.description = event.target.value;
    this.setState({currentWorkout: currentWorkout});
  }

  dateChangeHandler = (event) => {
    let currentWorkout = {...this.state.currentWorkout};
    // possibly use Date() object
    const date = event.target.value;
    currentWorkout.date = date;
    this.setState({currentWorkout: currentWorkout});
  }

  uploadCurrentWorkoutHandler = (event) => {
    event.preventDefault();
    let workouts = [...this.state.workouts];
    let currentWorkout = {...this.state.currentWorkout};
    currentWorkout.key = currentWorkout.name + (Math.random().toString());
    workouts.push(currentWorkout);
    const newWorkout = {name: '', description: '', date: null, key: ''};
    this.setState({workouts: workouts, currentWorkout: newWorkout, addingWorkout: false});
  }

  render () {
    return (
      <Aux>
        <LogControls
          nameChange={this.nameChangeHandler}
          dateChange={this.dateChangeHandler}
          currentWorkout={this.state.currentWorkout}
          create={this.createWorkoutHandler}/>
        <Log
          workouts={this.state.workouts}/>
        <Modal
          show={this.state.addingWorkout}
          hide={this.hideWorkoutHandler}>
          <WorkoutCreater
            currentWorkout={this.state.currentWorkout}
            nameChange={this.nameChangeHandler}
            descriptionChange={this.descriptionChangeHandler}
            dateChange={this.dateChangeHandler}
            upload={this.uploadCurrentWorkoutHandler}/>
        </Modal>
      </Aux>
    );
  }
}

export default WorkoutLogger;
