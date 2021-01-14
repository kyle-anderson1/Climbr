import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Menu.css';

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
          <li><NavLink to='/workouts'>Workouts</NavLink></li>
        </ul>
      );
    }

    return (
      <div className={classes.Dropdown}>
        <div className={classes.MenuIcon} onClick={this.showDropdownHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {dropdown}
      </div>
    );
  }
}

export default Menu;
