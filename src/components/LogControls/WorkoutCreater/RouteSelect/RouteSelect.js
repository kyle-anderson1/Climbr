import React, { Component } from 'react';

const YOSEMITE_DIFFICULTY_RATINGS = [
  '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9',
  '5.10a', '5.10b', '5.10c', '5.10d', '5.11a', '5.11b', '5.11c',
  '5.11d', '5.12a', '5.12b', '5.12c', '5.12d', '5.13a', '5.13b',
  '5.13c', '5.13d', '5.14a', '5.14b', '5.14c', '5.15a', '5.15b',
  '5.15c', '5.15d'
];

const BOULDER_DIFFICULTY_RATINGS = [
  'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10',
  'V11', 'V12', 'V13', 'V14', 'V15', 'V16'
];

class RouteSelect extends Component {
  state = {
    typeSelected: false,
    type: null
  }

  typeSelectedHandler = (event) => {
    this.props.routeChanged(event, 'type');
    this.setState({typeSelected: true, type: event.target.value});
  }

  render () {
    let rating = null;
    if (this.state.typeSelected) {
      let ratingVals = [];
      if (this.state.type === 'Top Rope' || this.state.type === 'Sport'
          || this.state.type === 'Trad' || this.state.type === 'Alpine') {
        ratingVals =
          YOSEMITE_DIFFICULTY_RATINGS.map(r => <option key={r} value={r}>{r}</option>);
      } else if (this.state.type === ('Boulder')) {
        ratingVals =
          BOULDER_DIFFICULTY_RATINGS.map(r => <option key={r} value={r}>{r}</option>);
      } else {
        console.log('[RouteSelect.js] Type Selection Error');
      }
      rating =
        <select onChange={(event) => this.props.routeChanged(event, 'difficulty')}>
          <option value='None'>Difficulty</option>
          {ratingVals}
        </select>;
    }

    return (
      <div>
        <label>Routes: </label>
        <input
          onChange={(event) => this.props.routeChanged(event, 'route')}
          type='text'
          placeholder='Route Name'></input>
        <select onChange={this.typeSelectedHandler}>
          <option value='None'>Type</option>
          <option value='Top Rope'>Top Rope</option>
          <option value='Sport'>Sport</option>
          <option value='Trad'>Trad</option>
          <option value='Alpine'>Alpine</option>
          <option value='Boulder'>Boulder</option>
        </select>
        {rating}
      </div>
    );
  }
}

export default RouteSelect;
