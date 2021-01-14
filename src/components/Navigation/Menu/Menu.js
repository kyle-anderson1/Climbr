import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Menu.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Menu extends Component {
  state = {
    showDropdown: false
  }

  showDropdownHandler = () => {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  render () {
    let dropdown = null;
    if (this.state.showDropdown) {
      dropdown = (
        <ul className={classes.Links}>
          <li><NavLink to='/' className={classes.Link}>Home</NavLink></li>
          <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
          <li><NavLink to='/workouts' className={classes.Link}>Workouts</NavLink></li>
          <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
          <li><NavLink to='/logging' className={classes.Link}>Log a Workout</NavLink></li>
          <hr style={{height: '1px', border: 'none', margin: '5px 0px', padding: '0px', backgroundColor: 'lightgrey'}}/>
          <li>TODO: More Links</li>
        </ul>
      );
    }

    return (
      <Aux>
        <Backdrop notGreyed show={this.state.showDropdown} clicked={this.showDropdownHandler} />
        <div className={classes.Dropdown}>
          <div className={classes.MenuIcon} onClick={this.showDropdownHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {dropdown}
        </div>
      </Aux>
    );
  }
}

export default Menu;
