import React, { Component } from 'react';

import classes from './RouteSelect.css';
import Button from '../../../UI/Button/Button';

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
    type: null,
    currentRoute: {
      name: '',
      type: '',
      difficulty: ''
    },
    routes: []
  }

  // Deprecated in favor of routeUpdateHandler
  /*
  typeSelectedHandler = (event) => {
    this.props.routeChanged(event, 'type');
    this.setState({typeSelected: true, type: event.target.value});
  }*/

  routeUpdateHandler = (event, label) => {
    let currentRoute = {...this.state.currentRoute};
    currentRoute[label] = event.target.value;
    if (label === 'type') {
      this.setState({typeSelected: true, type: event.target.value, currentRoute: currentRoute})
    } else {
      this.setState({currentRoute: currentRoute});
    }
  }

  addRouteHandler = (event) => {
    event.preventDefault();
    let routes = [...this.state.routes];
    routes.push(this.state.currentRoute);
    this.setState({routes: routes, moreRoutes: true, currentRoute: {name: '', type: '', difficulty: ''}});
    this.props.routesChanged(routes,'routes');
  }

  removeRouteHandler = (event, route) => {
    event.preventDefault();
    let routes = [...this.state.routes];
    routes.splice(routes.indexOf(route),1);
    this.setState({routes: routes});
    this.routesChanged(routes,'routes');
  }

  render () {
    let completedRoutes = this.state.routes
      .map(route => {
        return (
          <div
            key={route.name}
            className={classes.Routes}>
            <p><strong style={{borderRight: 'thin solid black', padding: '5px'}}>{route.difficulty}</strong> {route.type}</p>
            <p>{route.name}</p>
            <Button clicked={(event) => this.removeRouteHandler(event, route.name)} style={{
              backgroundColor: 'red',
              color: 'white',
              width: '10%',
              height: '20px',
              margin: '0px',
              padding: '0px'}}>-</Button>
          </div>
        );
      });

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
        <select onChange={(event) => this.routeUpdateHandler(event, 'difficulty')}>
          <option value='None'>Difficulty</option>
          {ratingVals}
        </select>;
    }

    // TODO: push 'route' change up to the parent with ...
    // (event) => this.props.routeChanged(event, 'route')
    return (
      <div>
        <label>Routes: </label>
        {completedRoutes}
        <div className={classes.RouteList}>
          <div style={{width: '90%', marginRight: '10px'}}>
            <input
              onChange={(event) => this.routeUpdateHandler(event, 'name')}
              type='text'
              placeholder='Route Name'></input>

            <select onChange={(event) => this.routeUpdateHandler(event, 'type')}>
              <option value='None'>Type</option>
              <option value='Top Rope'>Top Rope</option>
              <option value='Sport'>Sport</option>
              <option value='Trad'>Trad</option>
              <option value='Alpine'>Alpine</option>
              <option value='Boulder'>Boulder</option>
            </select>
            {rating}
          </div>
          <Button clicked={this.addRouteHandler} style={{backgroundColor: 'black', color: 'white'}}>+</Button>
        </div>
      </div>
    );
  }
}

export default RouteSelect;
