import React, { Component } from 'react';
import axios from '../../axios/axios-workouts';

import LogItem from './LogItem/LogItem';
import freerider from '../../assets/images/freerider.png';


class Log extends Component {
  state = {
    workouts: []
  }

  // GET Requests Handled Here
  // - componentDidMount is useful for handling side effects in React so great
  //   for receiving data from the server
  componentDidMount () {
    console.log("[Log.js] componentDidMount...");
    axios.get('/workouts.json')
      .then(response => {
        if (response.data !== null) {
          const data = Object.entries(response.data)
            .map(entry => {
              return entry[1];
            }
          );
          //console.log("GET", data);
          this.setState({workouts: data});
        } else {
          console.log("GET: no workouts received from server")
        }
      })
      .catch(error => console.log(error));
  }

  render () {
    return (
      <div style={{paddingTop: '20px'}}>
        {this.state.workouts.map(workout => {
          //console.log("[Log.js] workout ", workout);
          return (<LogItem
            workoutName={workout.name}
            description={workout.description}
            location={workout.location}
            date={workout.date}
            image={freerider}
            routes={workout.routes}
            type={workout.type}
            difficulty={workout.difficulty}
            key={workout.key}/>);
        })}
      </div>
    );
  }
}

export default Log;
