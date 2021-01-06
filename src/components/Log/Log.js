import React from 'react';

import LogItem from './LogItem/LogItem';
import freerider from '../../assets/images/freerider.png';

import Aux from '../../hoc/Aux';

// TODO: will have to loop through a set of workout
const log = (props) => {
  return (
    <Aux>
      {props.workouts.map(workout => {
        return (<LogItem
          workoutName={workout.name}
          description={workout.description}
          location={{crag: '', city: '', locState: ''}}
          date={workout.date}
          image={freerider}
          key={workout.key}/>);
      })}
    </Aux>
  );
};

export default log;
