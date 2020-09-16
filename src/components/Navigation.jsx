import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import './../styles.css';

class Navigation extends Component {
  render(){
    return(
      <div>
        <h1>Navigation</h1>
        <NavLink to="/" activeClassName="active" className="non-active" exact={true}>Tasks</NavLink>
        <NavLink to="/add" activeClassName="active" className="non-active">Add Task</NavLink>
        <NavLink to="/help"  activeClassName="active" className="non-active">Help</NavLink>
        <hr/>
      </div>
    );
  }
}

export default Navigation;