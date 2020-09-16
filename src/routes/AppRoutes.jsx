import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Navigation from './../components/Navigation'

import Home from './../components/pages/Home'
import AddTask from './../components/pages/AddTask'
import Help from './../components/pages/Help'

class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Navigation />
        <Switch> 
          <Route path="/" component={Home} exact={true}/>
          <Route path="/add" component={AddTask}  />
          <Route path="/help" component={Help} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;