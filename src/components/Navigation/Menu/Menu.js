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
          <li><NavLink to='/workouts' className={classes.Link}>Workouts</NavLink></li>
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
